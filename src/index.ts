import './global.css';
import fragmentShader from './shaders/fragment.glsl';
import vertexShader from './shaders/vertex.glsl';

import { applyShaders, initializeCanvas } from './utils/setup';

function main() {
  const canvas = initializeCanvas(document.querySelector('body'), {
    height: window.innerHeight,
    width: window.innerWidth
  });

  applyShaders(canvas, vertexShader, fragmentShader);
}

main();
