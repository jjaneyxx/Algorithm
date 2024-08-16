const input = require("fs").readFileSync(0).toString().trim().split("\n");
const N = +input[0]; // 시험 본 과목 수
let scores = input[1].split(" ").map(Number);
const max = Math.max(...scores); // const 여도 펼칠수?
let sum = 0;

// 문자열 -> 배열

// 새 점수로 이루어진 temp 배열 만들기
for (let i = 0; i < N; i++) {
  // 최댓값
  scores[i] = (scores[i] / max) * 100;
  sum += scores[i];
}
console.log(sum / N);

// 바꿨을 때 점수가 max 보다 커지면 ? -> temp 로 복사
