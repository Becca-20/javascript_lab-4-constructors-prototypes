// import car constructor to test file
const {Car} = require('./car');

test('can access properties', () => {
    //arrange
    let car = new Car ("BMW", 5000, "Fast");

    //act - none

    //assert
    expect(car.manufacturer).toBe("BMW");
    expect(car.price).toBe(5000);
    expect(car.engineType).toBe("Fast");
});