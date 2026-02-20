# DesignSystemOrchestrator

# 🎨 Design System Orchestrator

> **Sistema completo de Design Tokens que conecta Figma con Angular automáticamente**

[![Angular](https://img.shields.io/badge/Angular-19-DD0031?logo=angular)](https://angular.dev)
[![Storybook](https://img.shields.io/badge/Storybook-10-FF4785?logo=storybook)](https://storybook.js.org)
[![Style Dictionary](https://img.shields.io/badge/Style%20Dictionary-5-00D4FF)](https://styledictionary.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)](https://www.typescriptlang.org)

---

## 🚀 ¿Qué hace este sistema?

Este proyecto implementa un **Design System as Code** que permite que los cambios de diseño en Figma se reflejen automáticamente en tu aplicación Angular **sin que los desarrolladores toquen código**.

### El problema que resuelve

❌ **Antes:**
- Diseñadores actualizan colores en Figma
- Desarrolladores copian valores manualmente al código
- Desincronización constante entre diseño y código
- Trabajo repetitivo y propenso a errores

✅ **Ahora:**
- Diseñadores cambian colores en Figma
- Sistema regenera tokens automáticamente
- Angular y Storybook se actualizan solos
- Cero trabajo manual

---

## 📊 Arquitectura del Sistema

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  👨‍🎨 DISEÑADOR                                                   │
│  Edita colores, spacing, tipografía en Figma                   │
│                                                                 │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ↓
┌─────────────────────────────────────────────────────────────────┐
│  🔌 PLUGIN DE FIGMA                                             │
│  Exporta tokens.json en formato Style Dictionary                │
│  → Push automático a GitHub                                     │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ↓
┌─────────────────────────────────────────────────────────────────┐
│  ⚙️  GITHUB ACTION: Build Tokens                                │
│  1. Detecta cambio en tokens/tokens.json                        │
│  2. Ejecuta Style Dictionary                                    │
│  3. Genera _variables.scss + _variables.css                     │
│  4. Commitea archivos generados [skip ci]                       │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ↓
┌─────────────────────────────────────────────────────────────────┐
│  🔧 STYLE DICTIONARY                                            │
│  Transforma tokens.json → SCSS/CSS con unidades (px)            │
│  Agrega prefijo "ds-" a todas las variables                     │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ↓
┌─────────────────────────────────────────────────────────────────┐
│  🔺 ANGULAR 19                                                  │
│  Consume tokens vía includePaths                                │
│  Sin imports manuales en componentes                            │
│                                                                 │
│  📖 STORYBOOK                                                   │
│  Catálogo visual sincronizado con tokens                        │
│  Deploy automático a GitHub Pages                               │
└─────────────────────────────────────────────────────────────────┘
```

---

## ✨ Características

- 🎨 **Sincronización automática** Figma → Producción
- 🚀 **Cero configuración manual** en componentes
- 📖 **Storybook autodesplegado** en GitHub Pages
- 🔄 **CI/CD completo** con GitHub Actions
- 💅 **Type-safe tokens** con TypeScript
- 🎯 **Escalable** a múltiples proyectos
- 📦 **Listo para publicar** como npm package

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Angular** | 19 | Framework principal |
| **Storybook** | 10 | Catálogo de componentes |
| **Style Dictionary** | 5 | Transformación de tokens |
| **TypeScript** | 5.7 | Type safety |
| **SCSS** | - | Preprocesador CSS |
| **GitHub Actions** | - | CI/CD |
| **Figma** | - | Fuente de verdad del diseño |

---

## 🚀 Quick Start

### Prerrequisitos

```bash
node --version  # v20 o superior
npm --version   # v10 o superior
```

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/omared/design-system-orchestrator.git
cd design-system-orchestrator

# 2. Instalar dependencias
npm install

# 3. Generar tokens desde Figma (primera vez)
npm run tokens:build

# 4. Iniciar Angular
npm start

# 5. Iniciar Storybook (en otra terminal)
npm run storybook
```

### URLs

- **Angular**: http://localhost:4200
- **Storybook**: http://localhost:6006
- **Storybook Public**: https://omared.github.io/design-system-orchestrator/

---

## 📁 Estructura del Proyecto

```
design-system-orchestrator/
├── .github/
│   └── workflows/
│       ├── tokens.yml              # Regenera tokens automáticamente
│       └── deploy-storybook.yml    # Publica Storybook a Pages
│
├── tokens/
│   ├── tokens.json                 # ← Fuente de verdad (desde Figma)
│   └── config.mjs                  # Style Dictionary config
│
├── src/
│   ├── app/
│   │   └── components/
│   │       └── button/
│   │           ├── button.ts       # Componente Angular
│   │           ├── button.scss     # Estilos con tokens
│   │           └── button.stories.ts  # Story de Storybook
│   │
│   └── styles/
│       ├── tokens/                 # ← GENERADO AUTOMÁTICAMENTE
│       │   ├── _variables.scss     # Variables SCSS ($ds-*)
│       │   └── _variables.css      # CSS Custom Properties (--ds-*)
│       │
│       └── styles.scss             # Entry point global
│
├── .storybook/                     # Configuración de Storybook
├── angular.json                    # Config de Angular
└── package.json
```

---

## 🎯 Uso de Tokens en Componentes

### En SCSS (recomendado)

```scss
// button.component.scss
// ← NO necesitas @use, los tokens están disponibles globalmente

.ds-button {
  padding: tokens.$ds-layout-spacing-sm tokens.$ds-layout-spacing-md;
  font-size: tokens.$ds-font-size-font-size-200;
  background: tokens.$ds-button-state-default-color-bg-default;
  color: tokens.$ds-button-state-default-color-label-default;
  border-radius: tokens.$ds-corner-corner-radius-xs;
  
  &:hover {
    background: tokens.$ds-button-state-hover-color-bg-hover;
  }
}
```

### En TypeScript (para lógica)

```typescript
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  getToken(name: string): string {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(`--ds-${name}`)
      .trim();
  }
}
```

---

## 🔄 Flujo de Trabajo Completo

### 1. Diseñador hace cambios en Figma

```
Figma → Variables → Color → Primary → Cambiar de #444449 a #FF0000
```

### 2. Exportar desde el Plugin

```
Figma → Plugins → "Tokens Exporter" → Select Collections → Export to GitHub
```

### 3. Automático (GitHub Action)

```bash
✅ Action "Build Tokens" detecta cambio en tokens.json
✅ Ejecuta: npm run tokens:build
✅ Genera src/styles/tokens/_variables.scss
✅ Commitea: "chore(tokens): regenerate from Figma [skip ci]"
✅ Action "Deploy Storybook" se dispara
✅ Construye y publica Storybook
```

### 4. Desarrolladores actualizan

```bash
git pull
npm start
# Los botones ahora son rojos sin tocar código 🎉
```

---

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm start                 # Inicia Angular (http://localhost:4200)
npm run storybook        # Inicia Storybook (http://localhost:6006)

# Tokens
npm run tokens:build     # Genera SCSS/CSS desde tokens.json
npm run tokens:watch     # Regenera al detectar cambios

# Build
npm run build            # Build de producción de Angular
npm run build-storybook  # Build de Storybook

# Testing
npm test                 # Unit tests
npm run test:watch       # Tests en modo watch
```

---

## 📖 Plugin de Figma

### Archivos del Plugin

El plugin personalizado está en la carpeta `figma-plugin/`:

```
figma-plugin/
├── manifest.json    # Configuración del plugin
├── code.js          # Lógica de exportación
└── ui.html          # Interfaz del plugin
```

### Instalación en Figma

1. Abre Figma Desktop
2. Menu → Plugins → Development → Import plugin from manifest
3. Selecciona `figma-plugin/manifest.json`
4. El plugin aparece en Plugins → Development

### Configuración

```javascript
// En el plugin UI, configura:
{
  "githubToken": "ghp_xxxxxxxxxxxxxxxxxxxx",
  "repo": "tu-usuario/design-system-orchestrator",
  "branch": "main",
  "path": "tokens/tokens.json"
}
```

---

## ⚙️ GitHub Actions

### Action 1: Build Design Tokens

**Trigger:** Push que modifica `tokens/tokens.json`

**Pasos:**
1. Checkout del repositorio
2. Setup Node.js 20
3. `npm ci`
4. `npm run tokens:build`
5. Commit de archivos generados

**Archivo:** `.github/workflows/tokens.yml`

### Action 2: Deploy Storybook

**Trigger:** Push que modifica `src/styles/tokens/**`

**Pasos:**
1. Checkout del repositorio
2. Setup Node.js 20
3. `npm ci`
4. `npm run build-storybook`
5. Deploy a GitHub Pages

**Archivo:** `.github/workflows/deploy-storybook.yml`

---

## 🎨 Tokens Disponibles

### Colores

```scss
// Base
$ds-color-base-white
$ds-color-base-black

// Neutrales
$ds-color-neutral-neutral-50
$ds-color-neutral-neutral-100
// ... hasta 900

// Brand
$ds-color-purple-purple-500
$ds-color-green-green-500
$ds-color-orange-orange-500

// Texto
$ds-text-default-text-color-primary-default
$ds-text-default-text-color-secondary-default
```

### Espaciado

```scss
$ds-layout-spacing-xxs  // 4px
$ds-layout-spacing-xs   // 8px
$ds-layout-spacing-sm   // 12px
$ds-layout-spacing-md   // 16px
$ds-layout-spacing-lg   // 20px
$ds-layout-spacing-xl   // 24px
```

### Tipografía

```scss
$ds-font-size-font-size-50   // 10px
$ds-font-size-font-size-100  // 12px
$ds-font-size-font-size-200  // 14px
$ds-font-size-font-size-300  // 16px
// ...

$ds-font-weight-font-weight-500  // Medium
$ds-font-weight-font-weight-600  // SemiBold
```

### Border Radius

```scss
$ds-corner-corner-radius-xxs  // 4px
$ds-corner-corner-radius-xs   // 8px
$ds-corner-corner-radius-sm   // 12px
$ds-corner-corner-radius-md   // 16px
```

---

## 🐛 Troubleshooting

### Error: "Undefined variable"

**Problema:** Angular no encuentra las variables de tokens

**Solución:**
```bash
# 1. Verifica que los archivos existen
ls src/styles/tokens/

# 2. Regenera los tokens
npm run tokens:build

# 3. Verifica angular.json
# Debe tener: stylePreprocessorOptions → includePaths: ["src/styles"]
```

### Error: GitHub Action no se ejecuta

**Problema:** El workflow no aparece en Actions

**Solución:**
- Verifica que el archivo `.yml` está en `.github/workflows/`
- Verifica que el push incluye cambios en `tokens/tokens.json`
- Ejecuta manualmente: Actions → "Build Design Tokens" → "Run workflow"

### Error: Storybook no compila

**Problema:** `Module parse failed: Unexpected token`

**Solución:**
- NO importes `styles.scss` en `.storybook/preview.ts`
- Agrega `"styles": ["src/styles.scss"]` en `angular.json` sección `storybook`
- Verifica que `.storybook/main.ts` tiene `webpackFinal` con `includePaths`

---

## 🚀 Próximos Pasos

- [ ] Agregar más componentes (Input, Card, Modal, Dropdown)
- [ ] Implementar tests visuales con Chromatic
- [ ] Agregar soporte para temas (light/dark)
- [ ] Publicar como paquete npm
- [ ] Agregar versionado automático con semantic-release
- [ ] Documentar patrones de diseño
- [ ] Agregar tokens de animación
- [ ] Soporte multi-brand

---

## 📚 Recursos

- [Angular Documentation](https://angular.dev)
- [Storybook Documentation](https://storybook.js.org)
- [Style Dictionary Documentation](https://styledictionary.com)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Figma Variables API](https://www.figma.com/plugin-docs/api/properties/figma-variables/)

---

## 🤝 Contribuir

¿Encontraste un bug o tienes una idea? ¡Las contribuciones son bienvenidas!

1. Fork el proyecto
2. Crea una rama: `git checkout -b feature/nueva-funcionalidad`
3. Commit: `git commit -m 'feat: agrega nueva funcionalidad'`
4. Push: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver `LICENSE` para más detalles.

---

## 👥 Autores

- **Tu Nombre** - *Trabajo inicial* - [@omared](https://github.com/omared)

---

## 🙏 Agradecimientos

- Equipo de Angular por el framework increíble
- Comunidad de Storybook por el catálogo visual
- Amazon por Style Dictionary
- GitHub por Actions y Pages

---

<div align="center">
  
### ⭐ Si este proyecto te ayudó, dale una estrella en GitHub

**Hecho con ❤️ para automatizar el design system**

</div>