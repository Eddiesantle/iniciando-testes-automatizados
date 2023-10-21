import assert, { deepStrictEqual } from "assert";

import Product from "./product.js";
import Service from "./service.js";

const callTracker = new assert.CallTracker()

// quando o programa terminar valida todas as chamadas
process.on('exit', () => callTracker.verify())



// should throw an error when description is less than 5 caracteres long
{
    // MOCK EXAMPLE
    const params = {
        description: 'my p',
        id: 1,
        price: 100
    }

    const product = new Product({
        onCreate: () => { },
        service: new Service()
    })

    assert.rejects(
        () => product.create(params),
        { message: 'description must be providedbe higher than 5' },
        'it should throw an error with wrong description'
    )

}

// should save product seccessfully
{

    // MOCK => O que precisamos para o teste funcionar
    const params = {
        description: 'my product',
        id: 1,
        price: 100
    }

    // serviceStub = impedir que seja online
    const spySave = callTracker.calls(1)
    const serviceStub = {
        async save(params) {
            // SPY: espiona a função
            spySave(params)
            return `${params.id} saved with success!`
        }
    }

    const fn = (msg) => {
        assert.deepStrictEqual(msg.id, params.id, 'id should be the same')
        assert.deepStrictEqual(msg.price, params.price, 'price should be the same')
        assert.deepStrictEqual(msg.description, params.description.toUpperCase(), 'description should be the same')
    }

    const spyCreate = callTracker.calls(fn, 1)

    const product = new Product({
        onCreate: spyCreate,
        service: serviceStub // Aqui fizemos STUB
    })

    const result = await product.create(params)

    assert.deepStrictEqual(result, `${params.id} SAVED WITH SUCCESS!`)

}