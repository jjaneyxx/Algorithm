let input = require("fs").readFileSync(0).toString().trim().split("\n");
let totalMart = +input[0]; // 영수증에 적힌 총 금액
let totalSum = 0;

let lastIndex = +input[1] + 1; // 4 + 1 = 5

for (let i = 2; i <= lastIndex; i++) {
  let array = input[i].split(" "); // 문자열(input[i]) -> 배열
  let sum = +array[0] * +array[1]; // 예: 20000 * 5, 30000*2
  totalSum += sum; // totalSum = 10000, 10000+60000 ..
  sum = 0;
}

if (totalMart == totalSum) {
  console.log(`Yes`);
} else {
  console.log(`No`);
}
