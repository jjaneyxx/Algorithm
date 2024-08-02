let _ = require("fs").readFileSync(0).toString().trim().split("\n");
let num = +_[0];
let arr = _[1].split("").map((v) => +v); // 문자열 -> 배열 -> 요소(문자->숫자)
let answer = 0;
// console.log(arr);

for (let i = 0; i < num; i++) {
  answer += arr[i];
}

console.log(answer);
