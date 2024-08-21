let _ = `${require("fs").readFileSync(0)}`.trim().split("\n").map(Number);
// console.log(_);
let sum = 0;

for (let x of _) {
  sum += x;
}

console.log(sum);
