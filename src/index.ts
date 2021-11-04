import './global.css';
import fragmentShader from './shaders/fragment.glsl';
import vertexShader from './shaders/vertex.glsl';

import { initializeWithShaders, initializeCanvas } from './utils/setup';

function main() {
  const canvas = initializeCanvas(document.querySelector('body'), {
    height: window.innerHeight,
    width: window.innerWidth
  });

  const { program, context } = initializeWithShaders(canvas, vertexShader, fragmentShader);

  // look up where the vertex data needs to go.
  const positionAttributeLocation = context.getAttribLocation(program, 'a_position');

  // Create a buffer to put three 2d clip space points in
  const positionBuffer = context.createBuffer();

  // Bind it to ARRAY_BUFFER (think of it as ARRAY_BUFFER = positionBuffer)
  context.bindBuffer(context.ARRAY_BUFFER, positionBuffer);

  // fill it with a 2 triangles that cover clipspace
  context.bufferData(
    context.ARRAY_BUFFER,
    new Float32Array([
      -1,
      -1, // first triangle
      1,
      -1,
      -1,
      1,
      -1,
      1, // second triangle
      1,
      -1,
      1,
      1
    ]),
    context.STATIC_DRAW
  );

  // Tell WebGL how to convert from clip space to pixels
  context.viewport(0, 0, context.canvas.width, context.canvas.height);

  // Tell it to use our program (pair of shaders)
  context.useProgram(program);

  // Turn on the attribute
  context.enableVertexAttribArray(positionAttributeLocation);

  // Bind the position buffer.
  context.bindBuffer(context.ARRAY_BUFFER, positionBuffer);

  // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
  context.vertexAttribPointer(
    positionAttributeLocation,
    2, // 2 components per iteration
    context.FLOAT, // the data is 32bit floats
    false, // don't normalize the data
    0, // 0 = move forward size * sizeof(type) each iteration to get the next position
    0 // start at the beginning of the buffer
  );

  context.drawArrays(
    context.TRIANGLES,
    0, // offset
    6 // num vertices to process
  );
}

main();
