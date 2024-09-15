//10798. 세로읽기

let input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim());
let lengthArr = []; // 입력 배열 요소의 길이 배열
let answer = "";

// _ 배열의 요소 중 가장 길이가 긴 요소의 길이 구하기
lengthArr = input.map((item) => item.length); // [5,5,5,5,5]
let lengthMax = Math.max(...lengthArr); // 6

for (let i = 0; i < lengthMax; i++) {
  input.forEach((item) => {
    if (item[i]) answer += item[i];
  });
}

console.log(answer);