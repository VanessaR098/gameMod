function Human(){
  this.pos = createVector(width/2, height/2);
  this.r = 20;
  this.render = function(){
    push();
    rect(mouseX-10, mouseY, 20, 30);
    ellipse(mouseX, mouseY, this.r, this.r);
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
