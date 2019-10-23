from bird import Bird
from pipe import Pipe
from p5 import *

class Game:
    def __init__(self):
        self.bird = Bird(0.72, -20, 0.92)
        self.gap_size = 200
        self.width = 50
        self.speed = 5
        pipe = Pipe(self.gap_size, self.width, self.speed)
        self.pipes = [pipe]

    
    def updateFrame(self):
        if(self.pipes[-1].x < 300):
            new_pipe = Pipe(self.gap_size, self.width, self.speed)
            self.pipes.append(new_pipe)
        self.bird.checkCollision(self.pipes)
        self.pipes = [pipe for pipe in self.pipes if not pipe.pipeOffScreen()]
        for pipe in self.pipes:
            pipe.updatePipe()
            pipe.drawPipe()
        self.bird.updateBird()
        self.bird.drawBird()
        