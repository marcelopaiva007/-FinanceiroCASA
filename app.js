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
    // --- Relatório 1 (Fatura Principal) ---
    { id: 201, date: '2026-08-01', desc: 'Unimed', amount: -1500.00, category: 'Saúde' },
    { id: 202, date: '2026-08-02', desc: 'Escola', amount: -1200.00, category: 'Outros' },
    { id: 203, date: '2026-08-03', desc: 'Polo', amount: -850.00, category: 'Transporte' },
    { id: 204, date: '2026-08-04', desc: 'VIVO', amount: -250.00, category: 'Moradia' },
    { id: 205, date: '2026-08-05', desc: 'Dra. Fábia', amount: -500.00, category: 'Saúde' },
    { id: 206, date: '2026-08-06', desc: 'Água e Luz', amount: -420.00, category: 'Moradia' },
    { id: 207, date: '2026-08-07', desc: 'Gasolina', amount: -400.00, category: 'Transporte' },
    { id: 208, date: '2026-08-08', desc: 'Dra. Roberta', amount: -350.00, category: 'Saúde' },
    { id: 209, date: '2026-08-09', desc: 'Mercado', amount: -1800.00, category: 'Alimentação' },
    { id: 210, date: '2026-08-10', desc: 'Cartão de Crédito', amount: -2450.00, category: 'Outros' },
    { id: 211, date: '2026-08-11', desc: 'Farmácia', amount: -180.00, category: 'Saúde' },
    { id: 212, date: '2026-08-12', desc: 'Academia', amount: -160.00, category: 'Lazer' },

    // --- Relatório 2 (Despesas Diárias / Familiares) ---
    { id: 213, date: '2026-08-13', desc: 'Terapia', amount: -330.00, category: 'Saúde' },
    { id: 214, date: '2026-08-13', desc: 'Faxina baía', amount: -200.00, category: 'Moradia' },
    { id: 215, date: '2026-08-14', desc: 'Aline', amount: -500.00, category: 'Outros' },
    { id: 216, date: '2026-08-14', desc: 'Davi', amount: -100.00, category: 'Outros' },
    { id: 217, date: '2026-08-15', desc: 'Terapia', amount: -330.00, category: 'Saúde' },
    { id: 218, date: '2026-08-15', desc: 'Carne', amount: -100.00, category: 'Alimentação' },
    { id: 219, date: '2026-08-16', desc: 'Terapia Davi', amount: -180.00, category: 'Saúde' },
    { id: 220, date: '2026-08-16', desc: 'Água', amount: -20.00, category: 'Moradia' },
    { id: 221, date: '2026-08-17', desc: 'Condomínio', amount: -700.00, category: 'Moradia' },
    { id: 222, date: '2026-08-18', desc: 'Aline', amount: -400.00, category: 'Outros' },
    { id: 223, date: '2026-08-18', desc: 'Frutas', amount: -50.00, category: 'Alimentação' },
    { id: 224, date: '2026-08-19', desc: 'Carne', amount: -200.00, category: 'Alimentação' },
    { id: 225, date: '2026-08-20', desc: 'Terapia', amount: -330.00, category: 'Saúde' },
    { id: 226, date: '2026-08-21', desc: 'Terapia Davi', amount: -180.00, category: 'Saúde' },
    { id: 227, date: '2026-08-22', desc: 'Padaria', amount: -60.00, category: 'Alimentação' },
    { id: 228, date: '2026-08-23', desc: 'Escola', amount: -20.00, category: 'Outros' },
    { id: 229, date: '2026-08-24', desc: 'Aline', amount: -400.00, category: 'Outros' },
    { id: 230, date: '2026-08-25', desc: 'Frutas', amount: -50.00, category: 'Alimentação' },
    { id: 231, date: '2026-08-26', desc: 'Futsal', amount: -110.00, category: 'Lazer' },

    // --- Relatório 3 (Custos Adicionais da Imagem) ---
    { id: 232, date: '2026-08-27', desc: 'Farmácia', amount: -130.00, category: 'Saúde' },
    { id: 233, date: '2026-08-27', desc: 'Carne', amount: -150.00, category: 'Alimentação' },
    { id: 234, date: '2026-08-28', desc: 'Frutas', amount: -60.00, category: 'Alimentação' },
    { id: 235, date: '2026-08-28', desc: 'Terapia', amount: -330.00, category: 'Saúde' },
    { id: 236, date: '2026-08-29', desc: 'Terapia Davi', amount: -180.00, category: 'Saúde' },
    { id: 237, date: '2026-08-29', desc: 'Água', amount: -20.00, category: 'Moradia' },
    { id: 238, date: '2026-08-30', desc: 'Padaria', amount: -60.00, category: 'Alimentação' },
    { id: 239, date: '2026-08-30', desc: 'Carne', amount: -150.00, category: 'Alimentação' },
    { id: 240, date: '2026-08-31', desc: 'Aline', amount: -300.00, category: 'Outros' },
    { id: 241, date: '2026-08-31', desc: 'Terapia', amount: -330.00, category: 'Saúde' },
    { id: 242, date: '2026-08-31', desc: 'Terapia Davi', amount: -180.00, category: 'Saúde' },
    { id: 243, date: '2026-08-31', desc: 'Plano de Saúde', amount: -3300.00, category: 'Saúde' }


];

