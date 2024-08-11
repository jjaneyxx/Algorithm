// 입력
let input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim());
let arr = [];
// 숫자로 변환 -> 숫자로 이루어진 배열
input = input.map(Number);

for (let i = 0; i < input.length; i++) {
  let remain = input[i] % 42;
  arr.push(remain);
}
const newArr = [...new Set(arr)];
console.log(newArr.length);

/* 
배열에 값 추가 : push 
배열에서 중복되는 값 제거 : Set
*/