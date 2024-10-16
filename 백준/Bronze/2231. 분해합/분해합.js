// 분해합 N의 가장 작은 생성자를 출력하기. 없으면 0 출력하기
// O(1), O(N), O(logN) 가능

const N = Number(require("fs").readFileSync(0).toString().trim()); // 216 -> 198
let answer = 0;
// 생성자는 1~N-1
for (let i = 0; i < N; i++) {
  let sum = i; // 생성자의 합은 생성자에서 먼저 시작
  let num = i;

  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  // sum = sum + 각 자릿수 합
  // sum 이 N과 같다면, 생성자를 찾은 것
  if (sum === N) {
    answer = i;
    break;
  }
}
console.log(answer);
