let arr = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim())
  .map(Number);
let answer = [];

for (let i = 1; i <= 30; i++) {
  if (!arr.includes(i)) {
    answer.push(i);
  }
}

console.log(Math.min(...answer));
console.log(Math.max(...answer));
