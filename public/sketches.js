class Toucan {
    constructor (x, y, s) {
        this.pos = createVector(x*scaleX, y*scaleY);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0.4);
        this.s = s;
        this.move = false;
        this.movePos = createVector(0,0);

        this.angle = 0;
    }

    moveTo(pos) {
        this.movePos.set(pos.x, pos.y-this.s/2);
        this.move = true;
    }

    update() {
        this.vel.add(this.acc);

        if(this.move) {
            let d = p5.Vector.sub(this.movePos, this.pos);
            var distance = sqrt(d.dot(d));
            if (distance > 30) {
                var old = createVector(this.movePos.x, this.movePos.y);
                this.movePos.add(createVector(0, 0.8* distance * cos(0.0872665*2*frameCount)));
                d = p5.Vector.sub(this.movePos, this.pos);
                this.movePos.set(old);
            } else if (distance < 10) {
                this.move = false;
            }
            
            this.pos.add(p5.Vector.div(d, 50));
            this.angle = map(d.y/50, 0, height/50, 0, 1)
        }
        // this.pos.add(this.vel);
    }

    click() {
        this.vel.set(0, -8);
        // console.log(mouseX, mouseY);
    }

    display() {
    
        // this.moveTo(createVector(847, 268));
        var w = this.s * toucanBody.width/toucanBody.height;
        var h = this.s;
        if (this.move) {
            push();
                translate(this.pos.x+60-w/2, this.pos.y + this.s/2+10-h/2);
                rotate(0.872665/2 * sin(0.0872665*2*frameCount) + 0.4 - this.angle);
                image(leftWing, -20, -this.s, this.s * rightWing.width/rightWing.height, this.s);
            pop();

            push();
                translate(this.pos.x, this.pos.y);
                rotate(-this.angle);
                image(toucanBody, -w/2, -h/2, w, h);
            pop();
            let scale = toucanBody.width/rightWing.width;

            push();
                translate(this.pos.x+70-w/2, this.pos.y + this.s/2+10-h/2);
                rotate(0.872665/2 * sin(0.0872665*2*frameCount) + 0.9 - this.angle);
                image(rightWing, -20, -this.s, this.s * rightWing.width/rightWing.height, this.s);
            
            pop();
        } else {
            var w = this.s * toucanRest.width/toucanRest.height;
            var sc = 1.4;
            var h = this.s;

            push();
            translate(this.pos.x-w/2, this.pos.y-h/2)
            scale(-1, 1);
            image(toucanRest, -w, 0, w*sc, h*sc);
            pop();
        }
    }
}
  
var toucan, toucanBody, leftWing, rightWing, scaleX, scaleY, prevWidth, prevHeight;
function setup() {
    var height = Math.max(document.body.scrollHeight, document.body.offsetHeight, window.innerHeight);
    canvas = createCanvas(windowWidth, height); 

    canvas.position(0, 0);
    canvas.style('z-index', '-1');

    height = Math.max(document.body.scrollHeight, document.body.offsetHeight, window.innerHeight);
    resizeCanvas(windowWidth, height); 

    toucanBody = loadImage('toucanBody.png');
    leftWing = loadImage('leftWing.png');
    rightWing = loadImage('rightWing.png');
    toucanRest = loadImage('toucanRest.png');

    scaleX = width/1280;
    // scaleY = height/653;
    scaleY = 1;

    prevWidth = width;
    prevHeight = height;

    toucan = new Toucan(1280-220, 90, 80);
}

function windowResized() {
    var height = Math.max(document.body.scrollHeight, document.body.offsetHeight, window.innerHeight);

    resizeCanvas(windowWidth, height); 
    toucan.pos.set(toucan.pos.x*width/prevWidth, toucan.pos.y*width/prevWidth);
    toucan.movePos.set(toucan.movePos.x*width/prevWidth, toucan.movePos.y*width/prevWidth)
    // toucan.s = 50 * width/1280;
    prevWidth = width;
    prevHeight = height;

    scaleX = width/1280;
    scaleY = height/653;
    scaleY = width/prevWidth;
}

function clickOnChat() {
    const r = document.getElementById("searchButton").getBoundingClientRect();
    // print(r.left)
    toucan.moveTo(createVector(r.left+window.scrollX, r.top+window.scrollY));
}
var l = window.location.href.split("/")[3].split(".")[0];
function draw() {
    background(144, 238, 144);

    if (Math.max(document.body.scrollHeight, document.body.offsetHeight, window.innerHeight) != height) {
        windowResized();
    }

    if (l == "" || l == "index") { 
        toucan.update();
        toucan.display();
    }
}

function keyPressed() {
    toucan.click();
}