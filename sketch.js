var human;
var viruses = [];


function setup() {
  noCursor();
  createCanvas(windowWidth, windowHeight);
  human = new Human();
  for (var i = 0; i < 10; i++) {
    viruses.push(new Virus());
  }
}

function draw(){
  background(0);

  for (var i = 0; i < viruses.length; i++) {
    if(human.hits(viruses[i])){
      console.log('oops')
      viruses[i].breakup();
    }

    for (var j = viruses.length-1; j >= 0; j--) {
      if(human.hits(viruses[j])){
        if(viruses[j].r > 12){
          var newViruses = viruses[j].breakup();
          viruses = viruses.concat(newViruses);
        }
        viruses.splice(j, 1);
        //break;
      }
    }


    viruses[i].render();
    viruses[i].update();
    viruses[i].edges();

  }
  human.render();
}
