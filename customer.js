// Give them a buyCar method which removes a Car from a Dealership and updates their car property.
// Write tests to ensure all possible conditions are met, eg. the customer can afford the car.

// customer constructor
const Customer = function (name, wallet, car) {
    this.name = name;
    this.wallet = wallet;
    this.car = [];
}

module.exports = {Customer};


// buy car method - removes a Car from a Dealership + updates their car property
Customer.prototype.buyCar = function (car) {
    if (this.Car <= this.wallet && this.Dealership != null) {
        this.Car = car;
        this.wallet -= car.price;
        this.Dealership.remove(Car);
    }
    this.car.push(car);
}