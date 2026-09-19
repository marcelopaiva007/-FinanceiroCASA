import re

with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

initial_data = """[
    { "id": 101, "date": "2026-09-01", "desc": "Salário Mensal", "amount": 8500.00, "category": "receita" },
    { "id": 102, "date": "2026-09-03", "desc": "Supermercado", "amount": -850.40, "category": "alimentacao" },
    { "id": 103, "date": "2026-09-05", "desc": "Conta de Luz", "amount": -145.90, "category": "moradia" },
    { "id": 104, "date": "2026-09-08", "desc": "Internet", "amount": -99.90, "category": "moradia" },
    { "id": 105, "date": "2026-09-10", "desc": "Gasolina", "amount": -200.00, "category": "transporte" },
    { "id": 106, "date": "2026-09-12", "desc": "Jantar Fora", "amount": -180.00, "category": "lazer" },
    { "id": 107, "date": "2026-09-15", "desc": "Rendimento Investimentos", "amount": 320.00, "category": "receita" },
    { "id": 108, "date": "2026-09-17", "desc": "Farmácia", "amount": -85.50, "category": "saude" }
]"""

# Substituir a declaracao do array de transactions
new_content = re.sub(
    r"let transactions = localStorage.getItem('transactions') !== null ? JSON.parse(localStorage.getItem('transactions')) : [];",
    f"let transactions = localStorage.getItem('transactions') !== null ? JSON.parse(localStorage.getItem('transactions')) : {initial_data};",
    content
)

# Garantir que isso seja salvo no localStorage ao iniciar se estiver vazio
init_logic = """
if (localStorage.getItem('transactions') === null && transactions.length > 0) {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}
function init() {
"""
new_content = new_content.replace('function init() {', init_logic)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(new_content)
