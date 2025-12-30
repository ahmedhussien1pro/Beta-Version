import React from 'react';
import { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MatrixRain.css';

const MatrixRain = ({ opacity = 0.15 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&*';
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array.from({ length: columns }).fill(1);

    let frameCount = 0;
    let animationId;

    const draw = () => {
      frameCount++;
      if (frameCount % 4 !== 0) {
        animationId = requestAnimationFrame(draw);
        return;
      }

      ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#22c55e';
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [opacity]);

  return <canvas ref={canvasRef} className='landing__matrix' />;
};
export default MatrixRain;
