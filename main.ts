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
let Rock2: game.LedSprite = null
let Rock: game.LedSprite = null
let Hero: game.LedSprite = null
Hero = game.createSprite(2, 4)
game.startCountdown(60000)
basic.forever(function () {
    basic.pause(randint(1000, 2000))
    Rock = game.createSprite(randint(0, 4), 0)
    Rock2 = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(200)
        Rock.change(LedSpriteProperty.Y, 1)
        Rock2.change(LedSpriteProperty.Y, 1)
    }
    if (Hero.isTouching(Rock)) {
        game.gameOver()
    } else if (Hero.isTouching(Rock2)) {
        game.gameOver()
    }
    basic.pause(200)
    game.addScore(1)
    Rock.delete()
    Rock2.delete()
})
