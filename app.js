const form = document.getElementById('form');
const desc = document.getElementById('desc');
const amount = document.getElementById('amount');
const category = document.getElementById('category');
const dateEl = document.getElementById('date');
const list = document.getElementById('list');

const money_minus = document.getElementById('total-expense');
const avg_expense = document.getElementById('avg-expense');
const max_expense = document.getElementById('max-expense');


const defaultAugustTransactions = [
    {
        "id": 301,
        "date": "2026-08-01",
        "desc": "restante",
        "amount": -300,
        "category": "Pessoal"
    },
    {
        "id": 302,
        "date": "2026-08-02",
        "desc": "Aline empregada",
        "amount": -400,
        "category": "Salario Empregadas"
    },
    {
        "id": 303,
        "date": "2026-08-03",
        "desc": "água",
        "amount": -30,
        "category": "Condominio, Agua, Luz, Pisicina e Jardim"
    },
    {
        "id": 304,
        "date": "2026-08-04",
        "desc": "frutas",
        "amount": -50,
        "category": "Alimentação e Mercado"
    },
    {
        "id": 305,
        "date": "2026-08-05",
        "desc": "fotos",
        "amount": -50,
        "category": "Pessoal"
    },
    {
        "id": 306,
        "date": "2026-08-06",
        "desc": "carne",
        "amount": -80,
        "category": "Alimentação e Mercado"
    },
    {
        "id": 307,
        "date": "2026-08-07",
        "desc": "terapia jessika",
        "amount": -330,
        "category": "Extra - Consulta e Terapia"
    },
    {
        "id": 308,
        "date": "2026-08-08",
        "desc": "terapia Davi",
        "amount": -180,
        "category": "Extra - Consulta e Terapia"
    },
    {
        "id": 309,
        "date": "2026-08-09",
        "desc": "escola DAVI",
        "amount": -60,
        "category": "Educação"
    },
    {
        "id": 310,
        "date": "2026-08-10",
        "desc": "Davi - escola",
        "amount": -100,
        "category": "Educação"
    },
    {
        "id": 311,
        "date": "2026-08-11",
        "desc": "Aline empregada",
        "amount": -400,
        "category": "Salario Empregadas"
    },
    {
        "id": 312,
        "date": "2026-08-12",
        "desc": "condomínio",
        "amount": -750,
        "category": "Condominio, Agua, Luz, Pisicina e Jardim"
    },
    {
        "id": 313,
        "date": "2026-08-13",
        "desc": "Davi ESCOLA",
        "amount": -250,
        "category": "Educação"
    },
    {
        "id": 314,
        "date": "2026-08-14",
        "desc": "frutas",
        "amount": -50,
        "category": "Alimentação e Mercado"
    },
    {
        "id": 315,
        "date": "2026-08-15",
        "desc": "carne",
        "amount": -100,
        "category": "Alimentação e Mercado"
    },
    {
        "id": 316,
        "date": "2026-08-16",
        "desc": "terapia jessika",
        "amount": -330,
        "category": "Extra - Consulta e Terapia"
    },
    {
        "id": 317,
        "date": "2026-08-17",
        "desc": "Davi aula de futebol",
        "amount": -80,
        "category": "Lazer"
    },
    {
        "id": 318,
        "date": "2026-08-18",
        "desc": "Aline empregada",
        "amount": -400,
        "category": "Salario Empregadas"
    },
    {
        "id": 319,
        "date": "2026-08-19",
        "desc": "frutas",
        "amount": -50,
        "category": "Alimentação e Mercado"
    },
    {
        "id": 320,
        "date": "2026-08-20",
        "desc": "galinha",
        "amount": -80,
        "category": "Alimentação e Mercado"
    },
    {
        "id": 321,
        "date": "2026-08-21",
        "desc": "terapia jessika",
        "amount": -330,
        "category": "Extra - Consulta e Terapia"
    },
    {
        "id": 322,
        "date": "2026-08-22",
        "desc": "terapia Davi",
        "amount": -180,
        "category": "Extra - Consulta e Terapia"
    },
    {
        "id": 323,
        "date": "2026-08-23",
        "desc": "padaria",
        "amount": -50,
        "category": "Alimentação e Mercado"
    },
    {
        "id": 324,
        "date": "2026-08-24",
        "desc": "Aline - empregada",
        "amount": -400,
        "category": "Salario Empregadas"
    },
    {
        "id": 325,
        "date": "2026-08-25",
        "desc": "bolas",
        "amount": -150,
        "category": "Lazer"
    },
    {
        "id": 326,
        "date": "2026-08-26",
        "desc": "carne",
        "amount": -180,
        "category": "Alimentação e Mercado"
    },
    {
        "id": 327,
        "date": "2026-08-27",
        "desc": "frutas",
        "amount": -50,
        "category": "Alimentação e Mercado"
    },
    {
        "id": 328,
        "date": "2026-08-28",
        "desc": "terapia Jessika",
        "amount": -330,
        "category": "Extra - Consulta e Terapia"
    },
    {
        "id": 329,
        "date": "2026-08-29",
        "desc": "terapia Davi",
        "amount": -180,
        "category": "Extra - Consulta e Terapia"
    },
    {
        "id": 330,
        "date": "2026-08-30",
        "desc": "assessoria escolar",
        "amount": -450,
        "category": "Educação"
    },
    {
        "id": 331,
        "date": "2026-08-31",
        "desc": "Aline - empregada",
        "amount": -400,
        "category": "Salario Empregadas"
    },
    {
        "id": 332,
        "date": "2026-08-01",
        "desc": "frutas",
        "amount": -50,
        "category": "Alimentação e Mercado"
    },
    {
        "id": 333,
        "date": "2026-08-02",
        "desc": "escola",
        "amount": -800,
        "category": "Educação"
    },
    {
        "id": 334,
        "date": "2026-08-03",
        "desc": "aula patins DAVI",
        "amount": -60,
        "category": "Lazer"
    },
    {
        "id": 335,
        "date": "2026-08-04",
        "desc": "carne",
        "amount": -100,
        "category": "Alimentação e Mercado"
    },
    {
        "id": 336,
        "date": "2026-08-05",
        "desc": "faxina casa de PRAIA - laser - baia",
        "amount": -100,
        "category": "Salario Empregadas"
    },
    {
        "id": 337,
        "date": "2026-08-06",
        "desc": "empregada nete",
        "amount": -1620,
        "category": "Salario Empregadas"
    },
    {
        "id": 338,
        "date": "2026-08-07",
        "desc": "limpeza da piscina",
        "amount": -200,
        "category": "Condominio, Agua, Luz, Pisicina e Jardim"
    },
    {
        "id": 339,
        "date": "2026-08-08",
        "desc": "jardinagem",
        "amount": -200,
        "category": "Condominio, Agua, Luz, Pisicina e Jardim"
    },
    {
        "id": 340,
        "date": "2026-08-09",
        "desc": "Plano de Saúde",
        "amount": -3300,
        "category": "Plano de Saúde"
    },
    {
        "id": 341,
        "date": "2026-08-10",
        "desc": "Despesa do carro (Parcela e Manutenção)",
        "amount": -2200,
        "category": "Parcela de Veículo e Manutenção"
    },
    {
        "id": 342,
        "date": "2026-08-11",
        "desc": "Energia elétrica",
        "amount": -450,
        "category": "Condominio, Agua, Luz, Pisicina e Jardim"
    },
    {
        "id": 343,
        "date": "2026-08-12",
        "desc": "Sacolão",
        "amount": -249.59,
        "category": "Alimentação e Mercado"
    },
    {
        "id": 344,
        "date": "2026-08-13",
        "desc": "Supermercado Bem Mais",
        "amount": -480,
        "category": "Alimentação e Mercado"
    },
    {
        "id": 345,
        "date": "2026-08-14",
        "desc": "Leitura e Livros (Davi)",
        "amount": -110,
        "category": "Educação"
    },
    {
        "id": 346,
        "date": "2026-08-15",
        "desc": "Novo Atacarejo chocolates",
        "amount": -740,
        "category": "Alimentação e Mercado"
    },
    {
        "id": 347,
        "date": "2026-08-16",
        "desc": "Despesas Diversas Família",
        "amount": -270,
        "category": "Pessoal"
    },
    {
        "id": 348,
        "date": "2026-08-17",
        "desc": "Fotos",
        "amount": -110,
        "category": "Pessoal"
    },
    {
        "id": 349,
        "date": "2026-08-18",
        "desc": "Sushi Restaurante",
        "amount": -100,
        "category": "Restaurante e App"
    },
    {
        "id": 350,
        "date": "2026-08-19",
        "desc": "Rede Farma 3/3",
        "amount": -230,
        "category": "Farmacia"
    },
    {
        "id": 351,
        "date": "2026-08-20",
        "desc": "Casa Tudo Utilidades",
        "amount": -100,
        "category": "Condominio, Agua, Luz, Pisicina e Jardim"
    },
    {
        "id": 352,
        "date": "2026-08-21",
        "desc": "Americanas Compras",
        "amount": -110,
        "category": "Pessoal"
    },
    {
        "id": 353,
        "date": "2026-08-22",
        "desc": "Colégio da Luz (Davi)",
        "amount": -250,
        "category": "Educação"
    },
    {
        "id": 354,
        "date": "2026-08-23",
        "desc": "Supermercado Bem Mais",
        "amount": -800,
        "category": "Alimentação e Mercado"
    },
    {
        "id": 355,
        "date": "2026-08-24",
        "desc": "Sacolão",
        "amount": -135,
        "category": "Alimentação e Mercado"
    }
];

