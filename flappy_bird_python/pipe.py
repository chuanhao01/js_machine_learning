from p5 import *
import random

class Pipe:
    def __init__(self, gap_size, w, speed):
        self.gap_size = gap_size
        self.width = w 
        self.speed = speed
        self.top = random.randint(10, height - self.gap_size - 10)
        self.bottom = self.top + gap_size
        self.x = width
        self.highlight = False
    def updatePipe(self):
        self.x -= self.speed
    def drawPipe(self):
        fill(0)
        if(self.highlight):
            fill(255, 0, 0)
        # Top rectangle
        rect((self.x, 0), self.width, self.top)
        # rect((0, 0), 100, 100)
        # Bottom rect
        rect((self.x, self.bottom), self.width, height - self.bottom)
    def pipeOffScreen(self):
        return self.x + self.width < 0