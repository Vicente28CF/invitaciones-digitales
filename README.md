# ✉️ Invitaciones Digitales

**Landing page profesional para el servicio de invitaciones digitales personalizadas de Gaby**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38B2AC?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Latest-000000?style=flat-square)](https://ui.shadcn.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat-square&logo=vercel)](https://vercel.com/)

[🌐 Ver sitio en vivo](https://invitaciones-digitales-six.vercel.app/) · [📬 Contacto](#contacto)

---

## 📌 Descripción

Sitio web de presentación para un servicio de **invitaciones digitales personalizadas**. Diseñado para mostrar el portafolio de diseños, servicios ofrecidos y facilitar el contacto con clientes potenciales a través de WhatsApp.

El proyecto destaca por su diseño elegante con temática floral, animaciones suaves, y una experiencia de usuario optimizada para dispositivos móviles.

![Hero](./screenshots/hero.png)

---

## ✨ Características

- Diseño responsivo adaptado a móviles y escritorio
- Galería de invitaciones con filtros por categoría (Bodas, XV Años, Eventos Especiales)
- Sección de precios con 3 planes (Básico $500, Premium $650, VIP $850 MXN)
- Carrusel de testimonios con calificaciones de clientes
- Integración con TikTok para mostrar procesos de diseño
- Contacto directo por WhatsApp
- Animaciones de revelación al hacer scroll
- Efecto de cursor decorativo en desktop
- Contador animado de estadísticas
- Menú móvil con overlay completo
- Navegación suave con anclas a secciones

![Diseño y ejemplo de invitación](./screenshots/diseno.png)

---

## 🖼️ Capturas del Sitio

| Galería de Diseños | Planes y Precios |
|---|---|
| ![Galería](./screenshots/galeria.png) | ![Precios](./screenshots/precios.png) |

![Testimonios de clientes](./screenshots/testimonios.png)

---

## 🛠️ Stack Tecnológico

| Tecnología | Uso |
|------------|-----|
| [Next.js 15](https://nextjs.org/) | Framework principal (App Router) |
| [React 19](https://react.dev/) | Biblioteca de UI |
| [TypeScript 5](https://www.typescriptlang.org/) | Tipado estático |
| [Tailwind CSS v4](https://tailwindcss.com/) | Estilos con PostCSS |
| [shadcn/ui](https://ui.shadcn.com/) | Componentes UI (Button, Input) |
| [Lucide React](https://lucide.dev/) | Iconos |
| [Geist Font](https://vercel.com/font) | Tipografía (Google Fonts) |
| [Vercel](https://vercel.com/) | Hosting y despliegue |

---

## 🚀 Instalación y Uso Local

> **Requisitos previos:** Node.js 18+ y npm/yarn/pnpm instalado.

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/invitaciones-digitales.git
cd invitaciones-digitales

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo (Turbopack)
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

---

## 📁 Estructura del Proyecto

```
invitaciones-digitales/
├── app/
│   ├── layout.tsx       # Layout principal, metadata, Geist font
│   ├── page.tsx         # Landing page completa (todas las secciones)
│   └── globals.css      # Variables CSS, Tailwind imports
├── components/
│   └── ui/              # Componentes shadcn/ui (button, input)
├── lib/
│   └── utils.ts         # Función cn() para clases de Tailwind
├── public/
│   └── images/          # Imágenes de invitaciones y perfiles
├── screenshots/         # Capturas del sitio para el README
├── next.config.ts       # Configuración de Next.js
├── tailwind.config.ts   # Configuración de Tailwind (v4)
├── postcss.config.mjs   # Configuración de PostCSS
├── package.json
└── tsconfig.json
```

---

## ⚙️ Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Iniciar servidor de desarrollo con Turbopack |
| `npm run build` | Build de producción |
| `npm run start` | Iniciar servidor de producción |
| `npm run lint` | Verificar código con ESLint |

---

## ☁️ Despliegue

El proyecto está desplegado en **Vercel** con integración continua desde la rama `main`.

Cada push a `main` genera un despliegue automático en producción.

```bash
# Build de producción (para revisar localmente)
npm run build
npm run start
```

---

## 📬 Contacto

Para consultas sobre el servicio de invitaciones digitales, visita el [sitio web](https://invitaciones-digitales-six.vercel.app/) o escríbeme directamente por [WhatsApp](https://wa.me/523321916387).

Para consultas sobre desarrollo web freelance, puedes contactarme a través de [vicente28cf@gmail.com](mailto:vicente28cf@gmail.com).

---

<div align="center">

Desarrollado con ❤️ · Desplegado en [Vercel](https://vercel.com)

© 2026 Gaby Invitaciones Digitales. Todos los derechos reservados.

</div>