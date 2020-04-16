function Virus(pos, r) { //or pos = createVector(random(width), random(height));
  this.r = random(10, 50);
  if (pos) {
    this.pos = pos.copy();
  } else {
    this.pos = createVector(random(width), random(height));
  }

  if (r) {
    this.r = r * 0.5;
  } else {
    this.r = random(10, 50);
  }

  this.vel = p5.Vector.random2D();
  this.shk = 1;
  this.update = function() {
    this.pos.add(this.vel);
  }

  this.render = function() {
    push();
    noFill();
    stroke(255, 0, 0);
    translate(this.pos.x, this.pos.y);

    this.shk += random(-3, 3);

    if (this.shk > 3 || this.shk < -3) {
      this.shk = 0;
    }
    ellipse(0, this.shk, this.r * 2);
    pop();
  }




  this.breakup = function() {
    var newV = [];
    for (let i = 0; i < 5; i++) {
      newV[i] = new Virus(this.pos, this.r - 10);
    }
    return newV;
  }

  this.edges = function() {
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    } else if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    } else if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    } else if (this.pos.y < -this.r) {
      this.pos.y = height + this.r;
    }
  }
}
