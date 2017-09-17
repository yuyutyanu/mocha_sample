const chai = require("chai")
const expect = chai.expect
const calc = require("./../../src/calc.js");



describe("calc", function() {
    it("add", function() {
        expect(4).to.equal(calc.add(1,3));
    });

    it("multiply", function() {
        expect(6).to.equal(calc.multiply(2, 3));
    });
});