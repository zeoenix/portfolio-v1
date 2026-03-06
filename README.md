<div align="center">

# ✦ Tanuj Purohit — Personal Portfolio

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![MUI](https://img.shields.io/badge/MUI-v6-007FFF?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-a78bfa?style=for-the-badge)](LICENSE)

**A modern, 3D-powered developer portfolio built with React 19, MUI v6, and Unicorn Studio.**

[Live Demo](https://zeoenix.tech/) · [LinkedIn](https://www.linkedin.com/in/tanujpurohit) · [Contact](mailto:tanujpurohit@hotmail.com)

</div>

---

## Overview

This is the source code for my personal portfolio website. It features an immersive **Unicorn Studio** 3D animated hero section, a fully themed **Material UI v6** design system, and smooth section-based layout — showcasing my skills, experience, and education pulled directly from my professional profile.

---

## Features

- **3D Hero** — Unicorn Studio WebGL scene as a fullscreen background
- **MUI v6 Dark Theme** — Custom Material Design 3-inspired palette (violet · blue · emerald)
- **Responsive Design** — Mobile-first layout using MUI Grid & Stack
- **Scroll-Aware Navbar** — Glassmorphism AppBar that activates on scroll
- **Animated Skill Bars** — Linear progress indicators per skill category
- **Timeline Experience** — Vertical timeline with avatar icons and tag chips
- **Live Contact Cards** — Direct links to email, LinkedIn, and personal portfolio
- **Google Fonts** — Inter + Space Grotesk typography stack

---

## Tech Stack

| Layer        | Technology                          | Version  |
|--------------|--------------------------------------|----------|
| Framework    | React                                | 19.x     |
| Build Tool   | Vite                                 | 7.x      |
| UI Library   | MUI (Material UI)                    | 6.5.0    |
| Icons        | MUI Icons Material                   | 6.5.0    |
| Styling      | Emotion (React / Styled)             | 11.x     |
| CSS Utility  | Tailwind CSS                         | 4.x      |
| 3D Animation | unicornstudio-react                  | 2.0.x    |
| Lint         | ESLint + react-hooks + react-refresh | 9.x      |

---

## Project Structure

```
portfolio/
│
├── public/
│   └── vite.svg                  # Favicon
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Sticky AppBar with mobile Drawer
│   │   ├── Hero.jsx              # Unicorn Studio 3D hero section
│   │   ├── About.jsx             # Bio, stats, and social links
│   │   ├── Skills.jsx            # Skill cards with progress bars
│   │   ├── Experience.jsx        # Timeline of work experience
│   │   ├── Education.jsx         # Academic background cards
│   │   ├── Contact.jsx           # Contact cards + CTA button
│   │   └── Footer.jsx            # Copyright footer
│   │
│   ├── App.jsx                   # Root layout — imports all sections
│   ├── main.jsx                  # Entry point — ThemeProvider + CssBaseline
│   ├── theme.js                  # MUI v6 custom dark theme
│   ├── index.css                 # Global styles + Google Fonts import
│   └── assets/
│       └── react.svg
│
├── index.html                    # HTML entry (title, meta)
├── vite.config.js                # Vite + React + Tailwind plugin config
├── eslint.config.js              # ESLint flat config
├── package.json
├── package-lock.json
└── README.md
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **v18+**
- **npm**, **yarn**, or **pnpm**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/tanujpurohit/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

| Command           | Description                          |
|-------------------|--------------------------------------|
| `npm run dev`     | Start local dev server (HMR)         |
| `npm run build`   | Build for production (`dist/`)       |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint across the project        |

---

## Unicorn Studio Integration

The hero background uses the [`unicornstudio-react`](https://www.npmjs.com/package/unicornstudio-react) component:

```jsx
import UnicornScene from 'unicornstudio-react';

<UnicornScene
  projectId="h2AkbNByRgq39WxqiMBQ"
  width="100%"
  height="100%"
  scale={1}
  dpi={1.5}
  sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.1/dist/unicornStudio.umd.js"
/>
```

The scene renders as an absolute-positioned layer behind all content, with a gradient overlay for readability.

---

## MUI Theme

The custom theme lives in `src/theme.js` and extends MUI v6's dark palette:

```
Primary   →  #a78bfa  (violet-400)
Secondary →  #60a5fa  (blue-400)
Success   →  #34d399  (emerald-400)
Warning   →  #fbbf24  (amber-400)
Background default  →  #050510
Background paper    →  rgba(255,255,255,0.04)  ← glassmorphism cards
```

Global component overrides are applied for `MuiCard`, `MuiButton`, `MuiChip`, `MuiLinearProgress`, and `MuiAppBar`.

---

## Sections

| # | Section      | Description                                              |
|---|--------------|----------------------------------------------------------|
| 1 | **Hero**     | Unicorn Studio 3D background, name, role, and CTAs       |
| 2 | **About**    | Bio summary, stat cards, and social link buttons         |
| 3 | **Skills**   | Frontend, Backend, Cybersecurity, and Languages groups   |
| 4 | **Experience** | Timeline — T&P Cell IIT Patna, Freelancer, Tech Mahindra, DRDO |
| 5 | **Education**  | IIT Patna B.Tech, DSEU Diploma, Kendriya Vidyalaya      |
| 6 | **Contact**  | Email, LinkedIn, Portfolio cards + "Say Hello" CTA       |

---

## Deployment

Build the project and deploy the `dist/` folder to any static host:

```bash
npm run build
```

Recommended hosts: **Vercel**, **Netlify**, **GitHub Pages**, **Cloudflare Pages**

```bash
# Quick deploy with Vercel CLI
npm i -g vercel
vercel --prod
```

---

## Author

**Tanuj Purohit**

- Email: [tanujpurohit@hotmail.com](mailto:tanujpurohit@hotmail.com)
- LinkedIn: [linkedin.com/in/tanujpurohit](https://www.linkedin.com/in/tanujpurohit)
- Portfolio: [zeoenix.tech](https://zeoenix.tech/)
- Institution: IIT Patna — B.Tech Computer Science (Dec 2026)

---

## License

This project is licensed under the **MIT License** — feel free to use it as inspiration for your own portfolio.

---

<div align="center">
  <sub>Built with React · MUI v6 · Unicorn Studio · Vite</sub>
</div>
