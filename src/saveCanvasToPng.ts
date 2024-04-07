import { Canvas } from 'canvas';
import fs from 'fs';
import path from 'path';

const saveCanvasToPng = (canvas: Canvas, dir: string): Buffer => {
  const buffer = canvas.toBuffer('image/png');
  const filePath = path.resolve(process.cwd(), dir);
  fs.writeFileSync(filePath, buffer);

  return buffer;
};

export default saveCanvasToPng;

