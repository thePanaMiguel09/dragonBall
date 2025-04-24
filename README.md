# Dragon Ball API

Aplicación web hecha en React + TypeScript que consume la API original de Dragon Ball para mostrar todos los personajes (masculinos, femeninos por separado)
Con la finalidad de presetnar esta informacion de manera sencilla y clara.

---

## Descripción

- **Zoom al pasar el cursor:** al hoverear sobre una tarjeta, el personaje hace un ligero zoom, sbreponiendose en su tarjeta.  
- **Detalle al hacer clic:** al clickear, se muestra una página con la información precisa de ese personaje.  
- **Scroll infinito:** a medida que bajas, se cargan más personajes automáticamente, hasta mostrarlos todos en total.  
- **Secciones especiales:** personajes masculinos, femeninos y enlaces directos a otras categorías de la API original como documentacion y demás.

---

## Autores

- Miguel Ángel Chaves Barrera  
- Frank Danilo Marín Cedeño  

---

## Tecnologías y Dependencias

### Dependencias principales

```json
"dependencies": {
  "@emotion/react": "^11.14.0",
  - *Library de CSS-in-JS para React*: permite escribir estilos directamente en componentes como objetos JavaScript o cadenas de texto (template literals)

  "@emotion/styled": "^11.14.0",
  - Permite crear componentes React con estilos acoplados y Composición predecible que evita problemas de especificidad

  "@mui/icons-material": "^7.0.2",
  - Implementación de Material Design para React (MUI Core). Ofrece:
      Componentes listos para usar (Botones, Tabs, Cards, etc.)
      Sistema de theming (colores, tipografía, breakpoints).
      Accesibilidad y buenas prácticas de UX.

  "@mui/joy": "^5.0.0-beta.52",
  - Biblioteca experimental de componentes de Material Design (“Joy UI”), orientada a un estilo más “fresh” y componentes de nueva generación.

  "@mui/material": "^7.0.2",
  - Conjunto de cientos de íconos en formato React preparados para usarse con MUI. Cada ícono es un componente sombreado y dimensionado por CSS.

  "@tanstack/react-query": "^5.72.2",
  - Cliente para fetching, caching y sincronización de datos de servidor en React. Simplifica:
      Llamadas con Axios o fetch y almacenamiento en caché.
      Actualización automática en background (refetch).
      Paginated & infinite queries, perfecto para el scroll infinito.

  "axios": "^1.8.4",
  - Cliente HTTP basado en promesas para JavaScript.

  "react": "^19.0.0",
  - La librería base para construir interfaces de usuario con componentes declarativos y estado local/efectos. Es el corazón del proyecto, permitiéndote usar JSX, hooks (useState, useEffect, etc.) y gestión de ciclo de vida.

  "react-dom": "^19.0.0",
  - Provee los métodos necesarios para montar el árbol de componentes React en el DOM del navegador (ReactDOM.createRoot, render). Trabaja estrechamente con react para actualizar el DOM eficientemente (reconciliación).

  "react-infinite-scroll-component": "^6.1.0",
  - Componente listo para usar que detecta el final de un scroll y dispara una función de carga (callback). Ideal para implementar tu scroll infinito sin gestionar manualmente los scroll listeners.

  "react-router-dom": "^7.5.0",
  Solución de routing para React en entornos web. Permite definir rutas (<Route path="/male" />), navegar programáticamente (useNavigate) y acceder a parámetros (useParams) para las páginas de detalle de personaje.

}

"devDependencies": {
  "@eslint/js": "^9.21.0",
  - Paquete oficial que exporta las configuraciones base de ESLint para JavaScript (“recommended” y “all”), separando la lógica de análisis de código JS de la implementación core de ESLint.

  "@types/react": "^19.0.10",
  - Definicion de tipos TypeScript para React.
  
  "@types/react-dom": "^19.0.4",
  - Definicion de tipos TypeScript para ReactDOM.

  "@vitejs/plugin-react": "^4.3.4",
  - Plugin oficial de Vite que añade soporte a React.

  "eslint": "^9.21.0",
  - Herramienta de análisis estático (“linter”) para identificar y reportar patrones problemáticos en código ECMAScript/JavaScript.

  "eslint-plugin-react-hooks": "^5.1.0",
  - Plugin de ESLint que implementa reglas específicas para React Hooks.

  "eslint-plugin-react-refresh": "^0.4.19",
  - Plugin que integra ESLint con React Fast Refresh (hot reloading), evitando advertencias erróneas sobre variables y imports durante el HMR.

  "globals": "^15.15.0",
  - Paquete que expone definiciones de variables globales (como window, process, fetch) para ESLint.

  "typescript": "~5.7.2",
  - El compilador de TypeScript, que convierte código .ts y .tsx en JavaScript compatible.

  "typescript-eslint": "^8.24.1",
  - Conjunto de herramientas para que ESLint entienda y analice código TypeScript.

  "vite": "^6.2.0",
  - Bundler y servidor de desarrollo ultrarrápido basado en ES Modules.

}

"scripts": {
  "dev": "vite",
  - Arranca el servidor de desarrollo de Vite con Hot Module Replacement (HMR) para un ciclo rápido de edición y recarga.

  "build": "tsc -b && vite build",
  - Ejecuta primero el compilador de TypeScript en modo “build” (tsc -b) y luego empaqueta la aplicación para producción mediante Rollup, a través de vite build.

  "lint": "eslint .",
  - Recorre todo el proyecto con ESLint para detectar errores de estilo o posibles bugs estáticos antes de hacer un commit.

  "preview": "vite preview",
  - Sirve localmente los artefactos generados por vite build, permitiéndote previsualizar la versión de producción en tu máquina.

}
```

---

## Instalacion

1. *Clonar el repositorio de git*
      git clone https://github.com/thePanaMiguel09/dragonBall.git

2. *Entrar a la carpeta*
      cd dragonBall

3. *Instalar las dependencias*
      npm i

---

## Estructura

src/
 ├─ components/         # Componentes reutilizables
 ├─ pages/              # Vistas / páginas
 ├─ hooks/              # Custom hooks (React Query, etc.)
 └─ App.tsx             # Punto de entrada de la aplicación

---

## Uso

1. Página Principal (/):
      Muestra todas las tarjetas de personajes.
      Hover: ligero zoom de la imagen.
      Click: navega a /character/:id con datos completos.

2. Menú de Navegación:
      Personajes Masculinos (/male)
      Personajes Femeninos (/female)
      Enlaces directos a otras categorías según la API.

3. Scroll Infinito:
      Al bajar, se cargan más tarjetas automáticamente.

---

## Contrubucion

- Crear rama para tu freature.
      git checkout -b feature/nombre-feature

- Realiza cambios y haz commit
      git commit -m "Agrega descripción de feature"

- Empuja tu rama y abre un Pull Request.
