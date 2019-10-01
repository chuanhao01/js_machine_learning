function setup(){
    createCanvas(500, 600);
    Game.init();
}

function draw(){
    background(0);
    Game.updateFrame(); 
}

function keyPressed(){
    if(key === ' '){
        Bird.birdJump();
    }
}