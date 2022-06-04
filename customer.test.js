// import from Customer class
const { Car } = require('./car');
const {Customer} = require ('./customer');

// access to constructor properties
test('can access customer properties', () => {
    
    // arrange
    let customer1 = new Customer ("Jim", 500);

    // assert
    expect(customer1.name).toBe("Jim");
    expect(customer1.wallet).toBe(500);
    expect(customer1.car).toBe(null);

})