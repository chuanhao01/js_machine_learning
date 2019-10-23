from p5 import *

class Bird:
    def __init__(self, gravity, lift, air_res):
        self.gravity = gravity
        self.lift = lift
        self.air_res = air_res
        self.x = 50
        self.y = height/2
        self.rad = 25
        self.vel = 0
    def drawBird(self):
        fill(255)
        circle((self.x, self.y), self.rad * 2)
    def updateBird(self):
        self.vel += self.gravity
        self.vel *= self.air_res
        self.y += self.vel
    # Pipes is an array of the game pipes
    def checkCollision(self, pipes):
        if(self.checkFloorCollision() or self.checkPipeCollision(pipes)):
            return True
        else:
            return False
    def checkFloorCollision(self):
        if(self.y > height or self.y < 0):
            return True
        else:
            False
    def checkPipeCollision(self, pipes):
        # Getting vertices
        top_bottom = [(self.x, self.y + self.rad), (self.x, self.y - self.rad)]
        left_right = [(self.x + self.rad, self.y), (self.x - self.rad, self.y)]
        circle_vertices = top_bottom + left_right
        for pipe in pipes:
            for (ver_x, ver_y) in circle_vertices:
                if(pipe.x < ver_x < pipe.x + pipe.width):
                    if((0 < ver_y < pipe.top) or (pipe.bottom < ver_y < height)):
                        pipe.highlight = True
                        return True
                    else:
                        pipe.highlight = False
                        return False
    def birdJump(self):
        self.vel += self.lift

# if __name__ == "__main__":
#     bird = Bird(1, 2, 3)
#     bird.checkPipeCollision([1, 2, 3])
