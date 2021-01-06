export default function Sketch1 (p) {  
    p.setup = function () {
      p.createCanvas(600, 400, p.WEBGL);
    };
  
    p.draw = function () {
      p.background(100);
      p.normalMaterial();
      p.noStroke();
      p.push();
      p.rotateY(50);
      p.box(100);
      p.pop();
    };
  };