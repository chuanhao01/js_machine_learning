var Bird = {
    init(gravity, lift, air_res){
        this.gravity = gravity;
        this.lift = lift;
        this.air_res = air_res;
        this.x = 50;
        this.y = height/2;
        this.rad = 50;
        this.vel = 0;
    },
    drawBird(){
        fill(255);
        ellipse(this.x, this.y, this.rad);
    },
    updateBird(){
        this.vel += this.gravity;
        this.vel *= this.air_res;
        this.y += this.vel;
    },
    checkCollision(){
        if(0 < this.y && this.y < height){
            return true;
        }
        else{
            return false;
        }
    },
    birdJump(){
        this.vel += this.lift;
    }
}

function Pipe(gap_size, w, speed){
    this.gap_size = gap_size;
    this.w = w
    this.speed = speed;
    this.top = null;
    this.bottom = null;
    this.x = width;
    this.highlight = false;
    this.createPipe = () => {
        remaining_length = height - this.gap_size;
        this.top = random(remaining_length);
        this.bottom = this.top + this.gap_size; 
    };
    this.drawPipe = () => {
        fill(255);
        if(this.highlight){
            fill(255, 0, 0);
        }
        // Top rect
        rect(this.x, 0, this.w, this.top);
        // Bottom
        rect(this.x, this.bottom, this.w, height - this.bottom);
    };
    this.updatePipe = () => {
        this.x -= this.speed;
    };
    this.pipeOffScreen = () => {
        return (this.x < - this.width);
    };
    this.checkCollision = (bird) => {
        // Generating a list of the two points
        let bird_x = bird.x,
        bird_y = bird.y,
        bird_rad = bird.rad;
        let collide_points = []
        for(let i = -1; i<2; i += 2){
            let check_point = {};
            check_point.x = bird_x + (i * bird_rad/2);
            check_point.y = bird_y;
            collide_points.push(check_point);
        }
        for(let i = -1; i<2; i += 2){
            let check_point = {};
            check_point.y = bird_y + (i * bird_rad/2);
            check_point.x = bird_x;
            collide_points.push(check_point);
        }
        for(let i=0; i<collide_points.length; i++){
            let check_point = collide_points[i]
            if((check_point.x > this.x && check_point.y < this.top) || (check_point.x > this.x && check_point.y > this.bottom)){
                this.highlight = true;
                return false;
            }
        }
        this.highlight = false;
        return true;
    };
}

const Game = {
    init(){
        // For the bird
        this.gravity = 0.6;
        this.lift = -20;
        this.air_res = 0.9;
        this.bird = Bird;
        this.bird.init(this.gravity, this.lift, this.air_res);
        // For the pipe
        this.gap_size = 200;
        this.w = 40;
        this.speed = 3.7;
        this.pipes = []
        // this.pipe = Pipe;
        // this.pipe.init(this.gap_size, this.w, this.speed);
        // this.pipe.createPipe();
    },
    updateFrame(){
        if(frameCount % 45 === 0){
            let pipe = new Pipe(this.gap_size, this.w, this.speed);
            pipe.createPipe();
            this.pipes.push(pipe);
        }
        for(let i = this.pipes.length - 1; i >= 0; i--){
            if(this.pipes[i].pipeOffScreen()){
                this.pipes.splice(i, 1);
            }
            else{
                this.pipes[i].checkCollision(this.bird);
                this.pipes[i].updatePipe();
            }
            this.pipes[i].drawPipe();
        }
        if (this.bird.checkCollision()){
            this.bird.updateBird();
        }
        this.bird.drawBird();
    }
}

