import exp from 'constants'
import { chunkify } from './utils'

describe('chunkify', () => {


    it('should return an array of length equal to the number of chunks requested', () => {
      const start = 1;
      const range = 10;
      const chunks = 4;

      const result = chunkify(start, range, chunks);

      expect(result).toHaveLength(chunks);
    });


    it('should return an array of tuples, each containing a start number and a range', () => {
      const start = 1;
      const range = 10;
      const chunks = 4;

      const result = chunkify(start, range, chunks);

      result.forEach(([chunkStart, chunkRange]) => {
        expect(chunkStart).toBeDefined();
        expect(chunkRange).toBeDefined();
      });
    });


    it('should return tuples with correct start and range values for evenly divisible ranges', () => {
      const start = 1;
      const range = 10;
      const chunks = 4;

      const result = chunkify(start, range, chunks);

      result.forEach(([chunkStart, chunkRange]) => {
        expect(chunkStart).toBeGreaterThanOrEqual(start);
        expect(chunkStart).toBeLessThanOrEqual(start + range - 1);
        expect(chunkRange).toBeGreaterThanOrEqual(0);
        expect(chunkRange).toBeLessThanOrEqual(range);
      });
    });


    it('should throw an error if chunks is not a positive integer', () => {
      const start = 1;
      const range = 10;
      const chunks = -4;

      expect(() => {
        chunkify(start, range, chunks);
      }).toThrow('Chunks must be a positive integer');
    });


    it('should throw an error if start or range are not integers', () => {
      const start = 1.5;
      const range = '10';
      const chunks = 4;

      expect(() => {
        // @ts-expect-error
        chunkify(start, range, chunks);
      }).toThrow('Start and range must be integers');
    });


    it('should return an empty array if range is 0', () => {
      const start = 1;
      const range = 0;
      const chunks = 4;

      const result = chunkify(start, range, chunks);

      expect(result).toEqual([]);
    });

    it('should return an array of tuples, each containing a start number and a range', () => {
        const start = 1;
        const range = 100;
        const chunks = 4;
    
        const result = chunkify(start, range, chunks);
    
        expect(result[0]).toEqual([1, 25]);
        expect(result[1]).toEqual([26, 25]);
        expect(result[2]).toEqual([51, 25]);
        expect(result[3]).toEqual([76, 25]);

        });


    it('should return an array of tuples, each containing a start number and a range pt.2', () => {
        const start = 1;
        const range = 6;
        const chunks = 4;
    
        const result = chunkify(start, range, chunks);
    
        expect(result[0]).toEqual([1, 2]);
        expect(result[1]).toEqual([3, 2]);
        expect(result[2]).toEqual([5, 1]);
        expect(result[3]).toEqual([6, 1]);
        });
});
