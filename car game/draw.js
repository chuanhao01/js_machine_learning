function Car(){
    this.init = function(){
        this.current_rotation = 0;
        this.acceleration = 0;
        this.velocity = {
            x: 0,
            y: 0,
        };
        this.w = 40;
        this.h = 100;
        this.fric_c = 0.01;
        this.x = width/2;
        this.y = height/2;
    }
    this.calculateCarVector = function(){
        let sign_x = Math.sin(this.current_rotation),
        sign_y = - Math.cos(this.current_rotation);
        if(sign_x < 0){
            sign_x = -1;
        }
        else{
            sign_x = 1;
        }
        if(sign_y < 0){
            sign_y = -1;
        }
        else{
            sign_y = 1
        }
        let vel_y_mag = Math.abs(this.velocity.y);
        vel_y_mag += this.acceleration;
        let vel_x_mag = vel_y_mag * Math.abs(Math.tan(this.current_rotation));
        let new_vel_x = sign_x * vel_x_mag,
        new_vel_y = sign_y * vel_y_mag; 
        this.velocity.x = new_vel_x;
        this.velocity.y = new_vel_y;
    };
    this.calculateFriction = function(){
        let normal_force = 0.1 * (this.acceleration)
        let friction = Math.abs(this.fric_c * normal_force); 
        let fric_sign = this.velocity.y;
        if(fric_sign < 0){
            fric_sign = -1;
        }
        else{
            fric_sign = 1;
        }
        if(this.velocity.y > 1 || this.velocity.y < -1){
            this.velocity.y = this.velocity.y - (fric_sign * friction);
        }
    };
    this.updateFrame = function(){
        this.getMovement();
        this.calculateFriction();
        this.calculateCarVector();
        this.applyVector();
        this.drawCar();
    };
    this.drawCar = function(){
        background(0);
        push();
        translate(this.x, this.y);
        rectMode(CENTER);
        rotate(this.current_rotation);
        rect(0, 0, this.w, this.h);
        pop();
    };
    this.applyVector = function(){
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        console.log(this.velocity);
    };
    this.getMovement = function(){
        if(isKeyPressed){
            if(key === 'w'){
                if(this.acceleration < 0.1){
                    this.acceleration += 0.01;
                }
            }
            else if(key === 's'){
                if(this.acceleration > -0.1){
                    this.acceleration -= 0.01;
                }
            }
            else if(key === 'd'){
                if(this.current_rotation <= 2 * Math.PI){
                    this.current_rotation += 0.05;
                }
                else{
                    this.current_rotation -= 2 * Math.PI
                    this.current_rotation += 0.05;
                }
            }
            else if(key === 'a'){
                if(this.current_rotation >= - 2 * Math.PI){
                    this.current_rotation -= 0.05;
                }
                else{
                    this.current_rotation += 2 * Math.PI
                    this.current_rotation -= 0.05;
                }
            }
        }
    };
}

var car = new Car; 
function setup(){
    createCanvas(10000, 10000);
    car.init();
}

function draw(){
    car.updateFrame();
}