# Muhammad Rendy — Portfolio

Personal portfolio for Muhammad Rendy, focused on data engineering, data platforms, and end-to-end systems.

## Local development

Requirements:

- Node.js 22.x
- npm 11+

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run build
```

The first version is intentionally frontend-first. Project content is local and there are no required environment variables or external services.

The resume is served from `public/resume.pdf` and can be downloaded from the hero section.

## Repository hygiene

- `package-lock.json` is committed for reproducible installs.
- Dependencies are project-local; no global Homebrew packages are required to run the app.
- `.nvmrc` pins the supported Node major version.
- Secrets, environment files, build output, and personal operating-system files are ignored.
