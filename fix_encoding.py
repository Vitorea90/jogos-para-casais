import sys

def fix_encoding(file_path):
    try:
        # Tenta ler com UTF-8 com suporte a sig (BOM)
        with open(file_path, 'rb') as f:
            content = f.read()
        
        # Remove BOM se existir
        if content.startswith(b'\xef\xbb\xbf'):
            content = content[3:]
            
        text = content.decode('utf-8')
        # Tenta converter de volta se estiver em mojibake
        try:
            corrected_bytes = text.encode('latin-1')
            final_text = corrected_bytes.decode('utf-8')
        except:
            # Se falhar, talvez já esteja em UTF-8 ou outro estado
            final_text = text
            
        with open(file_path, 'w', encoding='utf-8', newline='') as f:
            f.write(final_text)
        print("Correção concluída com sucesso.")
    except Exception as e:
        print(f"Erro ao corrigir arquivo: {e}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        fix_encoding(sys.argv[1])
    else:
        print("Uso: python fix_encoding.py <caminho_do_arquivo>")
