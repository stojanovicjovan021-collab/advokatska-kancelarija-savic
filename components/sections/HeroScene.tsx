'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const gold = new THREE.Color('#C9A227');
    const shapes: THREE.LineSegments[] = [];

    const geometries = [
      new THREE.IcosahedronGeometry(1.6, 0),
      new THREE.OctahedronGeometry(1.1, 0),
      new THREE.TorusGeometry(1.3, 0.02, 8, 64),
    ];

    geometries.forEach((geometry, i) => {
      const edges = new THREE.EdgesGeometry(geometry);
      const material = new THREE.LineBasicMaterial({
        color: gold,
        transparent: true,
        opacity: 0.35 - i * 0.06,
      });
      const mesh = new THREE.LineSegments(edges, material);
      mesh.position.set(i === 0 ? 2.6 : i === 1 ? -2.8 : 0, i === 0 ? 0.6 : i === 1 ? -0.8 : 0.2, -i * 1.4);
      scene.add(mesh);
      shapes.push(mesh);
    });

    let mouseX = 0;
    let mouseY = 0;
    function handlePointerMove(e: PointerEvent) {
      const rect = container!.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / rect.width - 0.5;
      mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    }
    window.addEventListener('pointermove', handlePointerMove);

    let frameId: number;
    const clock = new THREE.Clock();

    function animate() {
      const elapsed = clock.getElapsedTime();
      shapes.forEach((mesh, i) => {
        mesh.rotation.x = elapsed * 0.05 * (i + 1);
        mesh.rotation.y = elapsed * 0.08 * (i + 1);
      });
      camera.position.x += (mouseX * 1.2 - camera.position.x) * 0.03;
      camera.position.y += (-mouseY * 1.2 - camera.position.y) * 0.03;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    }
    animate();

    function handleResize() {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      geometries.forEach((g) => g.dispose());
      shapes.forEach((m) => (m.material as THREE.Material).dispose());
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10 opacity-70"
      aria-hidden="true"
    />
  );
}
