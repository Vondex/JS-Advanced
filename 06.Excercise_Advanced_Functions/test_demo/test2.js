const { expect } = require('chai');
const isSymmetric = require('./symmetric');

describe('Symmetry checker', () => {
    it('returns true for symmetric array', () =>{
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });
    it('returns false for non-symmetric array', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });
    it('returns false for non-array', () =>{
        expect(isSymmetric(5)).to.be.false;
    })


});

