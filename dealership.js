// import car
const {Car} = require('./car');

// dealership constructor
const Dealership = function (name, maxCars, carsInStock) {
    this.name = name;
    this.maxCars = maxCars;
    this.carsInStock = [];
}

// export dealership constructor
module.exports = {Dealership};



// count no. of cars in stock
Dealership.prototype.countCarsInStock = function () {
    return this.carsInStock.length;
}

// add car to stock
Dealership.prototype.addCarToStock = function () {
    if (this.countCarsInStock() < this.maxCars) {
        this.carsInStock.push(Car);
    } else {
        console.log(`The maximum number of cars at this dealership has been reached, sorry!`);
    }
}

// // return array of each car's manufacturer
// Dealership.prototype.carManufacturers = function () {
//     for (manufacturer in Car) {
//         console.log(manufacturer);
//     }
// }
