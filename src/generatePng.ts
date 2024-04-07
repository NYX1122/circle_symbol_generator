import setupCanvas from './setupCanvas.js';

import calculateCircDrawParams from './calculateCircDrawParams.js';
import drawCircle from './drawCircle.js';

import saveCanvasToPng from './saveCanvasToPng.js';

const generatePng = (letter: string, index: number, color: string): Buffer => {
  const { ctx, canvas } = setupCanvas();

  const circleParams = calculateCircDrawParams(letter, index, color, ctx, canvas);

  drawCircle(circleParams);

  const canvasBuffer = saveCanvasToPng(canvas, `./layers/${index}_${letter}.png`);

  return canvasBuffer;
};

export default generatePng;