const DATA_VERSION = 'v5_despesas_only'
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
    // Sistema exclusivo para despesas: consideramos todos os valores negativos ou convertidos para despesa
    const expenses = transactions.map(t => Math.abs(t.amount));
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
    const expenses = transactions.filter(t => t.amount < 0);
    const catTotals = {};
    expenses.forEach(t => { catTotals[t.category] = (catTotals[t.category] || 0) + Math.abs(t.amount); });

    const ctx1El = document.getElementById('categoryChart');
    if(ctx1El) {
        const categoryColorMap = {
            "Saúde": "#ef4444",
            "Alimentação": "#3b82f6",
            "Moradia": "#8b5cf6",
            "Educação": "#f59e0b",
            "Transporte": "#10b981",
            "Pessoal": "#ec4899",
            "Cartão": "#6366f1",
            "Lazer": "#14b8a6",
            "Outros": "#64748b"
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
        transactions.forEach(t => {
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
    if(list) list.innerHTML = '';
    transactions.sort((a,b) => new Date(b.date) - new Date(a.date)).forEach(addTransactionDOM);
    updateValues();
    updateCharts();
    updateDynamicMonthlyReport();
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
    const selectedMonth = monthSelect ? monthSelect.value : "all";

    // Filtra transações pelo mês escolhido
    let filteredTxs = transactions.filter(t => t.amount < 0);
    if (selectedMonth !== "all") {
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

const reportMonthSelect = document.getElementById("report-month-select");
if (reportMonthSelect) {
    reportMonthSelect.addEventListener("change", updateDynamicMonthlyReport);
}

const CATEGORY_LIST = [
    { value: "Saúde", label: "Saúde & Cuidados", color: "#ef4444" },
    { value: "Alimentação", label: "Alimentação & Mercado", color: "#3b82f6" },
    { value: "Moradia", label: "Moradia & Habitação", color: "#8b5cf6" },
    { value: "Educação", label: "Educação & Filhos", color: "#f59e0b" },
    { value: "Transporte", label: "Transporte & Veículo", color: "#10b981" },
    { value: "Pessoal", label: "Despesas Pessoais (Aline/Família)", color: "#ec4899" },
    { value: "Cartão", label: "Cartão de Crédito", color: "#6366f1" },
    { value: "Lazer", label: "Lazer & Bem-Estar", color: "#14b8a6" },
    { value: "Outros", label: "Outros", color: "#64748b" }
];

function renderCategorizeTable() {
    const tbody = document.getElementById("categorize-table-body");
    const counter = document.getElementById("classify-counter");
    if (!tbody) return;

    tbody.innerHTML = "";
    const expenses = transactions.filter(t => t.amount < 0);
    if (counter) counter.innerText = expenses.length + " Despesas Cadastradas";

    expenses.forEach((t) => {
        const tr = document.createElement("tr");
        tr.style.borderBottom = "1px solid #e2e8f0";

        // Cores e rótulo amigável da categoria atual
        const catObj = CATEGORY_LIST.find(c => c.value === t.category) || { label: t.category, color: "#64748b" };

        let optionsHtml = "";
        CATEGORY_LIST.forEach(cat => {
            const isSelected = cat.value === t.category ? "selected" : "";
            optionsHtml += "<option value="" + cat.value + "" " + isSelected + ">" + cat.label + "</option>";
        });

        tr.innerHTML = "
            <td style="padding: 12px 14px; color: #64748b; font-size: 0.85rem;">" + (t.date ? formatDateBr(t.date) : "Sem data") + "</td>
            <td style="padding: 12px 14px; font-weight: 600; color: #1e293b;">" + t.desc + "</td>
            <td style="padding: 12px 14px; font-weight: 700; color: #ef4444;">R$ " + Math.abs(t.amount).toFixed(2).replace(".", ",") + "</td>
            <td style="padding: 12px 14px;"><span style="background: " + catObj.color + "15; color: " + catObj.color + "; padding: 4px 10px; border-radius: 12px; font-weight: 600; font-size: 0.82rem;">" + catObj.label + "</span></td>
            <td style="padding: 12px 14px;">
                <select data-id="" + t.id + "" class="category-change-select" style="padding: 8px 12px; border-radius: 6px; border: 1px solid #cbd5e1; font-weight: 500; font-size: 0.88rem; width: 100%; cursor: pointer; background: var(--card-bg, #ffffff); color: var(--text-color);">
                    " + optionsHtml + "
                </select>
            </td>
        ";
        tbody.appendChild(tr);
    });

    // Event listener para atualizar categoria em tempo real
    document.querySelectorAll(".category-change-select").forEach(sel => {
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
