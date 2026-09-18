import pandas as pd
import json
import sys

file_path = '/Users/marcelodasilvapaiva/Downloads/Dashboard Financeiro & BI - Despesas do Mês.xlsx'

try:
    # Ler todas as abas
    xls = pd.ExcelFile(file_path)
    print("ABAS ENCONTRADAS:", xls.sheet_names)
    
    data_summary = {}
    
    for sheet in xls.sheet_names:
        df = pd.read_excel(xls, sheet_name=sheet)
        # Pegar apenas algumas linhas para entender a estrutura
        print(f"
--- Estrutura da aba: {sheet} ---")
        print(df.head(5).to_string())
        
except Exception as e:
    print(f"Erro ao ler o arquivo: {e}")
