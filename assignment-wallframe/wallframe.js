var gl;
var points;

const unitScale = 0.075;

window.onload = function init() {
  var canvas = document.getElementById("gl-canvas");

  gl = WebGLUtils.setupWebGL(canvas);

  if (!gl) {
      alert("WebGL isn't available");
  }

  const data =  {
    vertices: [],
    colors: []
  }
  const blue = [0.051, 0.278, 0.631, 1.0];
  const turquoise = [0.0,  0.514,  0.557,  1.0];

  bottomPlate_1 = createStud()
  bottomPlate_1 = cut(bottomPlate_1, 51)
  bottomPlate_1 = rotate(bottomPlate_1, -90)
  bottomPlate_1 = translate(bottomPlate_1, -120, 1.5, 0)
  addBoard(bottomPlate_1, turquoise, data)

  bottomPlate_2 = createStud()
  bottomPlate_2 = cut(bottomPlate_2, 156)
  bottomPlate_2 = rotate(bottomPlate_2, -90)
  bottomPlate_2 = translate(bottomPlate_2, -34.5, 1.5,0)
  addBoard(bottomPlate_2, turquoise, data)

  kingStud_1 = createStud()
  kingStud_1 = translate(kingStud_1, -120, 1.5, 0)
  addBoard(kingStud_1, turquoise, data)

  kingStud_2 = createStud()
  kingStud_2 = translate(kingStud_2, -96, 1.5, 0)
  addBoard(kingStud_2, turquoise, data)

  kingStud_3 = createStud()
  kingStud_3 = translate(kingStud_3, -72, 1.5, 0)
  addBoard(kingStud_3, turquoise, data)

  kingStud_4 = createStud()
  kingStud_4 = translate(kingStud_4, -33, 1.5, 0)
  addBoard(kingStud_4, turquoise, data)

  kingStud_5 = createStud()
  kingStud_5 = translate(kingStud_5, -24, 1.5, 0)
  addBoard(kingStud_5, turquoise, data)

  kingStud_6 = createStud()
  kingStud_6 = translate(kingStud_6, 0, 1.5, 0)
  addBoard(kingStud_6, turquoise, data)

  kingStud_7 = createStud()
  kingStud_7 = translate(kingStud_7, 24, 1.5, 0)
  addBoard(kingStud_7, turquoise, data)

  kingStud_8 = createStud()
  kingStud_8 = translate(kingStud_8, 30.875, 1.5, 0)
  addBoard(kingStud_8, turquoise, data)

  kingStud_9 = createStud()
  kingStud_9 = translate(kingStud_9, 72, 1.5, 0)
  addBoard(kingStud_9, turquoise, data)

  kingStud_10 = createStud()
  kingStud_10 = translate(kingStud_10, 96, 1.5, 0)
  addBoard(kingStud_10, turquoise, data)

  kingStud_11 = createStud()
  kingStud_11 = translate(kingStud_11, 120, 1.5, 0)
  addBoard(kingStud_11, turquoise, data)

  doorLeft = createStud()
  doorLeft = cut(doorLeft, 84)
  doorLeft = translate(doorLeft, -70.5, 1.5, 0)
  addBoard(doorLeft, blue, data)

  doorRight = createStud()
  doorRight = cut(doorRight, 84)
  doorRight = translate(doorRight, -34.5, 1.5, 0)
  addBoard(doorRight, blue, data)

  doorHeader = createStud()
  doorHeader = cut(doorHeader, 37.5)
  doorHeader = rotateHeader(doorHeader)
  doorHeader = rotate(doorHeader, -90)
  doorHeader = translate(doorHeader, -70.5, 85.5, 0)
  addBoard(doorHeader, blue, data)

  doorCripple = createStud()
  doorCripple = cut(doorCripple, 7)
  doorCripple = translate(doorCripple, -52, 89, 0)
  addBoard(doorCripple, blue, data)

  windowLeft = createStud()
  windowLeft = cut(windowLeft, 78.5)
  windowLeft = translate(windowLeft, 32.375, 1.5, 0)
  addBoard(windowLeft, blue, data)

  windowRight = createStud()
  windowRight = cut(windowRight, 78.5)
  windowRight = translate(windowRight, 70.5, 1.5, 0)
  addBoard(windowRight, blue, data)

  windowCrippleBottom = createStud()
  windowCrippleBottom = cut(windowCrippleBottom, 11.75)
  windowCrippleBottom = translate(windowCrippleBottom, 52, 1.5, 0)
  addBoard(windowCrippleBottom, blue, data)

  windowCrippleTop = createStud()
  windowCrippleTop = cut(windowCrippleTop, 12.5)
  windowCrippleTop = translate(windowCrippleTop, 52, 83.5, 0)
  addBoard(windowCrippleTop, blue, data)

  windowBottomSill = createStud()
  windowBottomSill = cut(windowBottomSill, 36.675)
  windowBottomSill = rotate(windowBottomSill, -90)
  windowBottomSill = translate(windowBottomSill, 33.875, 14.75, 0)
  addBoard(windowBottomSill, blue, data)

  windowHeader = createStud()
  windowHeader = cut(windowHeader, 39.625)
  windowHeader = rotateHeader(windowHeader)
  windowHeader = rotate(windowHeader, -90)
  windowHeader = translate(windowHeader, 32.375, 80, 0)
  addBoard(windowHeader, blue, data)

  doubleTopPlate_1 = createStud()
  doubleTopPlate_1 = rotate(doubleTopPlate_1, -90)
  doubleTopPlate_1 = translate(doubleTopPlate_1, -120, 97.5, 0)
  addBoard(doubleTopPlate_1, turquoise, data)

  doubleTopPlate_2 = createStud()
  doubleTopPlate_2 = rotate(doubleTopPlate_2, -90)
  doubleTopPlate_2 = translate(doubleTopPlate_2, -120, 99, 0)
  addBoard(doubleTopPlate_2, turquoise, data)

  doubleTopPlate_3 = createStud()
  doubleTopPlate_3 = rotate(doubleTopPlate_3, -90)
  doubleTopPlate_3 = translate(doubleTopPlate_3, -24, 97.5, 0)
  addBoard(doubleTopPlate_3, turquoise, data)

  doubleTopPlate_4 = createStud()
  doubleTopPlate_4 = rotate(doubleTopPlate_4, -90)
  doubleTopPlate_4 = translate(doubleTopPlate_4, -24, 99, 0)
  addBoard(doubleTopPlate_4, turquoise, data)

  doubleTopPlate_5 = createStud()
  doubleTopPlate_5 = cut(doubleTopPlate_5, 49.5)
  doubleTopPlate_5 = rotate(doubleTopPlate_5, -90)
  doubleTopPlate_5 = translate(doubleTopPlate_5, 72, 97.5, 0)
  addBoard(doubleTopPlate_5, turquoise, data)

  doubleTopPlate_6 = createStud()
  doubleTopPlate_6 = cut(doubleTopPlate_6, 49.5)
  doubleTopPlate_6 = rotate(doubleTopPlate_6, -90)
  doubleTopPlate_6 = translate(doubleTopPlate_6, 72, 99, 0)
  addBoard(doubleTopPlate_6, turquoise, data)

  // Configure WebGL
  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.clearColor(1.0, 1.0, 1.0, 1.0);

  // Load shaders and initialize attribute buffers
  var program = initShaders(gl, "vertex-shader", "fragment-shader");
  gl.useProgram(program);

  // Load the data into the GPU
  var bufferId = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
  gl.bufferData(gl.ARRAY_BUFFER, flatten(data.vertices), gl.STATIC_DRAW);

  // Associate out shader variables with our data buffer
  var aVertexPosition = gl.getAttribLocation(program, "aVertexPosition");
  gl.vertexAttribPointer(aVertexPosition, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(aVertexPosition);

  const colorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data.colors), gl.STATIC_DRAW);

  var aVertexColor = gl.getAttribLocation(program, "aVertexColor");
  gl.vertexAttribPointer(aVertexColor, 4, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(aVertexColor);

  render(data.vertices.length);
};

