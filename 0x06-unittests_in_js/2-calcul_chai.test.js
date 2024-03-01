const calculateNumber = require('./2-calcul_chai');
const { expect } = require('chai');

describe('test calculateNumber', () => {
  it('should return the sum of two numbers', () => {
    expect(calculateNumber('SUM', 1.1, 1.1)).to.equal(2);
  });

  it('should return a negative sum', () => {
    expect(calculateNumber('SUM', -1.1, -1.1)).to.equal(-2);
  });

  it('should handle zero', () => {
    expect(calculateNumber('SUM', 1.1, 0)).to.equal(1);
  });

  it('should return the difference of two numbers', () => {
    expect(calculateNumber('SUBTRACT', 1.1, 1.1)).to.equal(0);
  });

  it('should return a negative difference', () => {
    expect(calculateNumber('SUBTRACT', -1.1, -1.1)).to.equal(0);
  });

  it('should handle zero', () => {
    expect(calculateNumber('SUBTRACT', 1.1, 0)).to.equal(1);
  });

  it('should return the division of two numbers', () => {
    expect(calculateNumber('DIVIDE', 1.1, 1.1)).to.equal(1);
  });

  it('should return a negative division', () => {
    expect(calculateNumber('DIVIDE', -1.1, -1.1)).to.equal(1);
  });

  it('should handle zero', () => {
    expect(calculateNumber('DIVIDE', 1.1, 0)).to.equal('Error');
  });

  it('should handle division by zero', () => {
    expect(calculateNumber('DIVIDE', 1.1, 0)).to.equal('Error');
  });

  it('should handle invalid operation', () => {
    expect(calculateNumber('INVALID', 1.1, 1.1)).to.equal('Error');
  });
});
