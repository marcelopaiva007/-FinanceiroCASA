const form = document.getElementById('form');
const desc = document.getElementById('desc');
const amount = document.getElementById('amount');
const category = document.getElementById('category');
const dateEl = document.getElementById('date');
const list = document.getElementById('list');

const balance = document.getElementById('total-balance');
const money_plus = document.getElementById('total-income');
const money_minus = document.getElementById('total-expense');

let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

function formatDateBr(dateString) {
    if(!dateString) return '';
    const p = dateString.split('-');
    if(p.length !== 3) return dateString;
    return `${p[2]}/${p[1]}/${p[0]}`;
}

function addTransactionDOM(t) {
    if(!list) return;
    const sign = t.amount < 0 ? '-' : '+';
    const item = document.createElement('li');
    item.classList.add(t.amount < 0 ? 'minus' : 'plus');
    item.innerHTML = `${t.date ? formatDateBr(t.date) + ' - ' : ''}${t.desc} <span>${sign}R$ ${Math.abs(t.amount).toFixed(2).replace('.', ',')}</span>`;
    list.appendChild(item);
}

function updateValues() {
    const amounts = transactions.map(t => t.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

    if(balance) balance.innerText = `R$ ${total.replace('.', ',')}`;
    if(money_plus) money_plus.innerText = `R$ ${income.replace('.', ',')}`;
    if(money_minus) money_minus.innerText = `R$ ${expense.replace('.', ',')}`;
}

let catChartInstance = null;
let cashChartInstance = null;

function updateCharts() {
    const expenses = transactions.filter(t => t.amount < 0);
    const catTotals = {};
    expenses.forEach(t => { catTotals[t.category] = (catTotals[t.category] || 0) + Math.abs(t.amount); });

    const ctx1El = document.getElementById('categoryChart');
    if(ctx1El) {
        const ctx1 = ctx1El.getContext('2d');
        if(catChartInstance) catChartInstance.destroy();
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const textColor = isDark ? '#f8fafc' : '#334155';
        catChartInstance = new Chart(ctx1, {
            type: 'doughnut',
            data: { labels: Object.keys(catTotals), datasets: [{ data: Object.values(catTotals), backgroundColor: ['#f59e0b', '#3b82f6', '#10b981', '#8b5cf6', '#64748b'], borderWidth: 0 }] },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'right', labels: { color: textColor } } } }
        });
    }

    const ctx2El = document.getElementById('cashflowChart');
    if(ctx2El) {
        const ctx2 = ctx2El.getContext('2d');
        if(cashChartInstance) cashChartInstance.destroy();
        const totalInc = transactions.filter(t => t.amount > 0).reduce((a, b) => a + b.amount, 0);
        const totalExp = Math.abs(transactions.filter(t => t.amount < 0).reduce((a, b) => a + b.amount, 0));
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const textColor = isDark ? '#f8fafc' : '#334155';
        cashChartInstance = new Chart(ctx2, {
            type: 'bar',
            data: { labels: ['Receitas', 'Despesas'], datasets: [{ data: [totalInc, totalExp], backgroundColor: ['#10b981', '#ef4444'], borderRadius: 6 }] },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { ticks: { color: textColor } }, x: { ticks: { color: textColor } } } }
        });
    }
}

function addTransaction(e) {
    e.preventDefault();
    const t = { id: Math.floor(Math.random() * 100000000), date: dateEl.value || new Date().toISOString().split('T')[0], desc: desc.value, amount: +amount.value, category: category.value };
    transactions.push(t);
    localStorage.setItem('transactions', JSON.stringify(transactions));
    init();
    desc.value = ''; amount.value = '';
}

function init() {
    if(list) list.innerHTML = '';
    transactions.sort((a,b) => new Date(b.date) - new Date(a.date)).forEach(addTransactionDOM);
    updateValues();
    updateCharts();
}

if(form) form.addEventListener('submit', addTransaction);

const themeToggleBtn = document.getElementById('theme-toggle');
const exportBtn = document.getElementById('export-btn');

if(themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        updateCharts();
    });
}

if(exportBtn) {
    exportBtn.addEventListener('click', () => {
        if(transactions.length === 0) return alert('Sem dados.');
        const rows = ['Data,Descricao,Categoria,Valor'];
        transactions.forEach(t => rows.push([t.date, `"${t.desc}"`, `"${t.category}"`, t.amount].join(',')));
        const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), rows.join('\n')], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'Export.csv';
        link.click();
    });
}

init();
