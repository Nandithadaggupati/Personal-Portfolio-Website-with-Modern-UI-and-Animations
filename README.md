# Nandithadaggupati - Personal Portfolio Website

Welcome to my personal developer portfolio website. This is a fully custom, responsive, and animated single-page application built from scratch to showcase my projects, technical skills, and software engineering experience.

**Live URL**: [https://personal-portfolio-swart-three-91.vercel.app](https://personal-portfolio-swart-three-91.vercel.app)

---

## Author
* **Name**: Nanditha
* **Role**: Full Stack & Creative Frontend Engineer
* **Core Focus**: High-performance web applications, responsive architecture, and interactive motion designs.

---

## Technology Stack

* **Core Framework**: [React](https://react.dev/) v19 (via [Vite](https://vite.dev/) build system)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4.0 (leveraging CSS-first theme tokens & custom grid layouts)
* **Animations**: [Framer Motion](https://www.framer.com/motion/) (powering scroll-linked parallax, staggered grid reveals, and hover translations)
* **Icons**: [Lucide React](https://lucide.dev/) (for clean, lightweight vector iconography)

---

## Key Features & Implementations

1. **Fully Responsive Layout**: Optimised for mobile (`375px`), tablet (`768px`), and desktop (`1280px`) screens with no horizontal overflows.
2. **GPU-Accelerated Parallax Scrolling**: Custom scroll-linked transformations applied to background decorative spheres in the Hero section.
3. **On-Scroll Reveal Transitions**: Elements slide and fade into view dynamically as they cross the viewport threshold.
4. **Interactive Navigation**: Sticky, glassmorphic header navigation bar with active scroll-depth progress indicators and mobile toggle drawer.
5. **Accessibility Enforcement**: Respects user OS accessibility options via the `prefers-reduced-motion` media query to immediately disable all transitions and animations if requested.
6. **SEO Optimized**: Standard structural headings (`h1` hierarchy), meta titles, descriptions, and dynamic SVG favicons.

---

## Getting Started: Local Setup

Follow these instructions to run this project locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (version `v18.0.0` or higher) and `npm` installed.

### 1. Install Dependencies
Navigate into the project directory and install the necessary package dependencies:
```bash
npm install
```

### 2. Run Local Development Server
Launch the local Vite server:
```bash
npm run dev
```
Open your browser and navigate to the printed local port (usually `http://localhost:5173`) to view the application in real-time.

### 3. Generate Production Build
Compile the client files into optimized bundles located in the `/dist` directory:
```bash
npm run build
```

### 4. Preview Production Build locally
Host the local build files for validation:
```bash
npm run preview
```
