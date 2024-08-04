let input = require("fs").readFileSync(0).toString().trim().split("\n");

let T = +input[0];

for (let i = 1; i <= T; i++) {
  input[i] = input[i].split(" ").map((v) => +v);
  console.log(`Case #${i}: ${input[i][0] + input[i][1]}`);
}
