// Pathe Diallo

const readlineSync = require('readline-sync');

let input = readlineSync.question("Enter a string: ").toLowerCase();

let freq = {};
let firstRepeat = null;

for (let char of input) {
  if (char >= 'a' && char <= 'z') {
    freq[char] = (freq[char] || 0) + 1;

    if (freq[char] === 2 && firstRepeat === null) {
      firstRepeat = char;
    }
  }
}

console.log("Letter frequencies:");
for (let key in freq) {
  console.log(`${key}: ${freq[key]}`);
}

console.log("First repeated letter:", firstRepeat);