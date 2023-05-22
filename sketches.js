// In this script tag, you can define the setup and draw functions for each canvas
new p5(function(sketch1) {
  sketch1.setup = function() {
    // Sketch 1
    let canvas1 = sketch1.createCanvas(document.body.clientWidth, window.innerHeight); 
    canvas1.parent('canvas1'); // Attach the canvas to the 'canvas1' div element
    canvas1.style('background-color', 'rgba(0, 0, 0, 0)');
  }

  let x = 0;
  sketch1.draw = function() {
    x += 1;
    // sketch1.background(220);
    sketch1.fill(0);
    sketch1.rect(sketch1.mouseX, sketch1.mouseY, 50, 50);
    // Your sketch 1 code goes here
  }
}, 'canvas1');

new p5(function(sketch2) {
  sketch2.setup = function() {
    // Sketch 2
    let canvas2 = sketch2.createCanvas(document.body.clientWidth, window.innerHeight); 
    canvas2.parent('canvas2'); // Attach the canvas to the 'canvas2' div element
    canvas2.style('background-color', 'rgba(0, 0, 0, 0)');
  }

  // let x = 0;
  sketch2.draw = function() {
    // x += 1;
    // sketch2.background(200);
    // sketch2.fill(0);
    // sketch2.rect(0, 0, 50, 50);
    // Your sketch 2 code goes here
  }
}, 'canvas2');