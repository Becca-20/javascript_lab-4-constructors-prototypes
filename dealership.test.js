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

});


describe('add car to stock', () => {

    // SUCCESS: add car to stock
    test('CAN add car to stock', () => {

        // arrange
        let name = "Lenny's Cars";
        let maxCars = 15;
        let carsInStock = [new Car ("Fiat", 100, "F2"), new Car ("Honda", 50, "H3")];

        let dealership3 = new Dealership (name, maxCars);
        dealership3.carsInStock = carsInStock;

        // assert
        expect(dealership3.countCarsInStock()).toBe(2);

        // act
        dealership3.addCarToStock(new Car ("Toyota", 99, "T4"));

        // assert
        expect(dealership3.countCarsInStock()).toBe(3);
    })


    // FAIL: add car to stock
    test('CANNOT add car to stock', () => {

        // arrange
        let name = "Ben's Dealership";
        let maxCars = 2;
        let carsInStock = [new Car ("Fiat", 100, "F2"), new Car ("Honda", 50, "H3")];

        let dealership4 = new Dealership (name, maxCars);
        dealership4.carsInStock = carsInStock;

        // assert
        expect(dealership4.countCarsInStock()).toBe(2);

        // act
        dealership4.addCarToStock(new Car("Toyota", 99, "T4"));

        // assert
        expect(dealership4.countCarsInStock()).toBe(2);
    })

})


// print car manufacturers in an array
test('can print array of car manufacturers in dealership', () => {

    // arrange
    let name = "Phil's Cars";
    let maxCars = 30;
    let carsInStock = [new Car ("Fiat", 100, "F2"), new Car ("Honda", 50, "H3"), new Car ("Range Rover", 8365, "R90")];

    let dealership5 = new Dealership (name, maxCars);
    dealership5.carsInStock = carsInStock;

    // assert
    expect(dealership5.carManufacturers.length).toBe(3);

})