import { CanvasHTMLAttributes, FC, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface Position {
  x: number;
  y: number;
}

class Particle {
  constructor(public radius: number, public position: Position) {}

  draw(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, false);
    context.fill();
    context.closePath();
  }
}

const move = (obj: { position: Position; draw: (context: CanvasRenderingContext2D) => void }) => {
  return {
    to(to: Position) {
      const dx = to.x - obj.position.x;
      const dy = to.y - obj.position.y;
      const magnitude = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
      const normalized = { x: dx / magnitude, y: dy / magnitude };
      return {
        withSpeed(speed: number) {
          return {
            draw(context: CanvasRenderingContext2D) {
              if (
                obj.position.x.toFixed() === to.x.toFixed() &&
                obj.position.y.toFixed() === to.y.toFixed()
              ) {
                return;
              }
              obj.position.x = obj.position.x + normalized.x * speed;
              obj.position.y = obj.position.y + normalized.y * speed;
              obj.draw(context);
            },
          };
        },
      };
    },
  };
};

const canvasOverlay = document.getElementById('canvas-overlay')!;

const Canvas: FC<CanvasHTMLAttributes<HTMLCanvasElement>> = (props) => {
  const [isHidden] = useState(true);

  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    let animationFrameId = 0;
    if (canvas) {
      const context = canvas.getContext('2d')!;
      const { width, height } = canvasOverlay.getBoundingClientRect();
      context.canvas.width = width;
      context.canvas.height = height;

      const particle = new Particle(10, { x: 20, y: 20 });
      const movement = move(particle).to({ x: 50, y: 20 }).withSpeed(2);
      const render = () => {
        context.fillStyle = '#ffffff';
        movement.draw(context);
        animationFrameId = requestAnimationFrame(render);
      };
      render();
    }

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    !isHidden &&
    createPortal(
      <canvas className="border bg-transparent h-full w-full " ref={ref} {...props} />,
      canvasOverlay
    )
  );
};

export default Canvas;
