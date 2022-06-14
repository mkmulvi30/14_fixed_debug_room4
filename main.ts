basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        // Change to North 
        basic.showArrow(ArrowNames.North)
    }
    if (input.buttonIsPressed(Button.B)) {
        // Change to South
        basic.showArrow(ArrowNames.South)
    }
})
