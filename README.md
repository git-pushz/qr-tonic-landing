# QR Tonic Landing Page

A modern landing page built with 11ty, Tailwind CSS, and DaisyUI.

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Project Structure

```
.
├── src/                    # Source files
│   ├── _includes/         # Layout templates
│   ├── _layouts/          # Base layouts
│   ├── assets/           # Static assets
│   └── index.md          # Home page
├── .eleventy.js          # 11ty configuration
├── package.json          # Project dependencies
├── tailwind.config.js    # Tailwind configuration
└── README.md             # Project documentation
```

## Development

- The site will be available at `http://localhost:8080` during development
- Changes to source files will automatically trigger a rebuild
- CSS changes will be hot-reloaded

## Production Build

The production build will be generated in the `_site` directory. 