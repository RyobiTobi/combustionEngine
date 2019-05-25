class cylinder {

    constructor(x, y, cylinderRadius, cylinderHeight, crankshaftRadius, rotationAngle, pistonOffset, direction) {
      this.initialPosition = createVector(x, y);
      this.angle = random(360);
      this.cylinderRadius = cylinderRadius;
      this.cylinderHeight = cylinderHeight;
      this.cylinderCapacity = this.radius * this.cylinderRadius * 3.1415 * this.cylinderHeight;
      this.crankshaftRadius = crankshaftRadius;
      this.piston;
      this.pistonOffset = pistonOffset;
      this.pistonThickness = 5;
      this.initalCrankshaftCenter;

      if(direction = "left"){
        this.direction = 1
      } else if (direction = "right") {
        this.direction = -1
      };
  
      this.crankShaftCenter;
      this.angle = 0;
      this.currentElongation;
      this.angleVelocity = 1;
      this.timesPerFrame = this.clocksPerSecond / 240;
      this.rotationAngle = rotationAngle;
      this.randomOffset = random(90)
  
  
  
  
  
    };
  
  
    work_and_display() {

      push();
      translate(this.initialPosition.x, this.initialPosition.y);
      rotate(this.rotationAngle);
  
  
      this.piston = createVector(0 + this.cylinderHeight / 2 + this.crankshaftRadius, 0);
      this.pistonCenter = this.piston.x;
      this.initalCrankshaftCenter = createVector(0 - 0.5 * this.cylinderHeight, 0);
      this.crankShaftCenter = createVector(0 - 0.5 * this.cylinderHeight, 0);
      this.pistonCenter = this.piston.x;
  
  
      this.clocksPerSecond = this.rpm / 60 * 2;
      // this.angleVelocity = mouseX / 4;
  
      this.crankShaftCenter.x = sin((this.angle + 180 + this.pistonOffset + this.randomOffset)* this.direction) * this.crankshaftRadius / 2 + 0;
      this.crankShaftCenter.y = cos((this.angle + 180 + this.pistonOffset + this.randomOffset)* this.direction) * this.crankshaftRadius / 2 + 0;
      this.currentElongation = map(sin(-this.angle - this.pistonOffset - this.randomOffset), -1, 1, -this.cylinderHeight / 2 + this.pistonThickness / 2, this.cylinderHeight / 2 - this.pistonThickness / 2);
      this.angle += this.angleVelocity;
      this.rpm = (this.angleVelocity / 360) * 60 * 60;
  
  
  
      this.piston.x = this.pistonCenter + this.currentElongation;
  
  
      fill("white");
      strokeWeight(1);
      rect(0 + this.cylinderHeight / 2 + this.crankshaftRadius, 0, this.cylinderHeight, this.cylinderRadius); //Zylinder
      ellipse(0, 0, this.crankshaftRadius); //Kurbelwelle
      push();
      translate(0, 0);
      rotate(-this.angle - this.pistonOffset);
      line(0, this.crankshaftRadius / 2, 0, -this.crankshaftRadius / 2);
      pop();
      strokeWeight(4);
      line(this.crankShaftCenter.x, this.crankShaftCenter.y, this.piston.x, this.piston.y); //Pleuelstange
      strokeWeight(1);
      fill("grey");
      rect(this.piston.x, this.piston.y, this.pistonThickness, this.cylinderRadius) //Kolben
      ellipse(this.crankShaftCenter.x, this.crankShaftCenter.y, 5);
  
      pop();
    };
  
  
  
  
  
  
  
  
  };