// import car
const {Car} = require('./car');


// Write tests to ensure all possible conditions are met, eg. the customer can afford the car.

// customer constructor
const Customer = function (name, wallet, car) {
    this.name = name;
    this.wallet = wallet;
    this.cars = [];
}

module.exports = {Customer};


// buy car method - removes a Car from a Dealership + updates their car property
Customer.prototype.buyCar = function (cars) {
    if (Car.price <= this.wallet && this.Dealership != null) {
        this.cars = cars;
        this.wallet -= Car.price;
        this.Dealership.remove(Car);
        this.cars.push(Car); 
    } else {
        console.log(`Sorry, you cannot make this purchase!`);
    }
}