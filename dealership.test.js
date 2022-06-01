// import dealership constructor
const {Dealership} = require('./dealership');

test('can access dealership properties', () => {
    // arrange
    let dealership = new Dealership ("Bob's Cars", 30, 2);

    // assert
    expect(dealership.name).toBe("Bob's Cars");
    expect(dealership.maxCars).toBe(30);
    expect(dealership.carsInStock.length).toBe(0);
});