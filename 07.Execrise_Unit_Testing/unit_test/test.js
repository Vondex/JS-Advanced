const expect = require('chai').expect;
const {lookupChar} = require("./solve");

describe('LookUpChar Test', ()=>{
    it('with non-string parameter', ()=>{
        expect(lookupChar(1, 9)).to.be.equal(undefined);
    });
    it('with non-number first parameter', ()=>{
        expect(lookupChar('pers', 'ghgh')).to.be.equal(undefined);
    });
    it('with floating point number second parameter', ()=>{
        expect(lookupChar('pers', 1.4)).to.be.equal(undefined);
    });
    it('string lenght is < index', ()=>{
        expect(lookupChar('jh', 7)).to.be.equal("Incorrect index");
    });
    it('index < 0', ()=>{
        expect(lookupChar('erfdf', -3)).to.be.equal("Incorrect index")
    });
    it('correct parameters', ()=>{
        expect(lookupChar('ewdsr', 3)).to.be.equal('s');
    });
    
});