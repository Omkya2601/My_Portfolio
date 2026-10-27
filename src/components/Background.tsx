import { useEffect, useRef } from "react";

// Two wireframe "ribbons" drawn as real 3D twisted surfaces, projected with perspective.
// Closer lines are drawn a little brighter and thicker, farther ones fade back, which gives depth.
// The ribbons tilt slightly with the mouse and with scroll position.

const LINES = 46; // curves per ribbon
const SEGMENTS = 96; // points per curve
const CHUNKS = 8; // each curve is stroked in chunks so depth shading can vary along it
const CAMERA = 3.2; // perspective distance; smaller = stronger 3D effect

type Ribbon = {
  x: number; // anchor, as a fraction of the viewport
  y: number;
  size: number; // as a fraction of the larger viewport side
  tiltX: number;
  tiltY: number;
  tiltZ: number;
  spin: number; // rotation speed (radians per second)
  phase: number;
  alpha: number; // average line opacity
};

const ribbons: Ribbon[] = [
  { x: 0.1, y: 0.16, size: 0.42, tiltX: 0.5, tiltY: 0.2, tiltZ: -0.55, spin: 0.045, phase: 0, alpha: 0.065 },
  { x: 0.9, y: 0.86, size: 0.46, tiltX: -0.45, tiltY: -0.3, tiltZ: 0.5, spin: -0.04, phase: 2.1, alpha: 0.07 },
];

export default function Background() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const px = new Float32Array((SEGMENTS + 1) * 2);
    const pz = new Float32Array(SEGMENTS + 1);
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    let w = 0;
    let h = 0;
    let raf = 0;
    const start = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawRibbon = (r: Ribbon, t: number) => {
      const scroll = Math.min(window.scrollY / Math.max(h, 1), 6);
      const ay = r.tiltY + t * r.spin + pointer.x * 0.25;
      const ax = r.tiltX + pointer.y * 0.18 + scroll * 0.06 * Math.sign(r.spin);
      const az = r.tiltZ;
      const [sx, cx] = [Math.sin(ax), Math.cos(ax)];
      const [sy, cy] = [Math.sin(ay), Math.cos(ay)];
      const [sz, cz] = [Math.sin(az), Math.cos(az)];
      const ox = r.x * w;
      const oy = r.y * h;
      const scale = Math.max(w, h) * r.size;
      const flow = t * 0.12 + r.phase;

      for (let i = 0; i < LINES; i++) {
        const v = (i / (LINES - 1)) * 2 - 1; // across the ribbon, -1..1

        for (let j = 0; j <= SEGMENTS; j++) {
          const s = (j / SEGMENTS) * 2 - 1; // along the ribbon, -1..1
          const twist = s * 1.7 + flow;
          const width = 0.4 * (1 - 0.3 * s * s);
          // centre line of the ribbon: a gentle 3D wave
          let x = s * 1.45;
          let y = Math.sin(s * 2.1 + flow * 1.3) * 0.26 + Math.sin(v * 3 + s * 4 + flow) * 0.012;
          let z = Math.cos(s * 1.7 + flow * 0.8) * 0.3;
          // offset across the twisted width
          y += v * width * Math.cos(twist);
          z += v * width * Math.sin(twist);

          // rotate Y, then X, then Z
          let tx = x * cy + z * sy;
          z = -x * sy + z * cy;
          x = tx;
          const ty = y * cx - z * sx;
          z = y * sx + z * cx;
          y = ty;
          tx = x * cz - y * sz;
          y = x * sz + y * cz;
          x = tx;

          const p = CAMERA / (CAMERA + z);
          px[j * 2] = ox + x * p * scale;
          px[j * 2 + 1] = oy + y * p * scale;
          pz[j] = z;
        }

        const step = SEGMENTS / CHUNKS;
        for (let c = 0; c < CHUNKS; c++) {
          const a = c * step;
          const b = a + step;
          const depth = (pz[a] + pz[b]) / 2; // about -1.6 (near) .. 1.6 (far)
          const near = Math.min(Math.max(0.5 - depth / 3.2, 0), 1);
          ctx.globalAlpha = r.alpha * (0.45 + near * 1.1);
          ctx.lineWidth = 0.55 + near * 0.75;
          ctx.beginPath();
          ctx.moveTo(px[a * 2], px[a * 2 + 1]);
          for (let j = a + 1; j <= b; j++) ctx.lineTo(px[j * 2], px[j * 2 + 1]);
          ctx.stroke();
        }
      }
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = "#ffffff";
      ctx.lineCap = "round";
      ribbons.forEach((r) => drawRibbon(r, t));
      ctx.globalAlpha = 1;
    };

    const frame = (now: number) => {
      pointer.x += (pointer.tx - pointer.x) * 0.04;
      pointer.y += (pointer.ty - pointer.y) * 0.04;
      draw((now - start) / 1000);
      raf = requestAnimationFrame(frame);
    };

    const onPointer = (e: PointerEvent) => {
      pointer.tx = e.clientX / w - 0.5;
      pointer.ty = e.clientY / h - 0.5;
    };

    const run = () => {
      cancelAnimationFrame(raf);
      if (motion.matches) draw(0);
      else raf = requestAnimationFrame(frame);
    };

    const onResize = () => {
      resize();
      if (motion.matches) draw(0);
    };

    resize();
    run();
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onPointer, { passive: true });
    motion.addEventListener("change", run);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointer);
      motion.removeEventListener("change", run);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />;
}
