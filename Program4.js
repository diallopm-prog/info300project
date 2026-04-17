// Pathe Diallo

const readlineSync = require('readline-sync');

let start = parseInt(readlineSync.question("Enter start number: ")); 
// Fixed: converted input to number

let end = parseInt(readlineSync.question("Enter end number: ")); 
// Fixed: converted input to number

let count = 0;

for (let i = start; i <= end; i++) {
  if (i % 2 === 0) { 
    // Fixed: used modulus to check even numbers
    count += 1; 
    // Fixed: corrected += instead of =+
  }
}

console.log("Even numbers between " + start + " and " + end + ": " + count);