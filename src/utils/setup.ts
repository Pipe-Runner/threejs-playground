import { compileShader, createProgram } from './webgl';

export function initializeCanvas(
  container: HTMLElement | null,
  size: { height: number; width: number }
): HTMLCanvasElement {
  if (!container) {
    throw new Error('Container not defined. Failed to insert canvas');
  }
  const stageContainer = document.createElement('div');
  stageContainer.setAttribute('id', 'stage-container');

  const canvas = document.createElement('canvas');
  canvas.setAttribute('id', 'stage');
  canvas.setAttribute('height', String(size.height));
  canvas.setAttribute('width', String(size.width));

  stageContainer.appendChild(canvas);
  container.appendChild(stageContainer);

  return canvas;
}

export function initializeWithShaders(
  canvas: HTMLCanvasElement,
  vertexShaderSource: string,
  fragmentShaderSource: string
): { canvas: HTMLCanvasElement; context: WebGLRenderingContext; program: WebGLProgram } {
  if (!canvas) {
    throw new Error('Canvas not available. Cannot apply shader!');
  }

  const context = canvas.getContext('webgl');

  if (!context) {
    throw new Error('WebGL not supported!');
  }

  const vertexShader = compileShader(context, vertexShaderSource, context.VERTEX_SHADER);
  const fragmentShader = compileShader(context, fragmentShaderSource, context.FRAGMENT_SHADER);

  const program = createProgram(context, vertexShader, fragmentShader);

  return { canvas, context, program };
}