const DATA_VERSION = 'v7_agosto_auditado_limpo';
let transactions = defaultAugustTransactions;

try {
    const currentVersion = localStorage.getItem('data_version');
    const saved = localStorage.getItem('transactions');
    if (currentVersion !== DATA_VERSION || !saved) {
        transactions = defaultAugustTransactions;
        localStorage.setItem('transactions', JSON.stringify(transactions));
        localStorage.setItem('data_version', DATA_VERSION);
    } else {
        transactions = JSON.parse(saved);
    }
} catch (e) {
    transactions = defaultAugustTransactions;
    localStorage.setItem('transactions', JSON.stringify(transactions));
    localStorage.setItem('data_version', DATA_VERSION);
}



// ==========================================
// GESTÃO DE COMPETÊNCIA: MÊS E ANO
// ==========================================
let currentSelectedPeriod = '2026-08'; // 'YYYY-MM' ou 'all' ou 'YYYY'

const MONTH_NAMES_PT = {
    '01': 'Janeiro',
    '02': 'Fevereiro',
    '03': 'Março',
    '04': 'Abril',
    '05': 'Maio',
    '06': 'Junho',
    '07': 'Julho',
    '08': 'Agosto',
    '09': 'Setembro',
    '10': 'Outubro',
    '11': 'Novembro',
    '12': 'Dezembro'
};

