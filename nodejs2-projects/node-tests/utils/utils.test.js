const expect = require('expect');

const utils = require('./utils');

it('should add 2 numbers', () => {
    let res = utils.add(33, 11);
    expect(res).toBe(44).toBeA('number');
    // if (res !== 44) {
    //     throw new Error(`Expected 44, but got ${res}.`);
    // }

});

it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

it('should async square a number', (done) => {
    utils.asyncSquare(4, (res) => {
        expect(res).toBe(16).toBeA('number');
        done();
    });
});

it('should square 2 numbers', () => {
    let res = utils.square(3);
    expect(res).toBe(9).toBeA('number');
    // if (res !== 9) {
    //     throw new Error(`Expected 9, but got ${res}`);
    // }
});

// it('should expect some values', () => {
//     // expect(12).toNotBe(11);
//     // expect({name: 'Andrew'}).toBe({name: 'Andrew'});  // test doesn't pass, becuase these are 2 separate objects
//     // expect({name: 'Andrew'}).toEqual({name: 'Andrew'});  // this passes
//     // expect({name: 'Andrew'}).toNotEqual({name: 'andrew'});  // this passes
//     // expect([2,3,4]).toInclude(2);
//     // expect([2,3,4]).toExclude(1);
//     expect({
//         name: 'cbot',
//         age: 37,
//         location: 'Atlanta'
//     }).toInclude({
//         age: 37
//     });
//     expect({
//         name: 'cbot',
//         age: 37,
//         location: 'Atlanta'
//     }).toExclude({
//         age: 25
//     });
// });

// shoudl verify first and last names are set
// assert it includes firstName and lastName with proper values
it('should set firstName and lastName', () => {
    let user = {
        location: 'Philadelphia',
        age: 25
    };
    let res = utils.setName(user, 'John Doe');
    expect(res).toInclude({
        firstName: 'John',
        lastName: 'Doe'
    });
});

