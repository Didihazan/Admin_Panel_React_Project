// import CarClass form "./carClass"
const Car = require("./carClass")
// import {showName, showAge} from "./user"
// : -> alias -> נותן כינוי אחר למאפיין
const {showName:showUser , showAge} = require("./user")

Car.showCar("Tesla")

showUser("koko");
showAge(40)
// let car = new CarClass();
// car.showCar("Toyota");


console.log("welcome back to nodejs");