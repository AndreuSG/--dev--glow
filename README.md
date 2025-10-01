# Glow Estética Avanzada

Aplicación web para centro de estética avanzada, desarrollada con React, TypeScript, Vite y Tailwind CSS.

## Tecnologías

- **React 18** - Librería para construir interfaces de usuario
- **TypeScript** - Tipado estático para JavaScript
- **Vite** - Build tool y dev server ultra rápido
- **React Router** - Navegación entre páginas
- **Tailwind CSS** - Framework de utilidades CSS
- **Framer Motion** - Animaciones
- **Shadcn/ui** - Componentes de UI

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

El servidor de desarrollo estará disponible en http://localhost:5173

## Build para producción

```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`

## Deploy a GitHub Pages

```bash
npm run deploy
```

Este comando construye la aplicación y la despliega automáticamente en GitHub Pages.

## Estructura del proyecto

```
src/
├── components/     # Componentes reutilizables
├── config/        # Configuración de contenido
├── lib/           # Utilidades
├── pages/         # Páginas de la aplicación
├── types/         # Definiciones de TypeScript
└── hooks/         # React hooks personalizados
```

## Migración desde Next.js

Esta aplicación fue migrada de Next.js a React + Vite para simplificar el desarrollo y el despliegue. Los cambios principales incluyen:

- Reemplazo de Next.js Link y Image por equivalentes de React
- Implementación de React Router para navegación
- Uso de Vite en lugar de Next.js para el build
- Configuración simplificada de GitHub Pages
