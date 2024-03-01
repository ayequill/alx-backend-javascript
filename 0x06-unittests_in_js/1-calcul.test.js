const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('test calculateNumber', () => {
    it('should return the sum of two numbers', () => {
        assert.strictEqual(calculateNumber('SUM', 1.1, 1.1), 2);
    });
    
    it('should return a negative sum', () => {
        assert.strictEqual(calculateNumber('SUM', -1.1, -1.1), -2);
    });
    
    it('should handle zero', () => {
        assert.strictEqual(calculateNumber('SUM', 1.1, 0), 1);
    });
    
    it('should return the difference of two numbers', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.1, 1.1), 0);
    });
    
    it('should return a negative difference', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', -1.1, -1.1), 0);
    });
    
    it('should handle zero', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.1, 0), 1);
    });
    
    it('should return the division of two numbers', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.1, 1.1), 1);
    });
    
    it('should return a negative division', () => {
        assert.strictEqual(calculateNumber('DIVIDE', -1.1, -1.1), 1);
    });
    
    it('should handle zero', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.1, 0), 'Error');
    });
    
    it('should handle division by zero', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.1, 0), 'Error');
    });
    
    it('should handle invalid operation', () => {
        assert.strictEqual(calculateNumber('INVALID', 1.1, 1.1), 'Error');
    });
});