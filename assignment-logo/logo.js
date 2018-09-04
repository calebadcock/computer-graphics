var gl;
var points;

window.onload = function init() {
    var canvas = document.getElementById("gl-canvas");

    gl = WebGLUtils.setupWebGL(canvas);

    if (!gl) {
        alert("WebGL isn't available");
    }

    // Connected
    /*
    var vertices = [
        vec2(0.5, 0.5),
        vec2(1, 0.75),
        vec2(0.5, 1),

        vec2(0.5, 0.5),
        vec2(0, 0.75),
        vec2(0.5, 1),

        vec2(0, 0.25),
        vec2(0, .75),
        vec2(0.5, 0.5),

        vec2(0, .25),
        vec2(0.5, 0),
        vec2(0.5, 0.5),

        vec2(.5, 0),
        vec2(0, .25),
        vec2(0, -0.25),

        vec2(0, .25),
        vec2(0, -.25),
        vec2(-0.5, 0),
    ];
    */


    // Disconnected
    var vertices = [
        vec2(0.51, 0.5),
        vec2(1, 0.75),
        vec2(0.51, 1),

        vec2(0.5, 0.5),
        vec2(0, 0.75),
        vec2(0.5, 1),

        vec2(0, 0.25),
        vec2(0, .74),
        vec2(0.5, 0.49),

        vec2(0, .24),
        vec2(0.5, 0),
        vec2(0.5, 0.48),

        vec2(.5, -0.01),
        vec2(0, .23),
        vec2(0, -0.25),

        vec2(-.01, .23),
        vec2(-.01, -.25),
        vec2(-0.5, 0),
    ];

    // Configure WebGL
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);

    // Load shaders and initialize attribute buffers
    var program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);

    // Load the data into the GPU
    var bufferId = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW);

    // Associate out shader variables with our data buffer
    var aVertexPosition = gl.getAttribLocation(program, "aVertexPosition");
    gl.vertexAttribPointer(aVertexPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aVertexPosition);

    const colors = [
      0.051, 0.278, 0.631, 1.0,  // blue
      0.051, 0.278, 0.631, 1.0,  // blue
      0.051, 0.278, 0.631, 1.0,  // blue

      0.051, 0.278, 0.631, 1.0,  // blue
      0.051, 0.278, 0.631, 1.0,  // blue
      0.051, 0.278, 0.631, 1.0,  // blue

      0.051, 0.278, 0.631, 1.0,  // blue
      0.051, 0.278, 0.631, 1.0,  // blue
      0.051, 0.278, 0.631, 1.0,  // blue

      0.051, 0.278, 0.631, 1.0,  // blue
      0.051, 0.278, 0.631, 1.0,  // blue
      0.051, 0.278, 0.631, 1.0,  // blue

      0.0,  0.514,  0.557,  1.0,    // turquoise
      0.0,  0.514,  0.557,  1.0,    // turquoise
      0.0,  0.514,  0.557,  1.0,    // turquoise

      0.0,  0.514,  0.557,  1.0,    // turquoise
      0.0,  0.514,  0.557,  1.0,    // turquoise
      0.0,  0.514,  0.557,  1.0,    // turquoise
    ];

    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

    var aVertexColor = gl.getAttribLocation(program, "aVertexColor");
    gl.vertexAttribPointer(aVertexColor, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aVertexColor);

    render();
};

function render() {
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.TRIANGLES, 0, 18);
}
