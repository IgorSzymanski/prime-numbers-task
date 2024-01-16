import { generatePrimes, max, min } from './generatePrimes'
import { generatePrimesWithWorkers } from './generatePrimesWithWorkers'
import { equalsCheck } from './utils'

describe('generatePrimesWithWorkers', () => {
    it('should return the same array as the generatePrimes function', async () => {
        const resultWithWorkers = await generatePrimesWithWorkers(min, max, 2)
        const resultWithoutWorkers = generatePrimes(min, max)
        expect(equalsCheck(resultWithWorkers, resultWithoutWorkers)).toBe(true)
    }, 0)
})