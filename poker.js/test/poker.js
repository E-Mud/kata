var chai = require('chai');
var expect = chai.expect;
var Poker = require('./../src/poker');

describe('Poker', function() {
  it('is equal', function() {
    var input = [["2H", "3D", "5S", "9C", "4D"], ["2C", "3H", "4S", "8C", "7H"]],
      expected = {winner : 0, combination : "HC"},
      poker = new Poker();

    expect({winner : 0, combination : "HC"}).to.deep.equal(expected);
    expect(Poker).to.not.be.undefined;
    expect(poker).to.not.be.undefined;
  });
});
