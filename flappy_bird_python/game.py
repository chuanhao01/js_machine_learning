from bird import Bird
from p5 import *

class Game:
    def __init__(self):
        self.bird = Bird(0.6, -20, 0.9)
    
    def updateFrame(self):
        self.bird.updateBird()
        self.bird.drawBird()