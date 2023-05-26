input.onButtonPressed(Button.A, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    basic.pause(2000)
})
input.onButtonPressed(Button.AB, function () {
    reading = pins.analogReadPin(AnalogPin.P0)
    voltage = reading * 1000 / 340
    if (voltage >= 1100) {
        basic.showIcon(IconNames.Yes)
    }
    if (voltage < 1100) {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.B, function () {
    reading = pins.analogReadPin(AnalogPin.P0)
    voltage = reading * 1000 / 340
    basic.showNumber(voltage)
})
let voltage = 0
let reading = 0
basic.showString("BATTERY TESTER")