function formatPeriodLabel(key) {
    if (key === 'all') return 'Todo o Período (Consolidado Geral)';
    const parts = key.split('-');
    if (parts.length === 2) {
        const year = parts[0];
        const mName = MONTH_NAMES_PT[parts[1]] || parts[1];
        return `${mName} de ${year}`;
    }
    if (parts.length === 1 && parts[0].length === 4) {
        return `Ano ${parts[0]} (Total Anual)`;
    }
    return key;
}

function populateMonthYearSelectors() {
    const globalSel = document.getElementById('global-month-year-select');
    const reportSel = document.getElementById('report-month-select');

    // Extrair todos os meses e anos distintos presentes nas transações
    const periodsSet = new Set();
    const yearsSet = new Set();
    transactions.forEach(t => {
        if (t.date && t.date.length >= 7) {
            const ym = t.date.substring(0, 7);
            periodsSet.add(ym);
            yearsSet.add(t.date.substring(0, 4));
        }
    });

    const sortedPeriods = Array.from(periodsSet).sort().reverse();
    const sortedYears = Array.from(yearsSet).sort().reverse();

    let optionsHtml = '';
    
    if (sortedPeriods.length > 0) {
        optionsHtml += '<optgroup label="Meses Disponíveis">';
        sortedPeriods.forEach(p => {
            const isSel = (currentSelectedPeriod === p) ? 'selected' : '';
            optionsHtml += `<option value="${p}" ${isSel}>${formatPeriodLabel(p)}</option>`;
        });
        optionsHtml += '</optgroup>';
    }

    if (sortedYears.length > 0) {
        optionsHtml += '<optgroup label="Consolidado Anual">';
        sortedYears.forEach(y => {
            const isSel = (currentSelectedPeriod === y) ? 'selected' : '';
            optionsHtml += `<option value="${y}" ${isSel}>Ano ${y} (Total Acumulado)</option>`;
        });
        optionsHtml += '</optgroup>';
    }

    const isAllSel = (currentSelectedPeriod === 'all') ? 'selected' : '';
    optionsHtml += `<option value="all" ${isAllSel}>Todo o Histórico (Visão Geral)</option>`;

    if (globalSel) {
        globalSel.innerHTML = optionsHtml;
        globalSel.value = currentSelectedPeriod;
    }
    if (reportSel) {
        reportSel.innerHTML = optionsHtml;
        reportSel.value = currentSelectedPeriod;
    }
}

