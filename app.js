const balance = document.getElementById('total-balance');
const money_plus = document.getElementById('total-income');
const money_minus = document.getElementById('total-expense');
const list = document.getElementById('list');
const form = document.getElementById('transaction-form');
const desc = document.getElementById('desc');
const amount = document.getElementById('amount');
const type = document.getElementById('type');
const category = document.getElementById('category');

let categoryChartInstance = null;
let cashflowChartInstance = null;

// Dados mockados inspirados no Dashboard Excel solicitado
const defaultData = [
    { id: 1, desc: 'Salário Base', amount: 6500.00, category: 'Salário', type: 'income' },
    { id: 2, desc: 'Aluguel e Condomínio', amount: -2100.00, category: 'Moradia', type: 'expense' },
    { id: 3, desc: 'Supermercado', amount: -1150.00, category: 'Alimentação', type: 'expense' },
    { id: 4, desc: 'Energia Elétrica', amount: -280.00, category: 'Moradia', type: 'expense' },
    { id: 5, desc: 'Combustível', amount: -400.00, category: 'Transporte', type: 'expense' },
    { id: 6, desc: 'Plano de Saúde', amount: -450.00, category: 'Saúde', type: 'expense' },
    { id: 7, desc: 'Lazer e Jantares', amount: -320.00, category: 'Lazer', type: 'expense' }
];

const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));
let transactions = localStorage.getItem('transactions') !== null && localStorageTransactions.length > 0 
    ? localStorageTransactions 
    : defaultData;

function addTransaction(e) {
    e.preventDefault();
    if (desc.value.trim() === '' || amount.value.trim() === '') return;

    const transaction = {
        id: Math.floor(Math.random() * 100000000),
        desc: desc.value,
        amount: type.value === 'expense' ? -Math.abs(parseFloat(amount.value)) : Math.abs(parseFloat(amount.value)),
        category: category.value,
        type: type.value
    };

    transactions.push(transaction);
    addTransactionDOM(transaction);
    updateValues();
    updateLocalStorage();
    updateCharts();
    desc.value = ''; amount.value = '';
}

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
            <span class="transaction-amount">${sign} R$ ${Math.abs(transaction.amount).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
            <button class="delete-btn" onclick="removeTransaction(${transaction.id})"><i class="fas fa-trash"></i></button>
        </div>
    `;
    list.prepend(item);
}

function updateValues() {
    const amounts = transactions.map(t => t.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0);
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0);
    const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1;

    balance.innerText = `R$ ${total.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
    money_plus.innerText = `R$ ${income.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
    money_minus.innerText = `R$ ${expense.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
}

function removeTransaction(id) {
    transactions = transactions.filter(t => t.id !== id);
    updateLocalStorage();
    init();
}

function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

function updateCharts() {
    const expenses = transactions.filter(t => t.amount < 0);
    
    // Gráfico de Pizza
    const categoriesMap = {};
    expenses.forEach(t => {
        categoriesMap[t.category] = (categoriesMap[t.category] || 0) + Math.abs(t.amount);
    });

    const pieCtx = document.getElementById('categoryChart').getContext('2d');
    if (categoryChartInstance) categoryChartInstance.destroy();
    
    categoryChartInstance = new Chart(pieCtx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(categoriesMap),
            datasets: [{
                data: Object.values(categoriesMap),
                backgroundColor: ['#ef4444', '#f59e0b', '#3b82f6', '#10b981', '#8b5cf6', '#64748b'],
                borderWidth: 0
            }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'right' } } }
    });

    // Gráfico de Barras
    const totalInc = transactions.filter(t => t.amount > 0).reduce((a, b) => a + b.amount, 0);
    const totalExp = Math.abs(transactions.filter(t => t.amount < 0).reduce((a, b) => a + b.amount, 0));

    const barCtx = document.getElementById('cashflowChart').getContext('2d');
    if (cashflowChartInstance) cashflowChartInstance.destroy();

    cashflowChartInstance = new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: ['Receitas', 'Despesas'],
            datasets: [{
                label: 'Valor (R$)',
                data: [totalInc, totalExp],
                backgroundColor: ['#10b981', '#ef4444'],
                borderRadius: 6
            }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
    });
}

