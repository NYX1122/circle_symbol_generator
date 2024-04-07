import { CanvasRenderingContext2D, Canvas } from "canvas";

export type CanvasVariables = {
  ctx: CanvasRenderingContext2D;
  canvas: Canvas;
};

export type CircDrawParams = {
  ctx: CanvasRenderingContext2D;
  centerX: number;
  centerY: number;
  radius: number;
  startDeg: number;
  endDeg: number;
  color: string;
};