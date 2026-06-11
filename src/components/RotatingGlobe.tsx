import { useEffect, useRef } from "react";
import * as THREE from "three";

const HOTSPOTS = [
  { lat: 40.7, lng: -74.0 },
  { lat: 51.5, lng: -0.1 },
  { lat: 35.7, lng: 139.7 },
  { lat: 1.3, lng: 103.8 },
  { lat: 48.9, lng: 2.3 },
  { lat: -33.9, lng: 151.2 },
  { lat: 25.2, lng: 55.3 },
  { lat: -23.5, lng: -46.6 },
  { lat: 28.6, lng: 77.2 },
  { lat: 34.0, lng: -118.2 },
  { lat: 37.6, lng: 127.0 },
  { lat: 55.8, lng: 37.6 },
];

const ARCS = [
  { startLat: 40.7, startLng: -74.0, endLat: 51.5, endLng: -0.1 },
  { startLat: 51.5, startLng: -0.1, endLat: 48.9, endLng: 2.3 },
  { startLat: 51.5, startLng: -0.1, endLat: 35.7, endLng: 139.7 },
  { startLat: 35.7, startLng: 139.7, endLat: 1.3, endLng: 103.8 },
  { startLat: 1.3, startLng: 103.8, endLat: -33.9, endLng: 151.2 },
  { startLat: 40.7, startLng: -74.0, endLat: -23.5, endLng: -46.6 },
  { startLat: 40.7, startLng: -74.0, endLat: 34.0, endLng: -118.2 },
  { startLat: 25.2, startLng: 55.3, endLat: 28.6, endLng: 77.2 },
  { startLat: 25.2, startLng: 55.3, endLat: 51.5, endLng: -0.1 },
  { startLat: 37.6, startLng: 127.0, endLat: 35.7, endLng: 139.7 },
  { startLat: 55.8, startLng: 37.6, endLat: 48.9, endLng: 2.3 },
  { startLat: 34.0, startLng: -118.2, endLat: 1.3, endLng: 103.8 },
];

export default function RotatingGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeInstanceRef = useRef<any>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let destroyed = false;
    let globe: any = null;

    import("globe.gl").then((mod) => {
      if (destroyed || !el) return;

      const GlobeGL = mod.default;
      const width = el.clientWidth || 720;
      const height = el.clientHeight || 405;

      globe = GlobeGL()(el);
      globeInstanceRef.current = globe;

      // Globe surface material — deep navy
      const globeMat = new THREE.MeshPhongMaterial({
        color: new THREE.Color("#020d1f"),
        emissive: new THREE.Color("#050f25"),
        shininess: 8,
        specular: new THREE.Color("#1a4080"),
      });

      globe
        .width(width)
        .height(height)
        .backgroundColor("rgba(0,0,0,0)")
        .globeMaterial(globeMat)
        .atmosphereColor("#2563eb")
        .atmosphereAltitude(0.22)
        // Hotspot points
        .pointsData(HOTSPOTS)
        .pointLat("lat")
        .pointLng("lng")
        .pointColor(() => "#60a5fa")
        .pointAltitude(0.015)
        .pointRadius(0.45)
        // Connection arcs
        .arcsData(ARCS)
        .arcStartLat("startLat")
        .arcStartLng("startLng")
        .arcEndLat("endLat")
        .arcEndLng("endLng")
        .arcColor(() => ["rgba(30,64,175,0.6)", "rgba(96,165,250,0.9)"])
        .arcAltitudeAutoScale(0.35)
        .arcStroke(0.5)
        .arcDashLength(0.5)
        .arcDashGap(0.25)
        .arcDashAnimateTime(2200)
        // Pulse rings on hotspots
        .ringsData(HOTSPOTS)
        .ringLat("lat")
        .ringLng("lng")
        .ringColor(() => (t: number) => `rgba(96,165,250,${Math.max(0, 1 - t)})`)
        .ringMaxRadius(3.5)
        .ringPropagationSpeed(2.5)
        .ringRepeatPeriod(900)
        // No user interaction / zoom
        .enablePointerInteraction(false);

      // Fetch and apply GeoJSON country polygons
      fetch(
        "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"
      )
        .then((r) => r.json())
        .then((geo) => {
          if (destroyed) return;
          globe
            .polygonsData(geo.features)
            .polygonCapColor(() => "#0f3460")
            .polygonSideColor(() => "#091a35")
            .polygonStrokeColor(() => "#1e4d8c")
            .polygonAltitude(0.006);
        })
        .catch(() => {});

      // Auto-rotate
      const controls = globe.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.7;
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.enableRotate = false;

      // Better lighting
      const scene = globe.scene();

      // Remove default lights if any
      const toRemove: THREE.Object3D[] = [];
      scene.traverse((obj: THREE.Object3D) => {
        if (obj instanceof THREE.DirectionalLight || obj instanceof THREE.AmbientLight) {
          toRemove.push(obj);
        }
      });
      toRemove.forEach((obj) => scene.remove(obj));

      const ambient = new THREE.AmbientLight(0x1a3a70, 3);
      scene.add(ambient);

      const keyLight = new THREE.DirectionalLight(0x3b82f6, 1.5);
      keyLight.position.set(5, 3, 5);
      scene.add(keyLight);

      const fillLight = new THREE.DirectionalLight(0x1e40af, 0.6);
      fillLight.position.set(-5, -2, -3);
      scene.add(fillLight);

      // Resize
      const onResize = () => {
        if (!el || destroyed) return;
        globe.width(el.clientWidth).height(el.clientHeight);
      };
      window.addEventListener("resize", onResize);

      return () => window.removeEventListener("resize", onResize);
    });

    return () => {
      destroyed = true;
      if (globeInstanceRef.current) {
        try { globeInstanceRef.current._destructor?.(); } catch {}
        globeInstanceRef.current = null;
      }
      // Clear the container
      if (el) el.innerHTML = "";
    };
  }, []);

  return (
    <div
      className="w-full aspect-video rounded border border-blue-900/40 overflow-hidden relative"
      style={{
        background: "radial-gradient(ellipse at 50% 60%, #071428 0%, #020810 100%)",
      }}
    >
      {/* Star field */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.75) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
          opacity: 0.15,
        }}
      />
      {/* Second star layer offset */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          backgroundPosition: "25px 25px",
          opacity: 0.1,
        }}
      />
      <div ref={containerRef} className="w-full h-full" />
      <div className="absolute bottom-3 left-3 text-[9px] font-mono uppercase text-blue-400/50 tracking-widest pointer-events-none select-none">
        Global NOC Coverage — 5 Regions Live
      </div>
    </div>
  );
}
