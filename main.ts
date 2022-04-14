radio.onReceivedNumber(function (receivedNumber) {
    while (skickat == 0) {
        basic.pause(1)
    }
    if (receivedNumber == Mitt_val) {
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
    } else if (Mitt_val == sten) {
        if (receivedNumber == sax) {
            basic.showIcon(IconNames.Happy)
        } else if (receivedNumber == påse) {
            basic.showIcon(IconNames.Sad)
        }
    } else if (Mitt_val == sax) {
        if (receivedNumber == 3) {
            basic.showIcon(IconNames.Happy)
        } else if (receivedNumber == 1) {
            basic.showIcon(IconNames.Sad)
        }
    } else if (Mitt_val == påse) {
        if (receivedNumber == 3) {
            basic.showIcon(IconNames.Happy)
        } else if (receivedNumber == 1) {
            basic.showIcon(IconNames.Sad)
        }
    }
    skickat = 0
})
input.onButtonPressed(Button.A, function () {
    Mitt_val = Mitt_val + 1
    if (Mitt_val == 4) {
        Mitt_val = 1
    }
    if (Mitt_val == sten) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    }
    if (Mitt_val == sax) {
        basic.showLeds(`
            # . . . .
            . # # . .
            . . . # #
            . # # . .
            # . . . .
            `)
    }
    if (Mitt_val == påse) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    soundExpression.hello.playUntilDone()
    radio.sendNumber(Mitt_val)
    skickat = 1
    basic.clearScreen()
})
let skickat = 0
let påse = 0
let sax = 0
let sten = 0
let Mitt_val = 0
radio.setGroup(1)
Mitt_val = 1
sten = 1
sax = 2
påse = 3
basic.showLeds(`
    . . # . .
    . # # # .
    # # # # #
    . # # # .
    . . # . .
    `)
basic.forever(function () {
	
})
