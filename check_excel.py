import sys
import json
try:
    import pandas as pd
except ImportError:
    print("Pandas not installed")
    sys.exit(1)

file_path = sys.argv[1]

try:
    xls = pd.ExcelFile(file_path)
    print("ABAS:", xls.sheet_names)
    for sheet in xls.sheet_names:
        df = pd.read_excel(xls, sheet_name=sheet)
        print(f"
--- {sheet} ---")
        print("Colunas:", list(df.columns))
        print("Amostra:")
        print(df.head(3))
except Exception as e:
    print("Erro Python:", str(e))
