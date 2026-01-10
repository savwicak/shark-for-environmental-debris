enum RadioMessage {
    message1 = 49434,
    servo = 54626
}
basic.showNumber(11)
radio.setGroup(117)
k210_models.initialization()
basic.forever(function () {
    k210_models.get_motor_speed()
    Tinybit.car_sport(k210_models.get_motor_L(), k210_models.get_motor_R())
    radio.sendMessage(RadioMessage.servo)
    if (k210_models.get_motor_R() < 50) {
        radio.sendMessage(k210_models.get_motor_R())
        basic.pause(2000)
    }
})
