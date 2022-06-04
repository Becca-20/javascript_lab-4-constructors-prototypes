// Add a Customer class with a name, a wallet representing the amount of money they have and a car property which is initialised to be null.
// Give them a buyCar method which removes a Car from a Dealership and updates their car property.
// Write tests to ensure all possible conditions are met, eg. the customer can afford the car.

// customer constructor
const Customer = function (name, wallet, car) {
    this.name = name;
    this.wallet = wallet;
    this.car = null;
}