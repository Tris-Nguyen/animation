// HTML Canvas

// Canvas Setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 500;

// Animation variables
let cloud1 = 60;
let cloud2 = 240;
let cloud3 = 440;
let sun = 60;

let head = 375;
let torso = 375;

let arm1A = 375;
let arm1B = 350;
let arm2A = 375;
let arm2B = 400;

let leg1A = 375;
let leg1B = 360;
let leg2A = 375;
let leg2B = 390;

requestAnimationFrame(draw);

function draw() {
  // Sky
  ctx.fillStyle = "lightskyblue";
  ctx.fillRect(0, 0, 600, 400);

  // Sun
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(75, sun, 25, 0, 2 * Math.PI);
  ctx.fill();

  // Cloud images
  let cloud = document.getElementById("cloud-img");
  ctx.drawImage(cloud, cloud1, 40, 100, 60);
  ctx.drawImage(cloud, cloud2, 70, 130, 60);
  ctx.drawImage(cloud, cloud3, 20, 120, 70);

  // Grass
  ctx.fillStyle = "green";
  ctx.fillRect(0, 400, 600, 200);

  // Tree image
  let tree = document.getElementById("tree-img");
  ctx.drawImage(tree, 230, 230, 140, 180);

  // House - square
  ctx.fillStyle = "beige";
  ctx.fillRect(50, 200, 240, 215);

  // House - triangle
  ctx.fillStyle = "beige";
  ctx.beginPath();
  ctx.moveTo(50, 200);
  ctx.lineTo(170, 120);
  ctx.lineTo(180, 120);
  ctx.lineTo(290, 200);
  ctx.fill();

  // Roof thick line
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.moveTo(40, 200);
  ctx.lineTo(175, 120);
  ctx.lineTo(300, 200);
  ctx.stroke();

  // Door
  ctx.fillStyle = "maroon";
  ctx.fillRect(133, 300, 75, 115);

  // Door knob
  ctx.fillStyle = "gold";
  ctx.beginPath();
  ctx.arc(195, 370, 7, 0, 2 * Math.PI);
  ctx.fill();

  // Window 1
  ctx.fillStyle = "black";
  ctx.fillRect(55, 380, 65, 5);

  ctx.fillStyle = "black";
  ctx.fillRect(55, 250, 65, 5);

  ctx.fillStyle = "black";
  ctx.fillRect(55, 250, 5, 130);

  ctx.fillStyle = "black";
  ctx.fillRect(115, 250, 5, 130);

  // Glass
  ctx.fillStyle = "lightsteelblue";
  ctx.fillRect(60, 255, 55, 125);

  // Thinner lines on window
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(87, 250); // start
  ctx.lineTo(87, 380); // end
  ctx.stroke();

  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(55, 340); // start
  ctx.lineTo(120, 340); // end
  ctx.stroke();

  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(55, 300); // start
  ctx.lineTo(120, 300); // end
  ctx.stroke();

  // Window 2
  ctx.fillStyle = "black";
  ctx.fillRect(220, 380, 65, 5);

  ctx.fillStyle = "black";
  ctx.fillRect(220, 250, 65, 5);

  ctx.fillStyle = "black";
  ctx.fillRect(220, 250, 5, 130);

  ctx.fillStyle = "black";
  ctx.fillRect(280, 250, 5, 130);

  // Glass
  ctx.fillStyle = "lightsteelblue";
  ctx.fillRect(225, 255, 55, 125);

  // Thinner lines on window
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(252, 250); // start
  ctx.lineTo(252, 380); // end
  ctx.stroke();

  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(220, 340); // start
  ctx.lineTo(280, 340); // end
  ctx.stroke();

  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(220, 300); // start
  ctx.lineTo(280, 300); // end
  ctx.stroke();

  // Tree image 2
  let tree2 = document.getElementById("tree-img");
  ctx.drawImage(tree2, 440, 240, 150, 240);

  // Stickman Head
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc(head, 350, 20, 0, 2 * Math.PI);
  ctx.stroke();

  // Stickman torso
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(torso, 370);
  ctx.lineTo(torso, 410);
  ctx.stroke();

  // Stickman arms
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(arm1A, 390);
  ctx.lineTo(arm1B, 380);
  ctx.stroke();

  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(arm2A, 390);
  ctx.lineTo(arm2B, 380);
  ctx.stroke();

  // Stickman legs
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(leg1A, 410);
  ctx.lineTo(leg1B, 440);
  ctx.stroke();

  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(leg2A, 410);
  ctx.lineTo(leg2B, 440);
  ctx.stroke();

  // Text
  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.fillText("An Outdoor Scene", 220, 40);

  // ANIMATIONS
  cloud1 = cloud1 + 0.75;
  cloud2 = cloud2 + 0.25;
  cloud3 -= 0.8;

  // Clouds
  if (cloud1 >= 600) {
    cloud1 = -100;
  }

  if (cloud2 >= 600) {
    cloud2 = -130;
  }

  if (cloud3 >= 600) {
    cloud3 = -120;
  }

  if (sun <= 500) {
    sun = sun + 1;
  } else if (sun > 500) {
    sun = -25;
  }

  // Animate stickman
  if (head <= 375 && head >= 160) {
    head = head - 0.5;
  }

  if (torso <= 375 && torso >= 160) {
    torso = torso - 0.5;
  }

  // Arms
  if (arm1A <= 375 && arm1B >= 135) {
    arm1A = arm1A - 0.5;
  }

  if (arm1B <= 350 && arm1B >= 135) {
    arm1B = arm1B - 0.5;
  }

  if (arm2A <= 375 && arm2A >= 160) {
    arm2A = arm2A - 0.5;
  }

  if (arm2B <= 400 && arm2B >= 185) {
    arm2B = arm2B - 0.5;
  }

  // Legs
  if (leg1A <= 375 && leg1B >= 145) {
    leg1A = leg1A - 0.5;
  }

  if (leg1B <= 360 && leg1B >= 145) {
    leg1B = leg1B - 0.5;
  }

  if (leg2A <= 375 && leg2A >= 160) {
    leg2A = leg2A - 0.5;
  }

  if (leg2B <= 400 && leg2B >= 175) {
    leg2B = leg2B - 0.5;
  }

  requestAnimationFrame(draw);
}
