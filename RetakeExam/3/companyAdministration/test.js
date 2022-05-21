const companyAdministration = require('./companyAdministration');
const { expect } = require('chai');

describe('hiringEmployee', ()=>{
    it('has invalid input', ()=>{
        expect(() => companyAdministration.hiringEmployee('dedww', 'jgkdso', 3)).to.throw("We are not looking for workers for this position.");
        expect(() => companyAdministration.hiringEmployee('dedww', '', 3)).to.throw("We are not looking for workers for this position.");
        expect(() => companyAdministration.hiringEmployee('dedww', 3, 3)).to.throw("We are not looking for workers for this position.");
        expect(() => companyAdministration.hiringEmployee()).to.throw("We are not looking for workers for this position.");
        expect(companyAdministration.hiringEmployee('name', 'Programmer', 1)).to.equal(`name is not approved for this position.`);
        expect(companyAdministration.hiringEmployee('name', 'Programmer', -10)).to.equal(`name is not approved for this position.`);  
    })
    it('has valid input', ()=>{
        expect(companyAdministration.hiringEmployee('name', 'Programmer', 10)).to.equals(`name was successfully hired for the position Programmer.`);
        expect(companyAdministration.hiringEmployee('name', 'Programmer', 20.9)).to.equals(`name was successfully hired for the position Programmer.`);
        expect(companyAdministration.hiringEmployee('name', 'Programmer', 3)).to.equals(`name was successfully hired for the position Programmer.`);
        
    })
    
})
describe('calculateSalary', ()=>{
    it('has invalid input', ()=>{
        expect(() => companyAdministration.calculateSalary(-10)).to.throw("Invalid hours");
        expect(() => companyAdministration.calculateSalary('fiifl')).to.throw('Invalid hours');
        expect(() => companyAdministration.calculateSalary([])).to.throw('Invalid hours');
        expect(() => companyAdministration.calculateSalary()).to.throw('Invalid hours');
        expect(() => companyAdministration.calculateSalary('')).to.throw('Invalid hours');
        
        
    })
    it('has valid input', ()=>{
        expect(companyAdministration.calculateSalary(100.1)).to.equals(1501.5);
        expect(companyAdministration.calculateSalary(100)).to.equals(1500);
        expect(companyAdministration.calculateSalary(200)).to.equals(4000);
        expect(companyAdministration.calculateSalary(160)).to.equals(2400);
        expect(companyAdministration.calculateSalary(160.5)).to.equals(3407.5);
        
    })
    
})
describe('firedEmployee', ()=>{
    it('has invalid input', ()=>{
        expect(() => companyAdministration.firedEmployee(['name1', 'name2'], 3)).to.throw("Invalid input");
        expect(() => companyAdministration.firedEmployee(['name1', 'name2'], 0.15)).to.throw("Invalid input");
        expect(() => companyAdministration.firedEmployee(['name1', 'name2'], -3)).to.throw("Invalid input");
        expect(() => companyAdministration.firedEmployee(['name1', 'name2'], -3.15)).to.throw("Invalid input");
        expect(() => companyAdministration.firedEmployee(['name1', 'name2'])).to.throw("Invalid input");
        expect(() => companyAdministration.firedEmployee(['name1', 'name2'], '1')).to.throw("Invalid input");
        expect(() => companyAdministration.firedEmployee(['name1', 'name2'], [])).to.throw("Invalid input");
        expect(() => companyAdministration.firedEmployee([], 3)).to.throw("Invalid input");
        expect(() => companyAdministration.firedEmployee('', 3)).to.throw("Invalid input");
        expect(() => companyAdministration.firedEmployee('', -3)).to.throw("Invalid input");
        expect(() => companyAdministration.firedEmployee(3)).to.throw("Invalid input");
        expect(() => companyAdministration.firedEmployee(['namw1', 'name2'])).to.throw("Invalid input");
        expect(() => companyAdministration.firedEmployee(1)).to.throw("Invalid input");
        expect(() => companyAdministration.firedEmployee(['name1', 'name2'], null)).to.throw("Invalid input");
   
        
    })
    it('has valid input', ()=>{
        expect(companyAdministration.firedEmployee(['name1', 'name2'], 0)).to.equals('name2');
        expect(companyAdministration.firedEmployee(['name1', 'name2', 'name3'], 2)).to.equals('name1, name2');
        expect(companyAdministration.firedEmployee(['name1', 'name2', 'name3'], 1)).to.equals('name1, name3');
        
    })
    
})
