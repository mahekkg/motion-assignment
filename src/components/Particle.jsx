// src/components/Particle.js
import React, { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";
import { gsap } from "gsap";

const Particle = () => {
  const particleContainer = useRef(null);

  useEffect(() => {
    const app = new PIXI.Application();
    app.view = particleContainer.current;
    app.renderer.resize(window.innerWidth, window.innerHeight);
    app.renderer.autoDensity = true;
    app.renderer.resolution = window.devicePixelRatio || 1;

    const particles = [];
    const totalParticles = 100;

    for (let i = 0; i < totalParticles; i++) {
      const particle = PIXI.Sprite.from("../../public/smoke.jpg"); // Update with correct path
      particle.anchor.set(0.5);
      particle.scale.set(0.5 + Math.random() * 0.5);
      particle.x = Math.random() * app.renderer.width;
      particle.y = Math.random() * app.renderer.height;
      particle.alpha = 0.1 + Math.random() * 0.9;
      app.stage.addChild(particle);
      particles.push(particle);
    }

    const onPointerMove = (event) => {
      const { clientX, clientY } = event;
      particles.forEach((particle) => {
        gsap.to(particle, {
          duration: 0.5,
          x: clientX + (Math.random() - 0.5) * 100,
          y: clientY + (Math.random() - 0.5) * 100,
        });
      });
    };

    window.addEventListener("pointermove", onPointerMove);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      app.destroy(true, true);
    };
  }, []);

  return (
    <div
      ref={particleContainer}
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default Particle;