function getFilteredTransactions() {
    if (!currentSelectedPeriod || currentSelectedPeriod === 'all') {
        return transactions;
    }
    if (currentSelectedPeriod.length === 7) {
        return transactions.filter(t => t.date && t.date.startsWith(currentSelectedPeriod));
    }
    if (currentSelectedPeriod.length === 4) {
        return transactions.filter(t => t.date && t.date.startsWith(currentSelectedPeriod));
    }
    return transactions;
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
    const currentTxs = getFilteredTransactions();
    const expenses = currentTxs.map(t => Math.abs(t.amount));
    const totalExp = expenses.reduce((acc, item) => acc + item, 0);
    const count = expenses.length;
    const avgExp = count > 0 ? (totalExp / count) : 0;
    const maxExp = count > 0 ? Math.max(...expenses) : 0;

    if(money_minus) money_minus.innerText = `R$ ${totalExp.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    if(avg_expense) avg_expense.innerText = `R$ ${avgExp.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    if(max_expense) max_expense.innerText = `R$ ${maxExp.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

let catChartInstance = null;
let cashChartInstance = null;

function updateCharts() {
    const currentTxs = getFilteredTransactions();
    const expenses = currentTxs.filter(t => t.amount < 0);
    const catTotals = {};
    expenses.forEach(t => { catTotals[t.category] = (catTotals[t.category] || 0) + Math.abs(t.amount); });

    const ctx1El = document.getElementById('categoryChart');
    if(ctx1El) {
        const categoryColorMap = {
            "Plano de Saúde": "#0284c7",
            "Extra - Consulta e Terapia": "#06b6d4",
            "Farmacia": "#ec4899",
            "Alimentação e Mercado": "#f97316",
            "Educação": "#eab308",
            "Parcela de Veículo e Manutenção": "#10b981",
            "Salario Empregadas": "#8b5cf6",
            "Lazer": "#14b8a6",
            "Condominio, Agua, Luz, Pisicina e Jardim": "#6366f1",
            "Restaurante e App": "#f43f5e",
            "Pessoal": "#d946ef",
            "TAXAS, JUROS, IMPOSTOS E ETC.": "#64748b",
            "Outros": "#94a3b8"
        };
        const chartLabels = Object.keys(catTotals);
        const chartColors = chartLabels.map(l => categoryColorMap[l] || "#94a3b8");

        const ctx1 = ctx1El.getContext('2d');
        if(catChartInstance) catChartInstance.destroy();
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const textColor = isDark ? '#f8fafc' : '#334155';
        const isMobile = window.innerWidth < 768;
        catChartInstance = new Chart(ctx1, {
            type: 'doughnut',
            data: { 
                labels: Object.keys(catTotals), 
                datasets: [{ 
                    data: Object.values(catTotals), 
                    backgroundColor: chartColors, 
                    borderWidth: 2,
                    borderColor: isDark ? '#1e293b' : '#ffffff'
                }] 
            },
            options: { 
                responsive: true, 
                maintainAspectRatio: false, 
                plugins: { 
                    legend: { 
                        position: isMobile ? 'bottom' : 'right', 
                        labels: { 
                            color: textColor,
                            boxWidth: 14,
                            padding: 12,
                            font: { size: 12 }
                        } 
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const val = context.parsed || 0;
                                return " R$ " + val.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                            }
                        }
                    }
                },
                cutout: '65%'
            }
        });
    }

    const ctx2El = document.getElementById('cashflowChart');
    if(ctx2El) {
        const ctx2 = ctx2El.getContext('2d');
        if(cashChartInstance) cashChartInstance.destroy();
        
        // Agrupar despesas por dia
        const dailyTotals = {};
        getFilteredTransactions().forEach(t => {
            const d = t.date ? t.date.split('-').slice(1).reverse().join('/') : 'Sem data';
            dailyTotals[d] = (dailyTotals[d] || 0) + Math.abs(t.amount);
        });

        const sortedDates = Object.keys(dailyTotals).sort();
        const sortedValues = sortedDates.map(d => dailyTotals[d]);

        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const textColor = isDark ? '#f8fafc' : '#334155';
        cashChartInstance = new Chart(ctx2, {
            type: 'bar',
            data: { 
                labels: sortedDates, 
                datasets: [{ 
                    label: 'Despesas por Dia (R$)',
                    data: sortedValues, 
                    backgroundColor: '#ef4444', 
                    borderRadius: 4 
                }] 
            },
            options: { 
                responsive: true, 
                maintainAspectRatio: false, 
                plugins: { legend: { display: false } }, 
                scales: { 
                    y: { ticks: { color: textColor } }, 
                    x: { ticks: { color: textColor, maxRotation: 45, minRotation: 45 } } 
                } 
            }
        });
    }
}

function addTransaction(e) {
    e.preventDefault();
    const t = { id: Math.floor(Math.random() * 100000000), date: dateEl.value || new Date().toISOString().split('T')[0], desc: desc.value, amount: -Math.abs(+amount.value), category: category.value };
    transactions.push(t);
    localStorage.setItem('transactions', JSON.stringify(transactions));
    init();
renderCategorizeTable();
    desc.value = ''; amount.value = '';
}

function init() {
    populateMonthYearSelectors();
    if(list) list.innerHTML = '';
    const filtered = getFilteredTransactions();
    filtered.sort((a,b) => new Date(b.date) - new Date(a.date)).forEach(addTransactionDOM);
    updateValues();
    updateCharts();
    updateDynamicMonthlyReport();
    if (typeof renderCategorizeTable === 'function') renderCategorizeTable();
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
                const rows = text.split(/\r?\n/).slice(1);
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

const resetDataBtn = document.getElementById('reset-data-btn');
if (resetDataBtn) {
    resetDataBtn.addEventListener('click', () => {
        if (confirm('Deseja recarregar todas as despesas consolidadas de Agosto de 2026?')) {
            localStorage.setItem('transactions', JSON.stringify(defaultAugustTransactions));
            localStorage.setItem('data_version', 'v5_despesas_only');
            transactions = [...defaultAugustTransactions];
            init();
            alert('Todas as despesas de Agosto de 2026 foram carregadas com sucesso!');
        }
    });
}
function downloadPDFReport() {
    const element = document.getElementById("report-pdf-container");
    if (!element) {
        alert("Erro: Relatório não encontrado.");
        return;
    }

    // Se estiver em outra aba, abre temporariamente para renderizar
    const viewGoals = document.getElementById("view-goals");
    const prevDisplay = viewGoals.style.display;
    viewGoals.style.display = "block";

    const opt = {
        margin: [10, 10, 10, 10],
        filename: "Relatorio_Reducao_Despesas_30_Familia.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    };

    if (typeof html2pdf !== "undefined") {
        html2pdf().set(opt).from(element).save().then(() => {
            viewGoals.style.display = prevDisplay;
        }).catch(err => {
            console.error(err);
            viewGoals.style.display = prevDisplay;
            window.print();
        });
    } else {
        viewGoals.style.display = prevDisplay;
        window.print();
    }
}

const pdfReportBtn = document.getElementById("pdf-report-btn");
if (pdfReportBtn) {
    pdfReportBtn.addEventListener("click", downloadPDFReport);
}

const btnDownloadPdfInner = document.getElementById("btn-download-pdf-inner");
if (btnDownloadPdfInner) {
    btnDownloadPdfInner.addEventListener("click", downloadPDFReport);
}

function updateDynamicMonthlyReport() {
    const monthSelect = document.getElementById("report-month-select");
    const selectedMonth = monthSelect ? monthSelect.value : currentSelectedPeriod;

    let filteredTxs = transactions.filter(t => t.amount < 0);
    if (selectedMonth && selectedMonth !== "all") {
        filteredTxs = filteredTxs.filter(t => t.date && t.date.startsWith(selectedMonth));
    }

    const totalExp = filteredTxs.reduce((sum, t) => sum + Math.abs(t.amount), 0);
    const cutMeta = totalExp * 0.30;
    const targetExp = totalExp * 0.70;

    const periodEl = document.getElementById("dyn-report-period");
    const totalEl = document.getElementById("dyn-report-total");
    const cutEl = document.getElementById("dyn-report-cut");
    const targetEl = document.getElementById("dyn-report-target");
    const argTotalEl = document.getElementById("dyn-arg-total");

    const monthNames = {
        "2026-08": "Agosto/2026",
        "2026-09": "Setembro/2026",
        "2026-10": "Outubro/2026",
        "2026-11": "Novembro/2026",
        "2026-12": "Dezembro/2026",
        "all": "Consolidado Geral"
    };

    if (periodEl) periodEl.innerText = "Base de Dados: " + (monthNames[selectedMonth] || selectedMonth);
    if (totalEl) totalEl.innerText = "R$ " + totalExp.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    if (cutEl) cutEl.innerText = "R$ " + cutMeta.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    if (targetEl) targetEl.innerText = "R$ " + targetExp.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    if (argTotalEl) argTotalEl.innerText = "R$ " + totalExp.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Sincronização dos Seletores de Mês e Ano
const globalMonthSelect = document.getElementById('global-month-year-select');
if (globalMonthSelect) {
    globalMonthSelect.addEventListener('change', function() {
        currentSelectedPeriod = this.value;
        const reportSel = document.getElementById('report-month-select');
        if (reportSel) reportSel.value = this.value;
        init();
    });
}

const reportMonthSelect = document.getElementById('report-month-select');
if (reportMonthSelect) {
    reportMonthSelect.addEventListener('change', function() {
        currentSelectedPeriod = this.value;
        const globSel = document.getElementById('global-month-year-select');
        if (globSel) globSel.value = this.value;
        init();
    });
}

const CATEGORY_LIST = [
    {
        "value": "Plano de Saúde",
        "label": "1. Plano de Saúde",
        "color": "#0284c7"
    },
    {
        "value": "Extra - Consulta e Terapia",
        "label": "2. Extra - Consulta e Terapia",
        "color": "#06b6d4"
    },
    {
        "value": "Farmacia",
        "label": "3. Farmacia",
        "color": "#ec4899"
    },
    {
        "value": "Alimentação e Mercado",
        "label": "4. Alimentação e Mercado",
        "color": "#f97316"
    },
    {
        "value": "Educação",
        "label": "5. Educação",
        "color": "#eab308"
    },
    {
        "value": "Parcela de Veículo e Manutenção",
        "label": "6. Parcela de Veículo e Manutenção",
        "color": "#10b981"
    },
    {
        "value": "Salario Empregadas",
        "label": "7. Salario Empregadas (Aline / Nete / Faxina)",
        "color": "#8b5cf6"
    },
    {
        "value": "Lazer",
        "label": "8. Lazer",
        "color": "#14b8a6"
    },
    {
        "value": "Condominio, Agua, Luz, Pisicina e Jardim",
        "label": "9. Condominio, Agua, Luz, Pisicina e Jardim",
        "color": "#6366f1"
    },
    {
        "value": "Restaurante e App",
        "label": "10. Restaurante e App",
        "color": "#f43f5e"
    },
    {
        "value": "Pessoal",
        "label": "11. Despesas Pessoais & Família",
        "color": "#d946ef"
    },
    {
        "value": "Outros",
        "label": "Outros",
        "color": "#94a3b8"
    }
];

function renderCategorizeTable() {
    const tbody = document.getElementById("categorize-table-body");
    const counter = document.getElementById("classify-counter");
    const totalEl = document.getElementById("classify-total-value");
    const searchInput = document.getElementById("search-expense-input");
    const catFilter = document.getElementById("filter-category-select");
    if (!tbody) return;

    if (catFilter && catFilter.options.length <= 1) {
        catFilter.innerHTML = "<option value=\"all\">Todas as Categorias</option>";
        CATEGORY_LIST.forEach(cat => {
            const opt = document.createElement("option");
            opt.value = cat.value;
            opt.textContent = cat.label;
            catFilter.appendChild(opt);
        });
    }

    const searchTerm = (searchInput ? searchInput.value : "").trim().toLowerCase();
    const selectedFilterCat = catFilter ? catFilter.value : "all";

    tbody.innerHTML = "";
    const currentTxs = getFilteredTransactions();
    let expenses = currentTxs.filter(t => t.amount < 0);

    if (selectedFilterCat !== "all") {
        expenses = expenses.filter(t => t.category === selectedFilterCat);
    }
    if (searchTerm) {
        expenses = expenses.filter(t => (t.desc && t.desc.toLowerCase().includes(searchTerm)) || (t.amount && Math.abs(t.amount).toString().includes(searchTerm)));
    }

    const totalSum = expenses.reduce((acc, t) => acc + Math.abs(t.amount), 0);

    if (counter) counter.innerText = expenses.length + " Despesas Listadas";
    if (totalEl) totalEl.innerText = "Total: R$ " + totalSum.toLocaleString("pt-BR", { minimumFractionDigits: 2 });

    if (expenses.length === 0) {
        tbody.innerHTML = "<tr><td colspan=\"5\" style=\"text-align: center; padding: 25px; color: #94a3b8; font-size: 0.95rem;\"><i class=\"fas fa-search\" style=\"font-size: 1.3rem; display: block; margin-bottom: 8px;\"></i>Nenhuma despesa encontrada com os filtros selecionados.</td></tr>";
        return;
    }

    expenses.forEach((t) => {
        const tr = document.createElement("tr");
        tr.style.borderBottom = "1px solid #e2e8f0";

        const catObj = CATEGORY_LIST.find(c => c.value === t.category) || { label: t.category, color: "#64748b" };

        let optionsHtml = "";
        CATEGORY_LIST.forEach(cat => {
            const isSelected = cat.value === t.category ? "selected" : "";
            optionsHtml += "<option value=\"" + cat.value + "\" " + isSelected + ">" + cat.label + "</option>";
        });

        
        tr.innerHTML = "\n" +
            "<td style=\"padding: 12px 14px; color: #64748b; font-size: 0.85rem;\">" + (t.date ? formatDateBr(t.date) : "Sem data") + "</td>\n" +
            "<td style=\"padding: 12px 14px; font-weight: 600; color: #1e293b;\">" + t.desc + "</td>\n" +
            "<td style=\"padding: 12px 14px; font-weight: 700; color: #ef4444;\">R$ " + Math.abs(t.amount).toFixed(2).replace(".", ",") + "</td>\n" +
            "<td style=\"padding: 12px 14px;\"><span style=\"background: " + catObj.color + "15; color: " + catObj.color + "; padding: 4px 10px; border-radius: 12px; font-weight: 600; font-size: 0.82rem; border: 1px solid " + catObj.color + "30;\">" + catObj.label + "</span></td>\n" +
            "<td style=\"padding: 12px 14px;\">\n" +
            "    <select data-id=\"" + t.id + "\" class=\"category-change-select\" title=\"Altere a categoria desta despesa\" style=\"padding: 8px 12px; border-radius: 6px; border: 1px solid #cbd5e1; font-weight: 600; font-size: 0.85rem; width: 100%; cursor: pointer; background: var(--card-bg, #ffffff); color: var(--text-color);\">\n" +
            "        " + optionsHtml + "\n" +
            "    </select>\n" +
            "</td>";
            
        const tdActions = document.createElement("td");
        tdActions.style.padding = "12px 14px";
        tdActions.style.textAlign = "center";
        tdActions.style.whiteSpace = "nowrap";

        const btnEdit = document.createElement("button");
        btnEdit.innerHTML = "<i class=\"fas fa-edit\"></i>";
        btnEdit.style.background = "transparent";
        btnEdit.style.border = "none";
        btnEdit.style.color = "#3b82f6";
        btnEdit.style.cursor = "pointer";
        btnEdit.style.fontSize = "1.1rem";
        btnEdit.style.marginRight = "12px";
        btnEdit.title = "Editar Despesa";
        btnEdit.onclick = () => {
            const newDesc = prompt("Descrição da despesa:", t.desc);
            if (newDesc === null) return;
            const newDate = prompt("Data (YYYY-MM-DD):", t.date);
            if (newDate === null) return;
            const newValStr = prompt("Valor (ex: 150.50):", Math.abs(t.amount));
            if (newValStr === null) return;
            const newVal = parseFloat(newValStr.replace(",", "."));
            if (isNaN(newVal)) {
                alert("Valor inválido!");
                return;
            }
            t.desc = newDesc.trim();
            t.date = newDate.trim();
            t.amount = -Math.abs(newVal);
            localStorage.setItem("transactions", JSON.stringify(transactions));
            init();
        };

        const btnDelete = document.createElement("button");
        btnDelete.innerHTML = "<i class=\"fas fa-trash-alt\"></i>";
        btnDelete.style.background = "transparent";
        btnDelete.style.border = "none";
        btnDelete.style.color = "#ef4444";
        btnDelete.style.cursor = "pointer";
        btnDelete.style.fontSize = "1.1rem";
        btnDelete.title = "Excluir Despesa";
        btnDelete.onclick = () => {
            if (confirm("Tem certeza que deseja excluir a despesa: " + t.desc + "?")) {
                const idx = transactions.findIndex(tx => tx.id === t.id);
                if (idx > -1) {
                    transactions.splice(idx, 1);
                    localStorage.setItem("transactions", JSON.stringify(transactions));
                    init();
                }
            }
        };

        tdActions.appendChild(btnEdit);
        tdActions.appendChild(btnDelete);
        tr.appendChild(tdActions);

        tbody.appendChild(tr);

    });

    tbody.querySelectorAll(".category-change-select").forEach(sel => {
        sel.addEventListener("change", function() {
            const id = parseInt(this.getAttribute("data-id"));
            const newCat = this.value;
            const targetTx = transactions.find(item => item.id === id);
            if (targetTx) {
                targetTx.category = newCat;
                localStorage.setItem("transactions", JSON.stringify(transactions));
                updateValues();
                updateCharts();
                if (typeof updateDynamicMonthlyReport === "function") updateDynamicMonthlyReport();
                renderCategorizeTable();
            }
        });
    });
}

init();
