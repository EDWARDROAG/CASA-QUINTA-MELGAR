import os

# Carpeta donde están las imágenes de la galería
carpeta_imagenes = "img"

# Obtener lista de imágenes
imagenes = [f for f in os.listdir(carpeta_imagenes) if f.lower().endswith((".jpg", ".jpeg", ".png", ".gif"))]

# Generar HTML
html = ""
for img in imagenes:
    html += f'  <img src="{carpeta_imagenes}/{img}" alt="{os.path.splitext(img)[0]}" class="foto">\n'

# Guardar en un archivo para copiar y pegar en tu index.html
with open("galeria_generated.html", "w", encoding="utf-8") as f:
    f.write(html)

print("HTML generado en galeria_generated.html, listo para copiar y pegar.")
