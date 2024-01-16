import { generatePrimes, max, min, originalGeneratePrimes } from './generatePrimes'

describe('generatePrimes', () => {
    it('should return an empty array when start is positive and range is negative', () => {
      const result = generatePrimes(5, -10);
      expect(result).toEqual([]);
    });

    
    it('should return 2, 3, 5, 7, 9, 11', () => {
      const result = generatePrimes(2, 10);
      expect(result).toEqual([2, 3, 5, 7, 11]);
    });

    it('should return an array with 2 when start is 1 and range is 1', () => {
      const result = generatePrimes(2, 1);
      expect(result).toEqual([2]);
    });

    it('should return an array with 2 and 3 when start is 2 and range is 2', () => {
      const result = generatePrimes(2, 2);
      expect(result).toEqual([2, 3]);
    });

    it('should return the same array as the originalGeneratePrimes function', () => {
      const result = generatePrimes(min, max / 100);
      const originalResult = originalGeneratePrimes(min, max / 100);
      expect(result).toEqual(originalResult);
    }, 0);
});