function render(numvertices) {
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.drawArrays(gl.LINES, 0, numvertices);
}

function completeBoard(stud) {
  const edges = [
    [0,1],
    [0,2],
    [0,4],
    [4,5],
    [5,1],
    [1,3],
    [4,6],
    [5,7],
    [2,3],
    [3,7],
    [2,6],
    [7,6]
  ];
  return edges.map((edge) => edge.map((position) => stud[position])).flat(1);
}

function addBoard(stud, color, data) {
  data.vertices = data.vertices.concat(completeBoard(stud))
  data.colors = data.colors.concat(colorsForBoard(color))
}

function createStud() {
  const unit_vertices = [
    [0, 0, 0],
    [0, 0, unitScale],
    [0, unitScale, 0],
    [0, unitScale, unitScale],
    [unitScale, 0, 0],
    [unitScale, 0, unitScale],
    [unitScale, unitScale, 0],
    [unitScale, unitScale, unitScale]
  ];
  return unit_vertices.map((vertex) =>
    [vertex[0] * .15, vertex[1] * 9.6, vertex[2] * .35]
  );
}

function colorsForBoard(color) {
   return [... Array(24)].map(() => color).flat(1)
}

function cut(vertices, length) {
  length = length * unitScale * 1.33333333333
  return vertices.map((vertex) =>
    [vertex[0], vertex[1] / 9.6 * length, vertex[2]]
  );
}

function rotate(vertices, angle) {
  angle = degreesToRadians(angle)
  return vertices.map((vertex) => [
      ((Math.cos(angle) * vertex[0]) - (Math.sin(angle) * vertex[1])),
      ((Math.sin(angle) * vertex[0]) + (Math.cos(angle) * vertex[1])),
      vertex[2]
    ]
  );
}

function rotateHeader(vertices) {
  angle = degreesToRadians(-90)
  return vertices.map((vertex) => [
      ((Math.cos(angle) * vertex[0]) + (Math.sin(angle) * vertex[2])),
      vertex[1],
      ((-1 * Math.sin(angle) * vertex[0]) + (Math.cos(angle) * vertex[2]))
    ]
  );
}

function degreesToRadians(angle) {
  return angle * Math.PI / 180;
}

function translate(vertices, x, y, z) {
  return vertices.map((vertex) =>
    [vertex[0] + (x/133.333333333), vertex[1] + (y/133.333333333), vertex[2] + (z/133.333333333)]
  );
}
