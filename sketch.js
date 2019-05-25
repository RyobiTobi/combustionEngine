let cylinders = [];
let engineSorts = ["v6", "v8", "v10", "r4", "w9", "star"];
let currentEngineNumber = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {

  background(155);


  for (let i = 0; i < cylinders.length; i++) {

    cylinders[i].work_and_display();

  };

  textSize(20)
  text(engineSorts[currentEngineNumber], width - 40, 20);
};

function mousePressed() {
  createEngine(mouseX, mouseY, engineSorts[currentEngineNumber]);
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    if (currentEngineNumber > engineSorts.length - 2) {
      currentEngineNumber = 0;
    } else {
      currentEngineNumber++;
    }

  } else if (keyCode === LEFT_ARROW) {
    if (currentEngineNumber < 1) {
      currentEngineNumber = engineSorts.length - 1;
    } else {
      currentEngineNumber--;
    }
  } else if (keyCode === UP_ARROW) {
    
      
      for (let i = 0; i < cylinders.length; i++){
        cylinders[i].angleVelocity += 5
      }

  } else if (keyCode === DOWN_ARROW) {
      for (let i = 0; i < cylinders.length; i++){
        cylinders[i].angleVelocity -= 5
      }
    }
  
  };


function createEngine(x, y, engineType) {
  switch (engineType) {
    case "v6":

      cylinders.push(new cylinder(x, y - 20, 20, 50, 33, -45, 30, "left"));
      cylinders.push(new cylinder(x, y, 20, 50, 33, -135, 60, "right"));

      cylinders.push(new cylinder(x, y + 20, 20, 50, 33, -45, 90, "left"));
      cylinders.push(new cylinder(x, y + 40, 20, 50, 33, -135, 120, "right"));

      cylinders.push(new cylinder(x, y + 60, 20, 50, 33, -45, 150, "left"));
      cylinders.push(new cylinder(x, y + 80, 20, 50, 33, -135, 180, "right"));
      break;

    case "v8":

      cylinders.push(new cylinder(x, y - 60, 20, 50, 33, -45, 47.5 * 1, "left"));
      cylinders.push(new cylinder(x, y - 40, 20, 50, 33, -135, 47.5 * 2, "right"));

      cylinders.push(new cylinder(x, y - 20, 20, 50, 33, -45, 47.5 * 3, "left"));
      cylinders.push(new cylinder(x, y - 0, 20, 50, 33, -135, 47.5 * 4, "right"));

      cylinders.push(new cylinder(x, y + 20, 20, 50, 33, -45, 47.5 * 5, "left"));
      cylinders.push(new cylinder(x, y + 40, 20, 50, 33, -135, 47.5 * 6, "right"));

      cylinders.push(new cylinder(x, y + 60, 20, 50, 33, -45, 47.5 * 7, "left"));
      cylinders.push(new cylinder(x, y + 80, 20, 50, 33, -135, 47.5 * 8, "right"));
      break;

    case "v10":

      cylinders.push(new cylinder(x, y - 100, 20, 50, 33, -45, 36 * 1, "left"));
      cylinders.push(new cylinder(x, y - 80, 20, 50, 33, -135, 36 * 2, "right"));

      cylinders.push(new cylinder(x, y - 60, 20, 50, 33, -45, 36 * 3, "left"));
      cylinders.push(new cylinder(x, y - 40, 20, 50, 33, -135, 36 * 4, "right"));

      cylinders.push(new cylinder(x, y - 20, 20, 50, 33, -45, 36 * 5, "left"));
      cylinders.push(new cylinder(x, y + 0, 20, 50, 33, -135, 36 * 6, "right"));

      cylinders.push(new cylinder(x, y + 20, 20, 50, 33, -45, 36 * 7, "left"));
      cylinders.push(new cylinder(x, y + 40, 20, 50, 33, -135, 36 * 8, "right"));

      cylinders.push(new cylinder(x, y + 60, 20, 50, 33, -45, 36 * 9, "left"));
      cylinders.push(new cylinder(x, y + 80, 20, 50, 33, -135, 36 * 10, "right"));
      break;

    case "r4":

      cylinders.push(new cylinder(x - 30, y, 20, 50, 33, -90, 90, "right"));

      cylinders.push(new cylinder(x - 0, y, 20, 50, 33, -90, 180, "right"));

      cylinders.push(new cylinder(x + 30, y, 20, 50, 33, -90, 270, "right"));

      cylinders.push(new cylinder(x + 60, y, 20, 50, 33, -90, 360, "right"));

      break;

    case "w9":

      cylinders.push(new cylinder(x, y - 40, 20, 50, 33, -90, 120, "right"));
      cylinders.push(new cylinder(x, y - 20, 20, 50, 33, -45, 60, "left")); //V teil
      cylinders.push(new cylinder(x, y, 20, 50, 33, -135, 120, "right")); //V teil


      cylinders.push(new cylinder(x, y + 20, 20, 50, 33, -90, 240, "right"));
      cylinders.push(new cylinder(x, y + 40, 20, 50, 33, -45, 180, "left")); //V teil
      cylinders.push(new cylinder(x, y + 60, 20, 50, 33, -135, 240, "right")); //V teil

      cylinders.push(new cylinder(x, y + 80, 20, 50, 33, -90, 360, "right"));
      cylinders.push(new cylinder(x, y + 100, 20, 50, 33, -45, 300, "left")); //V teil
      cylinders.push(new cylinder(x, y + 120, 20, 50, 33, -135, 360, "right")); //V teil

      break;

    case "star":

      cylinders.push(new cylinder(x, y, 20, 50, 33, -72 * 1, 72 * 1, "right"));
      cylinders.push(new cylinder(x, y, 20, 50, 33, -72 * 2, 72 * 2, "right")); 
      cylinders.push(new cylinder(x, y, 20, 50, 33, -72 * 3, 72 * 3, "right")); 
      cylinders.push(new cylinder(x, y, 20, 50, 33, -72 * 4, 72 * 4, "right"));
      cylinders.push(new cylinder(x, y, 20, 50, 33, -72 * 5, 72 * 5, "right")); 

      break;

  };
};
//x, y, cylinderRadius, cylinderHeight, crankshaftRadius, rotationAngle, pistonOffset































