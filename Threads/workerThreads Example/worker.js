const { workerData, parentPort } = require('worker_threads');

function sum(n) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    result += i;
  }

  return result;
}

parentPort.postMessage(sum(workerData));