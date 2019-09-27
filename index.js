function curveEqn(x1){
   y = ((1/25) * (x1 - 250) ** 2) + 50
   return y
}

let points = []
let all_x = [50, 150, 350, 450]
for(let i = 0; i<4; i++){
   points.push({
      x: all_x[i] ,
      y: curveEqn(all_x[i])
   });
}

function setup(){
   createCanvas(500, 500);
   background(0);
}

function draw(){
   fill(255);
   circle(75, 50, 50)
   fill(255);
   circle(425, 50, 50);
   stroke(255)
   curve(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y, points[3].x, points[3].y);
}