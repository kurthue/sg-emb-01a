input.onButtonPressed(Button.A, function () {
    range_1.showColor(neopixel.colors(NeoPixelColors.Red))
    range_2.showColor(neopixel.colors(NeoPixelColors.Green))
})
input.onButtonPressed(Button.B, function () {
    servo_motor.motor(Motor.M1_A, Dir.forward, 564)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    servo_motor.motor(Motor.M1_A, Dir.forward, 0)
})
let range_2: neopixel.Strip = null
let range_1: neopixel.Strip = null
basic.showIcon(IconNames.No)
let strip = neopixel.create(DigitalPin.P16, 7, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Orange))
strip.showRainbow(1, 360)
range_1 = strip.range(1, 4)
range_2 = strip.range(5, 7)
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(100)
})
