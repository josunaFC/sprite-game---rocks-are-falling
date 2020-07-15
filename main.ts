input.onButtonPressed(Button.A, function () {
    Hero.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Hero.change(LedSpriteProperty.X, 1)
})
let Rock: game.LedSprite = null
let Hero: game.LedSprite = null
Hero = game.createSprite(2, 4)
basic.forever(function () {
    basic.pause(randint(3000, 5000))
    Rock = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(200)
        Rock.change(LedSpriteProperty.Y, 1)
    }
    if (Hero.isTouching(Rock)) {
        game.gameOver()
    }
    basic.pause(200)
    game.addScore(1)
    Rock.delete()
})
