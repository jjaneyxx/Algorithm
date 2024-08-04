let _ = require("fs").readFileSync(0).toString().trim().split("\n");
let N = +_[0];
let v = +_[2];
let arr = _[1].split(" ").map((v) => +v);

let count = arr.filter((element) => v === element).length;
console.log(count);