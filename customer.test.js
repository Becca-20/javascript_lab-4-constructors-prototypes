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
    expect(customer1.cars.length).toBe(0);

})


describe('buy car', () => {

    test('CAN buy car', () => {

        // arrange
        let customer2 = new Customer ("Pam", 9000);

        let dealership8 = new Dealership ("Dwight's Wheels", 12, [new Car ("Fiat", 100, "F2"), new Car ("Honda", 50, "H3"), new Car ("Range Rover", 8365, "R90"), new Car ("Fiat", 839, "F5")]);

        // act
        customer2.buyCar(dealership8.carsInStock[1]);

        // assert
        // expect(customer2.car.length).toBe(1);
        expect(customer2.cars.length).toBe(1);
    })

    // test('CANNOT buy car', () => {

    //     // arrange
    //     let customer3 = new Customer ("Kevin", 10);

    //     let dealership9 = new Dealership ("Angela's Cars", 10, [new Car ("Fiat", 100, "F2"), new Car ("Honda", 50, "H3"), new Car ("Range Rover", 8365, "R90"), new Car ("Fiat", 839, "F5")]);

    //     // act
    //     customer3.buyCar("Honda");

    //     // assert
    //     expect(customer3.car.length).toBe(0);
    // })

})