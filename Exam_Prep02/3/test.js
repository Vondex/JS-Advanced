const cinema = require('./cinema');
const { expect } = require('chai');


describe('Cinema Test', ()=> {
    describe('showMovies', () => {
        it('empty array', () => {
          expect(cinema.showMovies([])).to.be.equal("There are currently no movies to show.")
        });
        it('array of movies', ()=>{
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).to.be.equal('King Kong, The Tomorrow War, Joker');
        });
        it('array of single movie', ()=>{
            expect(cinema.showMovies(['King Kong'])).to.be.equal('King Kong');
        });
        
    });
    describe('ticketPrice', () => {
        it('Premiere Price', () => {
          expect(cinema.ticketPrice('Premiere')).to.be.equal(12.00);
        });
        it('Normal Price', () => {
            expect(cinema.ticketPrice('Normal')).to.be.equal(7.50);
        });
        it('Discount Price', () => {
            expect(cinema.ticketPrice('Discount')).to.be.equal(5.50);
        });

        it('invalid input', () => {
            expect(() => cinema.ticketPrice('invalid')).to.throw("Invalid projection type.");  
            
        });  
    });

    describe('swapSeatsInHall', () => {
        it('only one param given', () => {
          expect(cinema.swapSeatsInHall(1)).to.be.equal("Unsuccessful change of seats in the hall.");
        });
        it('not integers', () => {
            expect(cinema.swapSeatsInHall(2, 1.05)).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(2.05, 1)).to.be.equal("Unsuccessful change of seats in the hall.");
        });
        it('>20', () => {
            expect(cinema.swapSeatsInHall(1, 22)).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(23, 4)).to.be.equal("Unsuccessful change of seats in the hall.");
            
        });
        it('negative number', () => {
            expect(cinema.swapSeatsInHall(5, -5)).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(-5, 1)).to.be.equal("Unsuccessful change of seats in the hall.");
        });
        it('0 as given number', () => {
            expect(cinema.swapSeatsInHall(0, -5)).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(3, 0)).to.be.equal("Unsuccessful change of seats in the hall.");

        });
        it('equal nums', () => {
            expect(cinema.swapSeatsInHall(5, 5)).to.be.equal("Unsuccessful change of seats in the hall.");
        });
        it('both not in the range', () => {
            expect(cinema.swapSeatsInHall(0, 21)).to.be.equal("Unsuccessful change of seats in the hall.");
        });
        it('invalid type', () => {
            expect(cinema.swapSeatsInHall('movie', null)).to.be.equal("Unsuccessful change of seats in the hall.");
        });
        
        it('valid input', () => {
            expect(cinema.swapSeatsInHall(5, 10)).to.be.equal("Successful change of seats in the hall.");    
            expect(cinema.swapSeatsInHall(1, 20)).to.be.equal("Successful change of seats in the hall.");        
        });
        
        
    });

});