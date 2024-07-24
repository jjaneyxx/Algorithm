// 수열 A 에서 X 보다 작은 수를 입력받은 순서대로 출력

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let firstLine = input[0]; // 문자열
let secondLine = input[1]; // 문자열
let answer = "";

let [N, X] = firstLine.split(" ").map(Number);
let array = secondLine.split(" ").map(Number);

for (let i = 0; i < N; i++) {
  // array 순회
  if (array[i] >= X) continue;
  else {
    answer += array[i] + " ";
        //console.log(array[i]); 한줄에 출력

  }
}

console.log(answer);
