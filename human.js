function Human(){
  this.pos = createVector(width/2, height/2);
  this.r = 20;
  this.render = function(){
    fill(255, 235, 205);
    noStroke();
    ellipse(mouseX, mouseY, this.r-5, this.r-5);

    push();
    //noStroke()
    fill(95, 158, 160);
    rect(mouseX-13.7, mouseY+12, 25, 17, 18, 10, 2, 2);
    rect(mouseX-9, mouseY+12.5, 15, 30);
    //quad(mouseX-10, mouseY+17, mouseX+10, mouseY+17, mouseX+15, mouseY+30, mouseX-15, mouseY+30);

    pop();

  }

  this.hits = function(virus){
    var d = dist(mouseX, mouseY, virus.pos.x, virus.pos.y);
    if (d < this.r + virus.r){
      return true;
    }
    return false;
    }


  }
