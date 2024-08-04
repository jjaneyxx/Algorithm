let input = require("fs").readFileSync(0).toString().trim().split("\n");

let N = +input[0];
let arr = input[1].split(" ").map((v) => +v);

console.log(`${Math.min(...arr)} ${Math.max(...arr)}`);
