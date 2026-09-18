const balance = document.getElementById('total-balance');
const money_plus = document.getElementById('total-income');
const money_minus = document.getElementById('total-expense');
const list = document.getElementById('list');
const form = document.getElementById('transaction-form');
const desc = document.getElementById('desc');
const amount = document.getElementById('amount');
const type = document.getElementById('type');
const category = document.getElementById('category');

const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));

let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

// Adicionar transação
function addTransaction(e) {
    e.preventDefault();

    if (desc.value.trim() === '' || amount.value.trim() === '') {
        alert('Por favor, adicione uma descrição e um valor.');
        return;
    }

    const transaction = {
        id: generateID(),
        desc: desc.value,
        amount: type.value === 'expense' ? -Math.abs(parseFloat(amount.value)) : Math.abs(parseFloat(amount.value)),
        category: category.value,
        type: type.value
    };

    transactions.push(transaction);

    addTransactionDOM(transaction);
    updateValues();
    updateLocalStorage();

    desc.value = '';
    amount.value = '';
}

// Gerar ID aleatório
function generateID() {
    return Math.floor(Math.random() * 100000000);
}

// Adicionar transação ao DOM
function addTransactionDOM(transaction) {
    const sign = transaction.amount < 0 ? '-' : '+';
    const item = document.createElement('li');

    item.classList.add(transaction.amount < 0 ? 'expense' : 'income');

    item.innerHTML = `
        <div class="transaction-info">
            <span class="transaction-desc">${transaction.desc}</span>
            <span class="transaction-cat">${transaction.category}</span>
        </div>
        <div style="display: flex; align-items: center;">
            <span class="transaction-amount">${sign} R$ ${Math.abs(transaction.amount).toFixed(2)}</span>
            <button class="delete-btn" onclick="removeTransaction(${transaction.id})"><i class="fas fa-trash"></i></button>
        </div>
    `;

    list.appendChild(item);
}

// Atualizar totais
function updateValues() {
    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

    balance.innerText = `R$ ${total}`;
    money_plus.innerText = `R$ ${income}`;
    money_minus.innerText = `R$ ${expense}`;
}

// Remover transação pelo ID
function removeTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);
    updateLocalStorage();
    init();
}

// Atualizar Local Storage
function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Inicializar App
function init() {
    list.innerHTML = '';
    transactions.forEach(addTransactionDOM);
    updateValues();
}

init();

form.addEventListener('submit', addTransaction);
