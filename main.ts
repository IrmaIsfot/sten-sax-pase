radio.onReceivedNumber(function (receivedNumber) {
    mottaget = 1
    Motståndarens_val = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    if (skickat == 0) {
        Mitt_val = Mitt_val + 1
        if (Mitt_val == 4) {
            Mitt_val = 1
        }
    }
})
input.onButtonPressed(Button.B, function () {
    soundExpression.hello.playUntilDone()
    radio.sendNumber(Mitt_val)
    skickat = 1
    basic.clearScreen()
})
let mottaget = 0
let skickat = 0
let Motståndarens_val = 0
let Mitt_val = 0
radio.setGroup(1)
Mitt_val = 1
Motståndarens_val = 0
let sten = 1
let sax = 2
let påse = 3
skickat = 0
mottaget = 0
basic.showLeds(`
    . . # . .
    . # # # .
    # # # # #
    . # # # .
    . . # . .
    `)
basic.forever(function () {
    if (skickat == 0) {
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
    }
    basic.pause(1)
    if (mottaget == 1) {
        if (Motståndarens_val == Mitt_val) {
            basic.showLeds(`
                . . . . .
                # # # # #
                . . . . .
                # # # # #
                . . . . .
                `)
        } else if (Mitt_val == sten) {
            if (Motståndarens_val == sax) {
                basic.showIcon(IconNames.Happy)
                soundExpression.giggle.playUntilDone()
            } else if (Motståndarens_val == påse) {
                basic.showIcon(IconNames.Sad)
                soundExpression.sad.playUntilDone()
            }
        } else if (Mitt_val == sax) {
            if (Motståndarens_val == 3) {
                basic.showIcon(IconNames.Happy)
                soundExpression.giggle.playUntilDone()
            } else if (Motståndarens_val == 1) {
                basic.showIcon(IconNames.Sad)
                soundExpression.sad.playUntilDone()
            }
        } else if (Mitt_val == påse) {
            if (Motståndarens_val == 3) {
                basic.showIcon(IconNames.Happy)
                soundExpression.giggle.playUntilDone()
            } else if (Motståndarens_val == 1) {
                basic.showIcon(IconNames.Sad)
                soundExpression.sad.playUntilDone()
            }
        }
        mottaget = 0
        skickat = 0
    }
})
