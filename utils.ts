export function chunkify(start: number, range: number, chunks: number): [start: number, range: number][] {
  if (chunks <= 0 || !Number.isInteger(chunks)) {
    throw new Error('Chunks must be a positive integer');
  }

  if (!Number.isInteger(start) || !Number.isInteger(range)) {
    throw new Error('Start and range must be integers');
  }

  const chunkSize = Math.floor(range / chunks);
  const remainder = range % chunks;

  const result: [number, number][] = [];
  let currentStart = start;

  for (let i = 0; i < chunks; i++) {
    const currentRange = i < remainder ? chunkSize + 1 : chunkSize;
    
    if (currentRange > 0) {
      result.push([currentStart, currentRange]);
      currentStart += currentRange;
    } else {
      break;
    }
  }

  return result;
}

export function isNumberTuple(value: any): value is [number, number] {
    return Array.isArray(value) && value.length === 2 && typeof value[0] === 'number' && typeof value[1] === 'number'
}

export async function testFunctionPerformance<Return>(func: () => Return | Promise<Return>, testName: string, callback?: (value: Return) => void): Promise<number> {
  const tick = performance.now();
  const value = await func();
  const tock = performance.now();
  const timeElapsed = (tock - tick) / 1000;
  console.log(`Time elapsed for \`${testName}\`: ${timeElapsed} seconds`);
  callback?.(value);

  return timeElapsed;
}

export function equalsCheck(arr1: number[], arr2: number[]) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const a = arr1.sort();
    const b = arr2.sort();

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}