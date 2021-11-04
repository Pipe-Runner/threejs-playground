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

export function applyShaders(
  canvas: HTMLCanvasElement,
  vertexShader: string,
  fragmentShader: string
): { canvas: HTMLCanvasElement; context: WebGLRenderingContext } {
  if (!canvas) {
    throw new Error('Canvas not available. Cannot apply shader!');
  }

  const context = canvas.getContext('webgl');

  if (!context) {
    throw new Error('WebGL not supported!');
  }

  return { canvas, context };
}
