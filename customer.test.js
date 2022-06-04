// import from Customer class
const { Car } = require('./car');
const {Customer} = require ('./customer');
const { Dealership } = require('./dealership');

// access to constructor properties
test('can access customer properties', () => {
    
    // arrange
    let customer1 = new Customer ("Jim", 500);

    // assert
    expect(customer1.name).toBe("Jim");
    expect(customer1.wallet).toBe(500);
    expect(customer1.car.length).toBe(0);

})


describe('buy car', () => {

    test('CAN buy car', () => {

        // arrange
        let customer2 = new Customer ("Pam", 9000);

        let dealership8 = new Dealership ("Dwight's Wheels", 12, [new Car ("Fiat", 100, "F2"), new Car ("Honda", 50, "H3"), new Car ("Range Rover", 8365, "R90"), new Car ("Fiat", 839, "F5")]);

        // act
        customer2.buyCar("Fiat");

        // assert
        expect(customer2.car.length).toBe(1);
    })
})