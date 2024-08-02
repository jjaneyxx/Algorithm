let input = require("fs").readFileSync(0).toString().trim().split(" ");
let [a, b] = input.map((v) => +v);
console.log((a + b) * (a - b));
