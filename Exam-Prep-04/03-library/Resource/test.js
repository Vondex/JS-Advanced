const library = require('./library');
const { expect } = require('chai');


describe('calcPriceOfBook', () => {
    it('has invalid input', () => {
        expect(() => library.calcPriceOfBook()).to.throw("Invalid input");
        expect(() => library.calcPriceOfBook(222)).to.throw("Invalid input");
        expect(() => library.calcPriceOfBook('ddd')).to.throw("Invalid input");
        expect(() => library.calcPriceOfBook('book', 11.11)).to.throw("Invalid input");
        expect(() => library.calcPriceOfBook(undefined, 2003)).to.throw("Invalid input");
        expect(() => library.calcPriceOfBook(2000, 'nook')).to.throw("Invalid input");
    })
    it('has valid input', ()=> {
        expect(library.calcPriceOfBook('Book', 2000)).to.equals(`Price of Book is 20.00`);
        expect(library.calcPriceOfBook('Book', 1980)).to.equals(`Price of Book is 10.00`);
        expect(library.calcPriceOfBook('Book', 1966)).to.equals(`Price of Book is 10.00`);
    })
})
describe('findBook', ()=>{

    it('valid input', ()=>{
        expect(library.findBook(['Troy', 'Life Style', 'Torronto'], 'Troy')).to.equals('We found the book you want.')  
    })
    it('has empty array input', ()=>{
        expect(() => library.findBook([], 'Troy')).to.throw('No books currently available')
    })
    it('has not the book', ()=>{
       expect(library.findBook(['Troy', 'Life Style', 'Torronto'], 'Random')).to.equals('The book you are looking for is not here!')
    })
})
describe('arrangeTheBooks', ()=>{
    it('has valid input', ()=>{
        expect(library.arrangeTheBooks(35)).to.equals("Great job, the books are arranged.");
        expect(library.arrangeTheBooks(40)).to.equals("Great job, the books are arranged.");
    })
    it('has no space left', ()=>{ 
        expect(library.arrangeTheBooks(46)).to.equals("Insufficient space, more shelves need to be purchased.");
    })
    it('has invalid input', () => {
        expect(() => library.arrangeTheBooks(-9)).to.throw("Invalid input");
        expect(() => library.arrangeTheBooks(6.8)).to.throw("Invalid input");
        expect(() => library.arrangeTheBooks('')).to.throw("Invalid input");
        expect(() => library.arrangeTheBooks('ddd')).to.throw("Invalid input");
        expect(() => library.arrangeTheBooks([])).to.throw("Invalid input");
        expect(() => library.arrangeTheBooks({})).to.throw("Invalid input");

    })
})

