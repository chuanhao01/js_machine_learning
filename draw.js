const canvas = {
    height: 600, 
    width: 600,
}

const game = {
    init(height, width, rows, cols){
        this.height = height;
        this.width  = width;
        this.rows = rows;
        this.cols = cols;
        this.grid_height = this.height / this.rows;
        this.grid_width = this.width / this.cols;
        this.velocity = {
            x: 1,
            y: 1,
        }
        this.snake = {
            init(length, max_rows, max_cols){
                this.length = length;
                this.body = [];
                for(let x = this.length - 1; x>0; x--){
                    y = 0;
                    body_pos = {};
                    body_pos.x = x;
                    body_pos.y = y;
                } 
            }
        }
        this.snake.init(3, this.rows, this.cols);
    },
    drawBoard(){
        for(let row = 0; row<this.rows; row++){
            for(let col=0; col<this.cols; col++){
                fill(255);
                let x_pos = this.grid_width * col,
                y_pos = this.grid_width * row;
                fill(255);
                rect(x_pos, y_pos, this.grid_width, this.grid_height);
            }
        }
    },
    drawSnake(){
        for(let i=0; i<this.snake.body.length; i++){
            body_pos = this.snake.body[i];
            x = body_pos.x;
            y = body_pos.y;
            draw_x = map(x, 0, this.cols, 0, this.width);
            draw_y = map(y, 0, this.rows, 0, this.height);
            fill('red');
            rect(draw_x, draw_y, this.grid_width, this.grid_height);
        }
    }
}


game.init(canvas.height, canvas.width, 20, 20);

function setup(){
    createCanvas(canvas.height, canvas.width);
    background(0);
}

function draw(){
    game.drawBoard();
    game.drawSnake();
}

// function mousePressed(){
//     noStroke();
//     fill('red');
//     ellipse(mouseX, mouseY, 10);
// }