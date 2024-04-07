import { CircDrawParams } from './types.js';

import { CanvasRenderingContext2D, Canvas } from 'canvas';

const calculateCircDrawParams = (letter: string, index: number, color: string, ctx: CanvasRenderingContext2D, canvas: Canvas): CircDrawParams => {
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

  return {
    ctx,
    centerX,
    centerY,
    radius,
    startDeg,
    endDeg,
    color
  };
};

export default calculateCircDrawParams;