
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

// export count cars in stock method
module.exports = {countCarsInStock};


