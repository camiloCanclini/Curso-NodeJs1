const { workerData, parentPort } = require('worker_threads');

const fibonacci = n => {
  if (n <= 1) {
    return 1
  }

  return fibonacci(n - 1) + fibonacci(n - 2)
}

parentPort.postMessage(fibonacci(workerData));