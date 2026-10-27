import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";
import { site } from "./src/data/content";

const escape = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

// Fills the page title and meta description in index.html from src/data/content.ts.
// (Restart `npm run dev` after changing them.)
const siteMeta = (): Plugin => ({
  name: "site-meta",
  transformIndexHtml: (html) =>
    html.replace(/__SITE_TITLE__/g, escape(site.title)).replace(/__SITE_DESCRIPTION__/g, escape(site.description)),
});

// `npm run build` → normal multi-file build in dist/ (use this for hosting).
// `npm run build:single` → one self-contained HTML file (used for quick previews).
export default defineConfig(({ mode }) => ({
  plugins: [react(), siteMeta(), ...(mode === "single" ? [viteSingleFile()] : [])],
  build: { outDir: mode === "single" ? "dist-single" : "dist" },
}));
