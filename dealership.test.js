// import car + dealership constructors
const {Car} = require('./car');
const {Dealership} = require('./dealership');

// dealership constructor test
test('can access dealership properties', () => {
    // arrange
    let dealership = new Dealership ("Bob's Cars", 30, 2);

    // assert
    expect(dealership.name).toBe("Bob's Cars");
    expect(dealership.maxCars).toBe(30);
    expect(dealership.carsInStock.length).toBe(0);
});


// count cars in stock test
test('can count cars in stock', () => {

    // arrange
    let name = "Jimmy's Cars";
    let maxCars = 583;
    let carsInStock = [new Car ("BMW", 5000, "M20"), new Car ("Ferrari", 10000, "F12"), new Car ("Audi", 300, "A7"), new Car ("Range Rover", 4000, "R8")];
    
    // NOTE: the below 2 lines must come after the above
    let dealership2 = new Dealership (name, maxCars);
    dealership2.carsInStock = carsInStock;
    
    // assert
    expect(dealership2.countCarsInStock()).toBe(4);

})