// let engines = [];
// let explosion;
// function preload() {
//   soundFormats('mp3', 'ogg');
//   explosion = loadSound('explosion.mp3');
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   frameRate(60);
//   angleMode(DEGREES);
//   rectMode(CENTER);
// }

// function draw() {

//   background(155);

//   if (keyIsPressed) {
//     noLoop();
//   }

//   for (let i = 0; i < engines.length; i++) {
//     engines[i].work();
//     engines[i].display();

//   };

// };


// function mousePressed() {

//   engines.push(new engine(mouseX, mouseY, 25, 40, 33));

// };




// ////////////////////////////////////////////////
// class engine {

//   constructor(x, y, cylinderRadius, cylinderHeight, crankshaftRadius, engineRotation) {
//     this.engineRotation = engineRotation;
//     this.initialPosition = createVector(x, y);
//     this.angle = random(360);
//     this.cylinderRadius = cylinderRadius;
//     this.cylinderHeight = cylinderHeight;
//     this.cylinderCapacity = this.radius * this.cylinderRadius * 3.1415 * this.cylinderHeight;
//     this.crankshaftRadius = crankshaftRadius;
//     this.piston = createVector(this.initialPosition.x + this.cylinderHeight / 2 + this.crankshaftRadius, this.initialPosition.y);
//     this.pistonCenter = this.piston.x;
//     this.pistonThickness = 5;
//     this.initalCrankshaftCenter = createVector(this.initialPosition.x - 0.5 * this.cylinderHeight, this.initialPosition.y);


//     this.crankShaftCenter = createVector(this.initialPosition.x - 0.5 * this.cylinderHeight, this.initialPosition.y);
//     this.angle = 0;
//     this.currentElongation;
//     this.angleVelocity = 1;
//     this.timesPerFrame = this.clocksPerSecond / 240;







//   };


//   work() {

//     push();

//     translate(this.initialPosition.x, this.initialPosition.y);
//       this.clocksPerSecond = this.rpm / 60 * 2;
//       this.angleVelocity = mouseX / 4;

//       this.crankShaftCenter.x = sin(this.angle + 180) * this.crankshaftRadius / 2 + this.initialPosition.x;
//       this.crankShaftCenter.y = cos(this.angle + 180) * this.crankshaftRadius / 2 + this.initialPosition.y;
//       this.currentElongation = map(sin(-this.angle), -1, 1, -this.cylinderHeight / 2 + this.pistonThickness / 2, this.cylinderHeight / 2 - this.pistonThickness / 2);
//       this.angle += this.angleVelocity;
//       this.rpm = (this.angleVelocity / 360) * 60 * 60;



//       this.piston.x = this.pistonCenter + this.currentElongation;


//       fill("white");
//       strokeWeight(1);
//       rect(this.initialPosition.x + this.cylinderHeight / 2 + this.crankshaftRadius, this.initialPosition.y, this.cylinderHeight, this.cylinderRadius); //Zylinder
//       ellipse(this.initialPosition.x, this.initialPosition.y, this.crankshaftRadius); //Kurbelwelle
//       push();
//       translate(this.initialPosition.x, this.initialPosition.y);
//       rotate(-this.angle);
//       line(0, this.crankshaftRadius / 2, 0, -this.crankshaftRadius / 2);
//       pop();
//       strokeWeight(4);
//       line(this.crankShaftCenter.x, this.crankShaftCenter.y, this.piston.x, this.piston.y); //Pleuelstange
//       strokeWeight(1);
//       fill("grey");
//       rect(this.piston.x, this.piston.y, this.pistonThickness, this.cylinderRadius) //Kolben
//       ellipse(this.crankShaftCenter.x, this.crankShaftCenter.y, 5);

//     pop();
//   };




//   display() {

//   };



// };
