const add = require('../math');
const chai = require('chai');
const expect = chai.expect;

describe('Math functions', () => {
    it('should add 1 + 2 to equal 3', () => {
        expect(add(1, 2)).to.equal(3);
    });

    it('should add -1 + 1 to equal 0', () => {
        expect(add(-1, 1)).to.equal(0);
    });

    it('should add -1 + -1 to equal -2', () => {
        expect(add(-1, -1)).to.equal(-2);
    });
});
