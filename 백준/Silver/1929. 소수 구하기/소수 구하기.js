// 입력 처리
let [M, N] = require("fs").readFileSync(0).toString().trim().split(" ").map(Number);

// 에라토스테네스의 체
// true는 소수, false는 소수가 아님을 나타냄
const prime = new Array(N + 1).fill(true);

// 1은 소수가 아님
prime[1] = false;

for (let i = 2; i <= Math.sqrt(N); i++) {
  if (prime[i]) {
    for (let j = i * i; j <= N; j += i) {
      prime[j] = false;
    }
  }
}

const results = [];

for (let i = M; i <= N; i++) {
  if (prime[i]) results.push(i);
}

console.log(results.join("\n"));
