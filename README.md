[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   │   ├── creators/
│   │   │   │   ├── getting-started.md
│   │   │   │   └── {Add more pages/guides here} 
│   │   │   └── learners/
│   │   │       ├── getting-started.md
│   │   │       └── {Add more pages/guides here} 
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

This project uses [StarlightUtils](https://starlight-utils.pages.dev/docs/) to configure the sidebars and nav links.
