/*
N : 바구니 번호
M : 바꾸는 횟수 
*/

const input = require("fs").readFileSync(0).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number); // N : 5 , M : 4
let arr = [];
let temp = ""; // 바구니끼리 공을 바꿀 때 사용
let answer = "";

for (let s = 0; s < N; s++) {
  arr[s] = s + 1;
}

for (let s = 1; s <= M; s++) {
  let [i, j] = input[s].split(" ");
  temp = arr[i - 1];
  arr[i - 1] = arr[j - 1];
  arr[j - 1] = temp;
}

for (let s = 0; s < N; s++) {
  answer += arr[s] + " ";
}

console.log(answer.trim());
