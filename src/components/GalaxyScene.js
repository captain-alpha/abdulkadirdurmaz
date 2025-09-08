import React, { useEffect, useRef } from "react";
import * as THREE from "three";
//import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const GalaxyScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // === SCENE ===
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x020618);

    // === CAMERA ===
    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      2000
    );
    camera.position.set(0, 90, 0);
    camera.lookAt(0, 0, 0);

    // === RENDERER ===
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 0.5));
    mount.appendChild(renderer.domElement);

    // === CONTROLS ===
    /*
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    */

    // === STAR GEOMETRY ===
    let sizes = [];
    let shift = [];
    let pts = [];

    let gu = {
      time: { value: 0 }
    };

    const pushShift = () => {
      shift.push(
        Math.random() * Math.PI,
        Math.random() * Math.PI * 2,
        (Math.random() * 0.9 + 0.1) * Math.PI * 0.1,
        Math.random() * 0.9 + 0.1
      );
    };

    // Merkez küre yıldızları
    pts = new Array(5000).fill().map(() => {
      sizes.push(Math.random() * 1.5 + 0.5);
      pushShift();
      return new THREE.Vector3()
        .randomDirection()
        .multiplyScalar(Math.random() * 0.5 + 9.5);
    });

    // Disk yıldızları
    for (let i = 0; i < 5000; i++) {
      let r = 12, R = 70;
      let rand = Math.pow(Math.random(), 1.5);
      let radius = Math.sqrt(R * R * rand + (1 - rand) * r * r);
      pts.push(
        new THREE.Vector3().setFromCylindricalCoords(
          radius,
          Math.random() * 2 * Math.PI,
          (Math.random() - 0.5) * 2
        )
      );
      sizes.push(Math.random() * 1.5 + 0.5);
      pushShift();
    }

    // === Renkler ===
    /*
    let colors = [];
    for (let i = 0; i < pts.length; i++) {
      let p = pts[i];
      let d = p.length() / 70.0; // normalize distance (0–1)
      d = Math.min(Math.max(d, 0), 1);

      // turuncu → mor gradient
      let r = (1 - d) * 227 / 255 + d * 100 / 255;
      let g = (1 - d) * 155 / 255 + d * 50 / 255;
      let b = (1 - d) * 0 / 255 + d * 255 / 255;

      colors.push(r, g, b);
    }
    */

    // === GEOMETRY ===
    let g = new THREE.BufferGeometry().setFromPoints(pts);
    g.setAttribute("sizes", new THREE.Float32BufferAttribute(sizes, 1));
    g.setAttribute("shift", new THREE.Float32BufferAttribute(shift, 4));
    //g.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));


    // === MATERIAL ===
    let m = new THREE.PointsMaterial({
      size: 0.125,
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.AdditiveBlending,
      onBeforeCompile: shader => {
        shader.uniforms.time = gu.time;
        shader.vertexShader = `
        uniform float time;
        attribute float sizes;
        attribute vec4 shift;
        varying vec3 vColor;
        ${shader.vertexShader}
        `.replace(
          `gl_PointSize = size;`,
          `
          // Twinkle animasyonu (StarryBackground tarzı)
          float twinkle = sin(time * 0.5 + shift.x);   // Daha yavaş dalga
          twinkle = pow(max(twinkle, 0.001), 0.9);       // Negatif değerleri bastır, parlak kısmı uzat
          gl_PointSize = size * sizes * (1.0 + 0.9 * twinkle);
          `
        ).replace(
          `#include <color_vertex>`,
          `#include <color_vertex>
          float d = length(abs(position) / vec3(40., 10., 40.));
          d = clamp(d, 0., 1.);
          vColor = mix(vec3(227., 155., 0.), vec3(100., 50., 255.), d) / 255.;
         `
        ).replace(
          `#include <begin_vertex>`,
          `#include <begin_vertex>
           float t = time;
           float moveT = mod(shift.x + shift.z * t * 0.5, PI2);
           float moveS = mod(shift.y + shift.z * t, PI2);
           transformed += vec3(
           cos(moveS) * sin(moveT),
           cos(moveT),
           sin(moveS) * sin(moveT)
           ) * (shift.w * 0.3);
          `
        );

        // === Fragment Shader ===
        shader.fragmentShader = `
          varying vec3 vColor;
          ${shader.fragmentShader}
        `.replace(
          `#include <clipping_planes_fragment>`,
          `#include <clipping_planes_fragment>
            float d = length(gl_PointCoord.xy - 0.5);
          `
        ).replace(
          `vec4 diffuseColor = vec4( diffuse, opacity );`,
          `
          vec4 diffuseColor = vec4(vColor, smoothstep(0.5, 0.1, d));
          `
        );
      }

    });

    let p = new THREE.Points(g, m);
    p.rotation.order = "ZYX";
    p.rotation.z = 0;
    scene.add(p);

    const clock = new THREE.Clock();

    // === ANIMATION LOOP ===
    const animate = () => {
      /*controls.update();*/
      let t = clock.getElapsedTime() * 0.5;
      p.rotation.y = t * 0.03;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // === RESIZE ===
    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // === CLEANUP ===
    return () => {
      if (renderer) {
        renderer.forceContextLoss(); // GPU contexti bırak
        renderer.dispose();
      }
      if (mount && renderer?.domElement) {
        mount.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
      g.dispose();
      m.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 -z-10" />;
};

export default GalaxyScene;
