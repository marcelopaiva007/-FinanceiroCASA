import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

header_replacement = """<header style="position: relative; display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px;">
            <div>
                <h1>Despesas do Mês</h1>
                <p>Acompanhamento inteligente do seu orçamento</p>
            </div>
            <div style="display: flex; gap: 10px; align-items: center;">
                <input type="file" id="import-file" accept=".csv, image/png, image/jpeg, image/jpg" style="display:none;">
                <label for="import-file" class="btn-theme" title="Importar Foto ou CSV" style="background:var(--card-bg); border:none; padding:12px; border-radius:12px; cursor:pointer; color:var(--text-color); margin-bottom:0; display:flex; align-items:center;"><i class="fas fa-file-upload"></i></label>
                <button id="export-btn" class="btn-theme" title="Exportar Excel" style="background:var(--card-bg); border:none; padding:12px; border-radius:12px; cursor:pointer; color:var(--text-color);"><i class="fas fa-file-csv"></i></button>
                <button id="theme-toggle" class="btn-theme" title="Modo Escuro" style="background:var(--card-bg); border:none; padding:12px; border-radius:12px; cursor:pointer; color:var(--text-color);"><i class="fas fa-moon"></i></button>
            </div>
        </header>"""

# Substituir o bloco do header atual pelo novo
new_content = re.sub(r'<header.*?</header>', header_replacement, content, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_content)
