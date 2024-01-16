import { parentPort, workerData } from 'node:worker_threads'
import { generatePrimes } from './generatePrimes'
import { isNumberTuple } from './utils'

if (!parentPort) {
    throw new Error('No parent port')
}


if (!isNumberTuple(workerData)) {
    throw new Error('Invalid message')
}

console.log(`Starting worker with data: ${workerData.toString()}`)

const [chunkStart, chunkRange] = workerData;

const primes = generatePrimes(chunkStart, chunkRange);

parentPort.postMessage(primes);