function init() {
    list.innerHTML = '';
    transactions.forEach(addTransactionDOM);
    updateValues();
    updateCharts();
}

init();
form.addEventListener('submit', addTransaction);

// --- NEW FEATURES: Dark Mode & Export ---
const themeToggleBtn = document.getElementById('theme-toggle');
const exportBtn = document.getElementById('export-btn');

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        updateCharts(); // Refresh chart colors
    });
}

if (exportBtn) {
    exportBtn.addEventListener('click', () => {
        if (transactions.length === 0) return alert('Sem dados.');
        const rows = ['Data,Descricao,Categoria,Valor'];
        transactions.forEach(t => {
            rows.push([t.date || '', '"'+t.desc+'"', '"'+t.category+'"', t.amount].join(','));
        });
        const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), rows.join('\n')], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'Dashboard_Export.csv';
        link.click();
    });
}

// --- SISTEMA DE NAVEGACAO SPA (ABAS) ---
document.addEventListener("DOMContentLoaded", () => {
    const sidebarItems = document.querySelectorAll('.sidebar li');
    if(sidebarItems.length >= 3) {
        sidebarItems.forEach(item => item.classList.add('tab-btn'));
    }

    const mainContent = document.querySelector('.main-content');
    if(!mainContent) return;
    const header = mainContent.querySelector('header');
    
    // Empacota o painel principal (Overview)
    const overviewDiv = document.createElement('div');
    overviewDiv.id = 'view-overview';
    overviewDiv.className = 'view-section';
    
    while(header.nextSibling) {
        overviewDiv.appendChild(header.nextSibling);
    }
    mainContent.appendChild(overviewDiv);

    // Cria a view de Transacoes
    const transDiv = document.createElement('div');
    transDiv.id = 'view-transactions';
    transDiv.className = 'view-section';
    transDiv.style.display = 'none';
    transDiv.innerHTML = '<div style="padding: 20px;"><h2 style="margin-bottom:20px;">Histórico Completo</h2><ul id="full-tx-list" class="list"></ul></div>';
    mainContent.appendChild(transDiv);

    // Cria a view de Metas
    const goalsDiv = document.createElement('div');
    goalsDiv.id = 'view-goals';
    goalsDiv.className = 'view-section';
    goalsDiv.style.display = 'none';
    goalsDiv.innerHTML = '<div style="padding: 20px;"><h2 style="margin-bottom:20px;">Metas Financeiras</h2><div class="card" style="margin-top:20px;text-align:center;padding:40px;"><i class="fas fa-bullseye" style="font-size:3rem;color:var(--text-muted);margin-bottom:15px;"></i><p>Em breve: Definição e acompanhamento inteligente de metas mensais e economia.</p></div></div>';
    mainContent.appendChild(goalsDiv);

    const tabs = document.querySelectorAll('.tab-btn');
    
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Remove active status
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Esconde tudo
            overviewDiv.style.display = 'none';
            transDiv.style.display = 'none';
            goalsDiv.style.display = 'none';
            
            // Mostra a selecionada
            if(index === 0) overviewDiv.style.display = 'block';
            if(index === 1) {
                transDiv.style.display = 'block';
                renderFullTransactions();
            }
            if(index === 2) goalsDiv.style.display = 'block';
        });
    });

    // Funcao para renderizar as transacoes na nova guia
    function renderFullTransactions() {
        const list = document.getElementById('full-tx-list');
        if(!list) return;
        list.innerHTML = '';
        const sorted = [...transactions].sort((a,b) => new Date(b.date) - new Date(a.date));
        sorted.forEach(t => {
            const sign = t.amount < 0 ? '-' : '+';
            const li = document.createElement('li');
            li.classList.add(t.amount < 0 ? 'minus' : 'plus');
            let dateStr = '';
            if(t.date) {
                const parts = t.date.split('-');
                if(parts.length === 3) dateStr = parts[2] + '/' + parts[1] + '/' + parts[0] + ' - ';
            }
            li.innerHTML = `
                ${dateStr}${t.desc} 
                <span>${sign}R$ ${Math.abs(t.amount).toFixed(2).replace('.',',')}</span>
            `;
            list.appendChild(li);
        });
    }
});
