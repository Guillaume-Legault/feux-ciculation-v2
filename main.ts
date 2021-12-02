function j () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
}
input.onButtonPressed(Button.A, function () {
    a = 1
})
function rp () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P16, 0)
    for (let index = 0; index < 10; index++) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(200)
    }
    a = 0
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
function v () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P0, 1)
}
let a = 0
a = 0
basic.forever(function () {
    if (a == 1) {
        v()
        basic.pause(2000)
        j()
        basic.pause(2000)
        rp()
    } else {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P8, 1)
    }
})
