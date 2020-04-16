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

function draw() {
  background(0);

  for (var i = viruses.length - 1; i >= 0; i--) {
    if (human.hits(viruses[i]) && viruses[i].r > 10) {
      console.log('oops')
      var newViruses = viruses[i].breakup();
      viruses.splice(i, 1);
      viruses = viruses.concat(newViruses);
      viruses.push(new Virus());
    }
    if (viruses[0]) {
     viruses[i].render();
     viruses[i].update();
     viruses[i].edges();
   }
  }
  human.render();
}
