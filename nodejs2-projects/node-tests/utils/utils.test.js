const utils = require('./utils');

it('should add 2 numbers', () => {
    let res = utils.add(33, 11);
    if (res !== 44) {
        throw new Error(`Expected 44, but got ${res}.`);
    }
});

it('should square 2 numbers', () => {
    let res = utils.square(3);
    if (res !== 9) {
        throw new Error(`Expected 9, but got ${res}`);
    }
});