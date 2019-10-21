from p5 import *

class Bird:
    def __init__(self, gravity, lift, air_res):
        self.gravity = gravity
        self.lift = lift
        self.air_res = air_res
        self.x = 50
        self.y = height/2
        self.rad = 50
        self.vel = 0
    def drawBird(self):
        fill(255)
        circle((self.x, self.y), self.rad)
    def updateBird(self):
        self.vel += self.gravity
        self.vel *= self.air_res
        self.y += self.vel
    def checkCollision(self):
        if(self.checkCollision()):
            return True
        else:
            return False
    def checkFloorCollision(self):
        if(self.y > height or self.y < 0):
            return True
        else:
            False
    def checkPipeCollision(self):
        pass
    def birdJump(self):
        self.vel += self.lift

