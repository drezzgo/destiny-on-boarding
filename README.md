# 🌐 Astro + WordPress + ACF: Static Site Generator

Este proyecto es una integración entre [Astro](https://astro.build/), [WordPress](https://wordpress.org/) como Headless CMS y campos personalizados creados con el plugin [ACF (Advanced Custom Fields)](https://www.advancedcustomfields.com/). El sitio genera páginas estáticas que se consumen desde la API REST de WordPress y se despliegan manualmente en servidores compartidos como **Bluehost**.

---

## 🚀 Tecnologías utilizadas

- ⚡ [Astro](https://astro.build/) – Framework moderno para sitios estáticos  
- 🧠 WordPress + ACF – CMS headless con campos personalizados  
- 🔗 REST API – Consumo de contenidos desde WordPress  
- 🎨 TailwindCSS – Estilización basada en utilidades  
- 🧳 Deploy en **Bluehost** – Usando File Manager de **cPanel**

---

## 📸 Capturas (opcional)

![shotsnapp-1747801332 649](https://github.com/user-attachments/assets/f43903cd-5c9e-49e4-8d7f-ca851b3cb3dc)
![shotsnapp-1747801225 717](https://github.com/user-attachments/assets/d0905bf7-1851-4d62-a669-fd5563027a4d)

---

## 🧩 Funcionalidades principales

- 🔍 Lectura dinámica de páginas mediante `slug` desde la API REST  
- 🧠 Soporte completo para campos personalizados configurados en ACF  
- ♻️ Datos sincronizados desde WordPress en el momento del `build`  
- 📁 Estructura modular con componentes reutilizables en Astro  
- 🛠️ Generación de sitio estático para despliegue en servidores tipo cPanel

---

## ⚙️ Consideraciones del Deploy (Bluehost + CPanel)

Para garantizar que el sitio estático de Astro funcione correctamente en **Bluehost**, se deben seguir los siguientes pasos adicionales:

1. **Revisar el archivo `.htaccess` del hosting**:
   - Ir a `public_html` o la carpeta donde se haya subido el proyecto.
   - Abrir el archivo `.htaccess` y **comentar la siguiente línea**:
     ```apache
     # RewriteRule . /index.php [L]
     ```
   - Esto es necesario para desactivar la redirección propia de WordPress y permitir que el `dist/` de Astro funcione como sitio raíz.

2. **Actualización de contenido desde WordPress**:
   - Dado que el sitio se genera como **build estático**, no hay conexión en tiempo real entre WordPress y la web.
   - Cada vez que se actualicen campos en `wp-admin`, será necesario:
     - Realizar un nuevo `build` del proyecto con Astro (`npm run build`)
     - Subir nuevamente el contenido del directorio `dist/` al servidor mediante el File Manager de cPanel
     - Esto se debe a que los datos consumidos vía API REST se cachean en el momento de compilar el sitio.

---

## 📆 Estructura del proyecto

```text
astro-wordpress-acf-site/
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   └── pages/
├── .gitignore
├── astro.config.mjs
├── package.json
├── README.md  ← ¡AQUÍ ESTÁS!
├── tsconfig.json
└── ...

## 📦 Cómo usar

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/astro-wordpress-acf-site.git
cd astro-wordpress-acf-site

### 2. Instalar dependencias
```bash
npm install

### 3. Ejecutar entorno de desarrollo
```bash
npm run dev

### 4. Construir para producción
```bash
npm run build

### 5. Subir a Bluehost
- Comprimir el contenido de la carpeta dist/
- Cargar el .zip al public_html/ vía cPanel > File Manager
- Extraer los archivos y verificar que .htaccess esté configurado correctamente

## 📘 Recursos útiles
- [Documentación oficial de Astro](https://docs.astro.build)
- [Guía REST API de WordPress](https://developer.wordpress.org/rest-api/)
- [Advanced Custom Fields (ACF)](https://www.advancedcustomfields.com/)

## 愛🐲Autor
Andrés Felipe Góngora Ramírez — Desarrollador FullStack Jr.
