from p5 import *
from game import Game

game = Game()

def setup():
    size(600, 400)
    fill(255)
def draw():
    # fill(0)
    # rect((width / 2, height / 2), 100, 100)
    background(255)
    game.updateFrame()

def key_pressed():
    game.bird.birdJump()

run()
