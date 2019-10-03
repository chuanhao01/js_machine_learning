const canvas = {
    x: 600, 
    y: 600
};

function setup(){
    createCanvas(canvas.x, canvas.y);
    background(0);
}

function draw(){
    // if(mouseIsPressed){
    //     fill(150, 150, 0);
    //     fill('red');
    //     circle(mouseX, mouseY, 10);
    // }
    noStroke();
    fill(255, 0, 0, [0.2]);
    circle(mouseX, mouseY, 30);
}

function mousePressed(){
    fill(150, 150, 0, 0.5);
    circle(mouseX, mouseY, 10);
}