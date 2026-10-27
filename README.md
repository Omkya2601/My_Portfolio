# Omkar Jadhav — Portfolio

React + TypeScript + Vite + Tailwind CSS.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
```

## Build
```bash
npm run build      # type-checks, then outputs static files to dist/
npm run preview    # serve dist/ locally
```

## Edit content
All text (including the page title and meta description) is in **`src/data/content.ts`**.
Restart `npm run dev` after changing the title or description.

Files in `public/`: `omkar.jpg` (photo), `resume.pdf`, `favicon.svg`, `apple-touch-icon.png`.
If `omkar.jpg` is missing, the site shows "OJ" initials instead of the photo.

Project status dots: `live` = green, `building` = orange, `built` = grey.

## Update your resume
1. Export your resume as a PDF.
2. Rename it to `resume.pdf`.
3. Copy it into the `public/` folder and replace the old file.

That's it: the "View resume" button, the Resume box in Contact and the footer link all open `public/resume.pdf`.
(To use a different file name, change `resume` in `src/data/content.ts`.)
If the site is already deployed, run `npm run build` and upload the new `dist/` folder.

## Background
`src/components/Background.tsx` draws two 3D wireframe ribbons on a fixed canvas.
Tweak `ribbons` (position, size, speed, opacity) or `CAMERA` (lower = stronger perspective).
The animation stops when the visitor has "reduce motion" turned on.

## Deploy (free)
- **Vercel / Netlify:** build command `npm run build`, output folder `dist`.
- **Your VPS (Nginx):** copy `dist/` to e.g. `/var/www/portfolio` and point an Nginx `server` block's `root` at it.

## Structure
```
src/
  data/content.ts      all text
  components/          Background, Navbar, Hero, About, Section, Rows, Cards, Tags, Skills, Contact, Footer, Avatar, Reveal
  hooks/               useActiveSection (highlights the current nav pill), useSpotlight (card hover light)
```
