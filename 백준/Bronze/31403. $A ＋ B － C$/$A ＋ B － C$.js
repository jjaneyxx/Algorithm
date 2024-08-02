// 입력
let _ = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim());

/* 풀이
A,B,C 수
A,B,C 문자, 마지막에 뺄 때는 숫자로 변환
*/

let [a, b, c] = _.map((v) => +v);

/*
console.log(a + b - c);
console.log(+(_[0] + _[1]) - +_[2]);
*/

console.log(`${a + b - c}\n${+(_[0] + _[1]) - +_[2]}`);