import { useEffect, useRef } from "react";

// NOC hotspot locations [lat, lng] representing regions
const HOTSPOTS: [number, number][] = [
  [40.7, -74.0],   // New York
  [51.5, -0.1],    // London
  [35.7, 139.7],   // Tokyo
  [1.3, 103.8],    // Singapore
  [48.9, 2.3],     // Paris
  [-33.9, 151.2],  // Sydney
  [19.4, -99.1],   // Mexico City
  [55.8, 37.6],    // Moscow
  [25.2, 55.3],    // Dubai
  [-23.5, -46.6],  // São Paulo
  [28.6, 77.2],    // Delhi
  [34.0, -118.2],  // Los Angeles
  [41.9, 12.5],    // Rome
  [-26.2, 28.0],   // Johannesburg
  [37.6, 127.0],   // Seoul
];

// Active connection pairs (indices into HOTSPOTS)
const CONNECTIONS: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [0, 9], [1, 7],
  [4, 5], [3, 6], [7, 8], [2, 14], [0, 11], [8, 12],
];

function latLngToXYZ(lat: number, lng: number, r: number): [number, number, number] {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return [
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta),
  ];
}

function project(
  x: number, y: number, z: number,
  rotY: number, cx: number, cy: number, scale: number
): { sx: number; sy: number; depth: number } {
  // Rotate around Y axis
  const cosY = Math.cos(rotY);
  const sinY = Math.sin(rotY);
  const rx = x * cosY + z * sinY;
  const rz = -x * sinY + z * cosY;
  // Simple perspective
  const perspective = 2.4;
  const zNorm = (rz + scale) / (scale * perspective);
  return {
    sx: cx + (rx / scale) * scale * zNorm * (scale / scale),
    sy: cy - (y / scale) * scale * zNorm,
    depth: rz,
  };
}

export default function RotatingGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rotRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const cx = W / 2;
    const cy = H / 2;
    const R = Math.min(W, H) * 0.38;

    function draw() {
      ctx!.clearRect(0, 0, W, H);

      const rot = rotRef.current;

      // Draw globe sphere gradient
      const grad = ctx!.createRadialGradient(cx - R * 0.25, cy - R * 0.2, R * 0.05, cx, cy, R);
      grad.addColorStop(0, "rgba(59,130,246,0.18)");
      grad.addColorStop(0.5, "rgba(37,99,235,0.10)");
      grad.addColorStop(1, "rgba(15,23,42,0.60)");
      ctx!.beginPath();
      ctx!.arc(cx, cy, R, 0, Math.PI * 2);
      ctx!.fillStyle = grad;
      ctx!.fill();

      // Draw latitude lines
      for (let lat = -75; lat <= 75; lat += 30) {
        ctx!.beginPath();
        let first = true;
        for (let lng = -180; lng <= 180; lng += 4) {
          const [x, y, z] = latLngToXYZ(lat, lng, R);
          const cosY = Math.cos(rot);
          const sinY = Math.sin(rot);
          const rx = x * cosY + z * sinY;
          const rz = -x * sinY + z * cosY;
          const screenX = cx + rx;
          const screenY = cy - y;
          if (first) { ctx!.moveTo(screenX, screenY); first = false; }
          else ctx!.lineTo(screenX, screenY);
        }
        const visible = true;
        if (visible) {
          ctx!.strokeStyle = "rgba(99,179,237,0.12)";
          ctx!.lineWidth = 0.5;
          ctx!.stroke();
        }
      }

      // Draw longitude lines
      for (let lng = 0; lng < 360; lng += 30) {
        ctx!.beginPath();
        let first = true;
        for (let lat = -90; lat <= 90; lat += 4) {
          const [x, y, z] = latLngToXYZ(lat, lng, R);
          const cosY = Math.cos(rot);
          const sinY = Math.sin(rot);
          const rx = x * cosY + z * sinY;
          const rz = -x * sinY + z * cosY;
          const screenX = cx + rx;
          const screenY = cy - y;
          if (first) { ctx!.moveTo(screenX, screenY); first = false; }
          else ctx!.lineTo(screenX, screenY);
        }
        ctx!.strokeStyle = "rgba(99,179,237,0.12)";
        ctx!.lineWidth = 0.5;
        ctx!.stroke();
      }

      // Project hotspots
      const projected = HOTSPOTS.map(([lat, lng]) => {
        const [x, y, z] = latLngToXYZ(lat, lng, R);
        const cosY = Math.cos(rot);
        const sinY = Math.sin(rot);
        const rx = x * cosY + z * sinY;
        const rz = -x * sinY + z * cosY;
        return { sx: cx + rx, sy: cy - y, depth: rz, visible: rz > -R * 0.1 };
      });

      // Draw connection arcs (only between visible points)
      CONNECTIONS.forEach(([a, b]) => {
        const pa = projected[a];
        const pb = projected[b];
        if (!pa.visible || !pb.visible) return;
        const mx = (pa.sx + pb.sx) / 2;
        const my = (pa.sy + pb.sy) / 2 - R * 0.18;
        ctx!.beginPath();
        ctx!.moveTo(pa.sx, pa.sy);
        ctx!.quadraticCurveTo(mx, my, pb.sx, pb.sy);
        ctx!.strokeStyle = "rgba(59,130,246,0.35)";
        ctx!.lineWidth = 0.8;
        ctx!.stroke();
      });

      // Draw hotspot dots
      projected.forEach(({ sx, sy, depth, visible }) => {
        if (!visible) return;
        const alpha = Math.max(0.3, (depth + R) / (2 * R));
        // Outer ring
        ctx!.beginPath();
        ctx!.arc(sx, sy, 5, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(59,130,246,${alpha * 0.2})`;
        ctx!.fill();
        // Inner dot
        ctx!.beginPath();
        ctx!.arc(sx, sy, 2.5, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(147,197,253,${alpha})`;
        ctx!.fill();
        // Pulse ring (animated via opacity trick)
        const pulse = (Math.sin(Date.now() * 0.003 + sx) + 1) / 2;
        ctx!.beginPath();
        ctx!.arc(sx, sy, 5 + pulse * 4, 0, Math.PI * 2);
        ctx!.strokeStyle = `rgba(59,130,246,${alpha * 0.4 * (1 - pulse)})`;
        ctx!.lineWidth = 1;
        ctx!.stroke();
      });

      // Globe rim glow
      const rimGrad = ctx!.createRadialGradient(cx, cy, R * 0.85, cx, cy, R);
      rimGrad.addColorStop(0, "rgba(59,130,246,0)");
      rimGrad.addColorStop(1, "rgba(59,130,246,0.18)");
      ctx!.beginPath();
      ctx!.arc(cx, cy, R, 0, Math.PI * 2);
      ctx!.strokeStyle = "rgba(99,179,237,0.35)";
      ctx!.lineWidth = 1.5;
      ctx!.stroke();
      ctx!.fillStyle = rimGrad;
      ctx!.fill();

      rotRef.current += 0.003;
      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="w-full aspect-video rounded border border-border bg-[#060d1a] flex items-center justify-center relative overflow-hidden">
      {/* Starfield background */}
      <div className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          opacity: 0.12,
        }}
      />
      <canvas
        ref={canvasRef}
        width={720}
        height={405}
        className="w-full h-full"
        style={{ display: "block" }}
      />
      {/* Overlay label */}
      <div className="absolute bottom-3 left-3 text-[9px] font-mono uppercase text-blue-400/60 tracking-widest">
        Global NOC Coverage — 5 Regions Live
      </div>
    </div>
  );
}
