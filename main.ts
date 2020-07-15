input.onButtonPressed(Button.A, function () {
    Hero.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Hero.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(game.score())
})
// Based on this tutorial:drive.google.com/file/d/1p1fm9SlFVr8NQ9ctQvhZ7H-okfxXhabW/view
let Rock: game.LedSprite = null
let Hero: game.LedSprite = null
Hero = game.createSprite(2, 4)
game.startCountdown(60000)
basic.forever(function () {
    basic.pause(randint(1000, 2000))
    Rock = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(150)
        Rock.change(LedSpriteProperty.Y, 1)
    }
    if (Hero.isTouching(Rock)) {
        game.gameOver()
    }
    basic.pause(150)
    game.addScore(1)
    Rock.delete()
})
