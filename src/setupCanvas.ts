import { CanvasVariables } from './types.js';

import { createCanvas } from 'canvas';

import drawCircle from './drawCircle.js';

const setupCanvas = (): CanvasVariables => {
  const canvas = createCanvas(2000, 2000);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = canvas.height * .8 / 2;
  const startDeg = 0;
  const endDeg = 360;
  const color = '#000000';

  const drawCircleParams = {
    ctx,
    centerX,
    centerY,
    radius,
    startDeg,
    endDeg,
    color
  };

  drawCircle(drawCircleParams);

  ctx.clip();

  return { ctx, canvas };
};

export default setupCanvas;