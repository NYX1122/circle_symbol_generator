import { CircDrawParams } from './types.js';

import degreesToRadians from './degreesToRadians.js';

const drawCircle = ({ ctx, centerX, centerY, radius, startDeg, endDeg, color }: CircDrawParams): void => {
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, degreesToRadians(startDeg), degreesToRadians(endDeg));
  ctx.fillStyle = color;
  ctx.fill();
};

export default drawCircle;
