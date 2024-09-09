let _ = require("fs").readFileSync(0).toString().trim().split("\n");
let arr = [..._[1]].map(Number); // 문자열 -> 숫자 배열
let sum = 0;
arr.forEach((item) => (sum += item));
console.log(sum);