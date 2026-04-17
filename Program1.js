// Pathe Diallo

const readlineSync = require('readline-sync');

let n = parseInt(readlineSync.question("Enter a positive number (<=1000): "));

let primes = [];

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Get primes
for (let i = 2; i <= n; i++) {
  if (isPrime(i)) {
    primes.push(i);
  }
}

console.log("Primes:", primes);

// Find gaps
let largestGap = 0;
let gapPair = [0, 0];
let totalGap = 0;

for (let i = 1; i < primes.length; i++) {
  let gap = primes[i] - primes[i - 1];
  totalGap += gap;

  if (gap > largestGap) {
    largestGap = gap;
    gapPair = [primes[i - 1], primes[i]];
  }
}

let avgGap = (totalGap / (primes.length - 1)).toFixed(2);

console.log(`Largest gap is ${largestGap}, between ${gapPair[0]} and ${gapPair[1]}`);
console.log(`Average gap is ${avgGap}`);