#!/bin/bash

# Atualizando o style.css para suportar Dark Mode
cat << 'CSS_EOF' >> style.css
[data-theme="dark"] {
    --bg-color: #0f172a;
    --card-bg: #1e293b;
    --text-color: #f8fafc;
    --text-muted: #94a3b8;
    --border-color: #334155;
}
[data-theme="dark"] input, [data-theme="dark"] select {
    background-color: #0f172a;
    color: #f8fafc;
    border-color: #334155;
}
CSS_EOF

# SED para adicionar botoes na div vazia do cabecalho e a data no formulario
sed -i '' 's|<div style="display: flex; gap: 15px;">|<div style="position: absolute; right: 40px; top: 40px; display: flex; gap: 15px;">
                <button id="export-btn" class="btn-theme" title="Exportar CSV" style="background:var(--card-bg);border:none;padding:12px;border-radius:12px;cursor:pointer;color:var(--text-color);"><i class="fas fa-file-csv"></i></button>
                <button id="theme-toggle" class="btn-theme" title="Modo Escuro" style="background:var(--card-bg);border:none;padding:12px;border-radius:12px;cursor:pointer;color:var(--text-color);"><i class="fas fa-moon"></i></button>|g' index.html

sed -i '' 's|<label for="desc">Descrição</label>|<div class="form-group">
                        <label for="date">Data</label>
                        <input type="date" id="date" required>
                    </div>
                    <label for="desc">Descrição</label>|g' index.html

# SED para injetar a logica de data e CSV no final do app.js
sed -i '' 's|const transaction = {|const dateEl = document.getElementById("date");

    const transaction = {
        date: dateEl ? dateEl.value : new Date().toISOString().split("T")[0],|g' app.js

cat << 'JS_EOF' >> app.js

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
JS_EOF

