// 테스트 케이스 개수
// 여러 줄에 A 와 B

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let array = [];

let num = Number(input[0]); //5

for (let i = 1; i <= num; i++) {
  array = input[i].split(" ").map(Number);
  let sum = array[0] + array[1];
  console.log(sum);
  sum = 0; // 초기화
}
