import { generatePrimes, max, min } from './generatePrimes'
import { generatePrimesWithWorkers } from './generatePrimesWithWorkers'
import { equalsCheck } from './utils'


generatePrimesWithWorkers(min, max).then((primes) => {
  const originalPrimes = generatePrimes(min, max)
      console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)
      console.log(`Primes generated by workers: ${primes.length}`)
      console.log(`Primes generated by original: ${originalPrimes.length}`)

    if(equalsCheck(primes, originalPrimes)) {
      console.log('Primes generated by workers match primes generated by original')
      return
    }

      console.log('Primes generated by workers do not match primes generated by original')
      const missingPrimes = originalPrimes.filter(item => primes.indexOf(item) == -1);

      console.log(`Missing primes: ${missingPrimes}`)
})

