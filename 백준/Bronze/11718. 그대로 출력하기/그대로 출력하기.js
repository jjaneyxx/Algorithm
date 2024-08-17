const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim());
let answer = "";

for (let i = 0; i < input.length; i++) {
  answer += input[i] + "\n";
}
console.log(answer.trim());
