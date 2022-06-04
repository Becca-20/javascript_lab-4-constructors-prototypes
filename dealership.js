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

// return array of each car's manufacturer
Dealership.prototype.carManufacturers = function () {
    let carManResult = [];
    this.carsInStock.forEach (Car => {
        carManResult.push(Car.manufacturer);
    })
    return carManResult;
}

// find all the cars from a given manufacturer
Dealership.prototype.findCarsByManufacturer = function (manufacturer) {
    return this.carsInStock.filter(Car => Car.manufacturer == manufacturer);
}
