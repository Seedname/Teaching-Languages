var canvas;

class Shape {
  constructor(x, y, z, tx, ty, tz, shape) {
    this.pivot = createVector(x, y, z);
    this.translate = new createVector(tx, ty, tz);
    this.shape = shape;

    for (let i = 0; i < this.shape.length; i++) {
      this.shape[i][0] -= width/2;
      this.shape[i][1] -= height/2;
      
      this.shape[i][0] += this.pivot.x;
      this.shape[i][1] += this.pivot.y;
      this.shape[i][2] += this.pivot.z;
    }
  }

  display() {
      push();
          translate(this.translate.x, this.translate.y);
          beginShape();
          for(var i = 0; i < this.shape.length; i++) {
              vertex(this.shape[i][0], this.shape[i][1]);
          }
          endShape();
      pop();
  }
  
  rotateX(angle) {
      for(var i = 0; i < this.shape.length; i++){
          var current = [this.shape[i][1], this.shape[i][2]];
          this.shape[i][1] = current[0] * cos(angle) - current[1] * sin(angle);
          this.shape[i][2] = current[1] * cos(angle) + current[0] * sin(angle);
      }
  }
  
  rotateY(angle) {
      for(var i = 0; i < this.shape.length; i++){
          var current = [this.shape[i][0], this.shape[i][1]];
          this.shape[i][0] = current[0] * cos(angle) - current[1] * sin(angle);
          this.shape[i][1] = current[1] * cos(angle) + current[0] * sin(angle);
      }
  };
  
  rotateZ(angle) {
      for(var i = 0; i < this.shape.length; i++){
          var current = [this.shape[i][0], this.shape[i][2]];
          this.shape[i][0] = current[0] * cos(angle) - current[1] * sin(angle);
          this.shape[i][2] = current[1] * cos(angle) + current[0] * sin(angle);
      }
  };
}

function radians(angle) {
  return angle * 180 / PI;
}

var vertices = [];
var s = false;
var angle = 0;


function keyPressed() {
  s = new Shape(0, 0, 0, width/2, height/2, 0, vertices);
}
function mouseDragged() {
  vertices.push([mouseX, mouseY, 0]);
}

function windowResized() {
  var height = Math.max(document.body.scrollHeight, document.body.offsetHeight, window.innerHeight);
  resizeCanvas(windowWidth, height); 
}

var toucan;
function setup() {
  var height = Math.max(document.body.scrollHeight, document.body.offsetHeight, window.innerHeight);
  canvas = createCanvas(windowWidth, height); 
  
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

  height = Math.max(document.body.scrollHeight, document.body.offsetHeight, window.innerHeight);
  resizeCanvas(windowWidth, height); 

  toucan = loadImage('toucan.png');
}

const num = 100;
var x = 0;
var y = 0;
var vx = 10;
var vy = 0;
var angle = 0;

function draw() {
  vy += 0.5;
  // vx += 0.1;
  if (y + 50 > height) {
    y = height-50;
    vy *= -1;
  } else if(y - 50 < 0) {
    y = 50;
    vy *= -1;
  } else {
    y += vy;
  }

  if (x + 50 > width) {
    x = width-50;
    vx *= -1;
  } else if(x - 50 < 0) {
    x = 50;
    vx *= -1;
  } else {
    x += vx;
  }

  
  angle += vx/5;

  // angle = 5*sin(5*frameCount);
  // background(255);
  // fill(0, 0, 0);
  // stroke(0);
  // if (s) {
  //     s.display();
  //     s.rotateX(radians(10));
  //     s.rotateZ(radians(angle));
  //     // s.rotateY(1);
  // } else {
  //     for(var i = 0; i < vertices.length-1; i++) {
  //         line(vertices[i][0], vertices[i][1], vertices[i+1][0], vertices[i+1][1]);
  //     }
  // }
  // let x = mouseX / windowWidth;
  // let y = mouseY / windowHeight;

  // const xDist = (x - 0.5) * (x - 0.5);
  // const yDist = (y - 0.5) * (y - 0.5);
  // const dist = Math.sqrt(xDist + yDist);
  
  // let used = max(width, height);
  canvas.background(color(144, 238, 144, 255));

  push();
  translate(x, y);
  // ellipse(0, 0, 100, 100);
  rotate(radians(angle));
  image(toucan, -toucan.width/2, -toucan.height/2);
  pop();
  // noStroke();

  // for (let i = num; i >= 0; i--) {
  //   let c = lerpColor(color(144, 238, 144, 255), color(230,230,250, 255), i/num - dist);
  //   fill(c); 
  //   ellipse(width/2, height/2, i*used/num*1.414, i*used/num*1.414);
  // }
}
