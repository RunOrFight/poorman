import { CanvasHTMLAttributes, FC, useEffect, useRef } from 'react';

class Card {
  constructor(
    public ctx: CanvasRenderingContext2D,
    public x: number,
    public y: number,
    public width: number,
    public height: number
  ) {}

  draw() {
    this.ctx.beginPath();
    this.ctx.strokeStyle = '#ffffff';
    this.ctx.lineWidth = 2;

    this.ctx.moveTo(this.x + 10, this.y);

    this.ctx.lineTo(this.x + 10 + (this.width - 20), this.y);
    this.ctx.lineTo(this.x + this.width, this.y + 10);
    this.ctx.lineTo(this.x + this.width, this.y + 10 + (this.height - 20));
    this.ctx.lineTo(this.x + this.width - 10, this.y + this.height);
    this.ctx.lineTo(this.x + 10, this.y + this.height);
    this.ctx.lineTo(this.x, this.y + (this.height - 10));
    this.ctx.lineTo(this.x, this.y + 10);
    this.ctx.lineTo(this.x + 10, this.y);

    this.ctx.stroke();
  }
}

const Canvas: FC<CanvasHTMLAttributes<HTMLCanvasElement>> = (props) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const context = canvas.getContext('2d')!;
    let animationFrameId = 0;

    const render = () => {
      new Card(context, 20, 20, 132, 178).draw();
      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas width="500" height="500" className="border" ref={ref} {...props} />;
};

export default Canvas;
