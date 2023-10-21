// Exemplo de código "sujo" que precisa de refatoração e limpeza

const database = {
  users: [
    { id: 1, name: "User A", balance: 1000 },
    { id: 2, name: "User B", balance: 500 },
  ],
  transactions: [],
};

function makePayment(senderId, receiverId, amount) {
  const sender = database.users.find((user) => user.id === senderId);
  const receiver = database.users.find((user) => user.id === receiverId);

  if (!sender || !receiver) {
    console.log("Erro: Usuário não encontrado.");
    return;
  }

  if (sender.balance < amount) {
    console.log("Erro: Saldo insuficiente.");
    return;
  }

  sender.balance -= amount;
  receiver.balance += amount;

  const transaction = {
    sender: sender.name,
    receiver: receiver.name,
    amount,
    date: new Date(),
  };

  database.transactions.push(transaction);

  console.log("Pagamento efetuado com sucesso.");
}

function generateInvoice(userId, amount) {
  const user = database.users.find((user) => user.id === userId);

  if (!user) {
    console.log("Erro: Usuário não encontrado.");
    return;
  }

  const invoice = {
    userId,
    userName: user.name,
    amount,
    dueDate: new Date(),
  };

  console.log("Fatura gerada com sucesso.");
  return invoice;
}

function main() {
  makePayment(1, 2, 200);
  makePayment(2, 1, 100);
  generateInvoice(1, 300);
}

main();
