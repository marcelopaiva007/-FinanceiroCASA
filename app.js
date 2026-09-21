const form = document.getElementById('form');
const desc = document.getElementById('desc');
const amount = document.getElementById('amount');
const category = document.getElementById('category');
const dateEl = document.getElementById('date');
const list = document.getElementById('list');

const balance = document.getElementById('total-balance');
const money_plus = document.getElementById('total-income');
const money_minus = document.getElementById('total-expense');


const defaultAugustTransactions = [
    { id: 201, date: "2026-08-01", desc: "Unimed", amount: -1500.00, category: "Saúde" },
    { id: 202, date: "2026-08-02", desc: "Escola", amount: -1200.00, category: "Outros" },
    { id: 203, date: "2026-08-03", desc: "Polo", amount: -850.00, category: "Transporte" },
    { id: 204, date: "2026-08-04", desc: "VIVO", amount: -250.00, category: "Moradia" },
    { id: 205, date: "2026-08-05", desc: "Dra. Fábia", amount: -500.00, category: "Saúde" },
    { id: 206, date: "2026-08-06", desc: "Água e Luz", amount: -420.00, category: "Moradia" },
    { id: 207, date: "2026-08-07", desc: "Gasolina", amount: -400.00, category: "Transporte" },
    { id: 208, date: "2026-08-08", desc: "Dra. Roberta", amount: -350.00, category: "Saúde" },
    { id: 209, date: "2026-08-09", desc: "Mercado", amount: -1800.00, category: "Alimentação" },
    { id: 210, date: "2026-08-10", desc: "Cartão de Crédito", amount: -2450.00, category: "Outros" },
    { id: 211, date: "2026-08-11", desc: "Farmácia", amount: -180.00, category: "Saúde" },
    { id: 212, date: "2026-08-12", desc: "Academia", amount: -160.00, category: "Lazer" },
    { id: 101, date: "2026-08-01", desc: "Receita / Salário", amount: 12000.00, category: "Receita" }
];

let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

const hasAugustExpenses = transactions.some(t => t.date && t.date.startsWith('2026-08'));
if (!hasAugustExpenses) {
    transactions = [...defaultAugustTransactions, ...transactions];
    localStorage.setItem('transactions', JSON.stringify(transactions));
}


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

// --- LOGICA DE IMPORTACAO (OCR E CSV) ---
const importFile = document.getElementById('import-file');
if(importFile) {
    importFile.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if(!file) return;

        if(file.name.endsWith('.csv')) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const text = event.target.result;
                const rows = text.split('
').slice(1);
                let added = 0;
                rows.forEach(row => {
                    const cols = row.split(',');
                    if(cols.length >= 4) {
                        let dateVal = cols[0].trim() || new Date().toISOString().split('T')[0];
                        let descVal = cols[1].replace(/"/g, '').trim();
                        let catVal = cols[2].replace(/"/g, '').trim();
                        let amountVal = parseFloat(cols[3].trim());
                        if(!isNaN(amountVal) && descVal) {
                            transactions.push({ id: Math.floor(Math.random() * 100000000), date: dateVal, desc: descVal, amount: amountVal, category: catVal || 'Outros' });
                            added++;
                        }
                    }
                });
                if(added > 0) {
                    localStorage.setItem('transactions', JSON.stringify(transactions));
                    init();
                    alert(added + ' transacoes importadas com sucesso do CSV!');
                }
            };
            reader.readAsText(file);
        } else if (file.type.startsWith('image/')) {
            alert('Iniciando Inteligencia Artificial (OCR) para ler a foto. Isso pode levar de 5 a 15 segundos...');
            try {
                const result = await Tesseract.recognize(file, 'por');
                const text = result.data.text;
                
                // Tenta rastrear formato financeiro (ex: R$ 149,90 ou 149.00)
                const amountMatch = text.match(/(?:R$|R$s*)?s*(d+[.,]d{2})/i);
                let foundAmount = '';
                if(amountMatch) foundAmount = amountMatch[1].replace(',', '.');
                
                const descEl = document.getElementById('desc');
                const amountEl = document.getElementById('amount');
                
                if(descEl) descEl.value = "Lido por IA (Recibo)";
                if(amountEl && foundAmount) amountEl.value = -Math.abs(parseFloat(foundAmount));
                
                // Volta pra home para exibir o preenchimento
                const overviewTab = document.getElementById('tab-overview');
                if(overviewTab) overviewTab.click();
                
                alert('Foto lida! Confira se a IA capturou o valor correto no formulário, ajuste a categoria e salve.');
            } catch(err) {
                alert('Erro na leitura óptica: ' + err.message);
            }
        } else {
            alert('Formato incompatível. Use CSV ou Fotos.');
        }
        importFile.value = '';
    });
}
