
describe('primeSifting', function() {
    it("finds if a number up to 5 is prime", function(){
        expect(primeSifting(5)).to.eql([2, 3]);
    });

    it("finds if a number up to 9 is prime", function(){
        expect(primeSifting(9)).to.eql([2, 3, 5, 7]);
    });

    it("finds if a number up to 26 is prime", function(){
        expect(primeSifting(26)).to.eql([2, 3, 5, 7, 11, 13, 17, 19, 23]);
    });

    it("finds if a number up to 0 is prime", function(){
        expect(primeSifting(0)).to.eql([2]);
    });

});
