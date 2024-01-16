import { Worker } from 'node:worker_threads'
import { chunkify } from './utils'
import { cpus } from 'node:os'
import path from 'node:path'

const defaultNumThreads = cpus().length;

function createWorker([start, range]: [start: number, range: number]) {
  return new Promise<number[]>((resolve, reject) => {
    const worker = new Worker(path.resolve(__dirname, './worker'), {
      workerData: [start, range] });

    worker.on('message', (msg) => {
      resolve(msg)
    })

    worker.on('error', (err) => {
      reject(err)
    })
  })
}

export async function generatePrimesWithWorkers(start: number, range: number, numThreads = defaultNumThreads): Promise<number[]> {
  const result = await Promise.all(chunkify(start, range, numThreads).map(createWorker))
  return result.flat()
}