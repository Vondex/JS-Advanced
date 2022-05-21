const dealership = require('./dealership');
const { expect } = require('chai');

describe('newCarCost Testing', ()=>{
    it('returns price for the car', ()=>{
        expect(dealership.newCarCost('Audi A4 B8', 70000)).to.be.equal(55000);
        expect(dealership.newCarCost('Audi A6 4K', 80000)).to.be.equal(60000);
        expect(dealership.newCarCost('', 80000)).to.be.equal(80000);
        expect(dealership.newCarCost('Audwwdw', 80000)).to.be.equal(80000);
        expect(dealership.newCarCost('Audwwdw', '80000')).to.be.equal('80000');
        expect(dealership.newCarCost('Au', '')).to.be.equal('');
        expect(dealership.newCarCost('Audwwdw', -89999)).to.be.equal(-89999);
        expect(dealership.newCarCost(888, -89999)).to.be.equal(-89999);


    })
    it ('invalid input', ()=>{
        expect(dealership.newCarCost(800)).to.be.equal(undefined)
        expect(dealership.newCarCost('')).to.be.equal(undefined)
        expect(dealership.newCarCost('--')).to.be.equal(undefined)
        expect(dealership.newCarCost([])).to.be.equal(undefined)
        expect(dealership.newCarCost({})).to.be.equal(undefined)
    })
   
})
describe('carEquipment Testing', ()=>{
    it('returns price for the car', ()=>{
        expect(dealership.newCarCost(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0, 2, 3])).to.deep.equal(['heated seats', 'sport rims', 'navigation'])
    

    })
   
   
})