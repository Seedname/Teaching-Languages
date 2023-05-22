// var gradient = document.getElementById('gradient');

// function updateGradient(event) {
//   var x = event.clientX / window.innerWidth;
//   var y = event.clientY / window.innerHeight;
//   gradient.style.background = "rgb(" + x*255 + ", " + y*255 + ", " + x*255 + ")";
// //   var angle = Math.atan2(y - 0.5, x - 0.5);
// //   var distance = Math.sqrt(Math.pow(x - 0.5, 2) + Math.pow(y - 0.5, 2));

// //   var color1 = getColor(angle + Math.PI / 2, distance);
// //   var color2 = getColor(angle + Math.PI, distance);
// //   var color3 = getColor(angle + (3 * Math.PI) / 2, distance);
// //   var color4 = getColor(angle, distance);

// //   gradient.style.background = "linear-gradient(" + angle + "rad, " + color1 + ", " + color2 + ", " + color3 + ", " + color4 + ")";
// }

// document.addEventListener('mousemove', function(event) {
//   requestAnimationFrame(function() {
//     updateGradient(event);
//   });
// });

// function getColor(angle, distance) {
//   var red = Math.round(150 + 100 * Math.cos(angle) * distance);
//   var green = Math.round(150 + 100 * Math.cos(angle + (2 * Math.PI) / 3) * distance);
//   var blue = Math.round(150 + 100 * Math.cos(angle + (4 * Math.PI) / 3) * distance);

//   return "rgb(" + red + ", " + green + ", " + blue + ")";
// }


var gradient = document.getElementById('gradient');

var x = 0;
var y = 0;
document.addEventListener('mousemove', function(event) {
   x = event.clientX;
   y = event.clientY;
});


function updateGradient() {
//   var x = Math.random(); // Random X value between 0 and 1
//   var y = Math.random(); // Random Y value between 0 and 1
    var x2 = x / window.innerWidth;
    var y2 = y / window.innerHeight;

    gradient.style.background = "rgb(" + 255*x2 + ", " + 255*y2 + ", " + 255*x2 + ")";
//   var angle = Math.atan2(y - 0.5, x - 0.5);
//   var distance = Math.sqrt(Math.pow(x - 0.5, 2) + Math.pow(y - 0.5, 2));

//   var color1 = getColor(angle + Math.PI / 2, distance);
//   var color2 = getColor(angle + Math.PI, distance);
//   var color3 = getColor(angle + (3 * Math.PI) / 2, distance);
//   var color4 = getColor(angle, distance);

//   gradient.style.background = "linear-gradient(" + angle + "rad, " + color1 + ", " + color2 + ", " + color3 + ", " + color4 + ")";

  requestAnimationFrame(updateGradient);
}

function getColor(angle, distance) {
  var red = Math.round(150 + 100 * Math.cos(angle) * distance);
  var green = Math.round(150 + 100 * Math.cos(angle + (2 * Math.PI) / 3) * distance);
  var blue = Math.round(150 + 100 * Math.cos(angle + (4 * Math.PI) / 3) * distance);

  return "rgb(" + red + ", " + green + ", " + blue + ")";
}

updateGradient();
