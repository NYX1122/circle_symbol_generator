import { CircDrawParams } from './types.js';

import { CanvasRenderingContext2D, Canvas } from 'canvas';

const calculateCircDrawParams = (letter: string, index: number, length: number, color: string, ctx: CanvasRenderingContext2D, canvas: Canvas): CircDrawParams => {
  // circle should be drawn as follows:
  // The center of the circle is defined as the center point of a line drawn from a point on along the circumference of the main circle, to another point along the circumference of the main circle.
  // The first point that is defined along the circumference is determined by what letter of the alphabet is being represented.
  // 'A' would be the point along the circumference of the main circle that corresponds with 0 degrees, or the top-most point.
  // Any other letter would have a corresopnding point that is equal to the 0-indexed letterIndex divided by the total number of letters in the alphabet multiplied 360 degrees and then plotted along the circumference.
  // This essentially divides the circumference of the main circle into equally spaced points for each letter.
  // Then, the second point is defined by it's index in the word. If the word has five characters, like "Hello", the first character's second point is defined by being drawn on the bottom-most portion of the circle's circumference, or 180 degrees.
  // Any letter that is after the first will be offset by their index times 360/totalLetters degrees added to 180, clockwise.

  // After these two points are defined, the point that lies directly in between both of them will be the center of the new circle.
  // The radius of the circle is defined as the distance of either of the two points to the center of the circle, so the circle should intersect them.
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const mainRadius = canvas.height * 0.8 / 2;

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const letterIndex = alphabet.indexOf(letter.toUpperCase());
  const totalLetters = alphabet.length;

  const firstPointDeg = (letterIndex / totalLetters) * 360;
  const secondPointDeg = 180 + (index * 360) / length;

  const firstPointRad = (firstPointDeg * Math.PI) / 180;
  const secondPointRad = (secondPointDeg * Math.PI) / 180;

  const firstPointX = centerX + mainRadius * Math.cos(firstPointRad);
  const firstPointY = centerY - mainRadius * Math.sin(firstPointRad);

  const secondPointX = centerX + mainRadius * Math.cos(secondPointRad);
  const secondPointY = centerY - mainRadius * Math.sin(secondPointRad);

  const newCenterX = (firstPointX + secondPointX) / 2;
  const newCenterY = (firstPointY + secondPointY) / 2;

  const radius = Math.sqrt(
    Math.pow(firstPointX - newCenterX, 2) + Math.pow(firstPointY - newCenterY, 2)
  );

  const startDeg = 0;
  const endDeg = 360;

  return {
    ctx,
    centerX: newCenterX,
    centerY: newCenterY,
    radius,
    startDeg,
    endDeg,
    color,
  };
};

export default calculateCircDrawParams;