let n = require("fs").readFileSync(0).toString().trim();
n = +n; // 숫자

function makeOne(n) {
  const dp = new Array(n + 1).fill(0); // dp 배열
  dp[1] = 0;

  for (let i = 2; i <= n; i++) {
    // 1로 빼는 연산이 기본, 2나 3으로는 나눌 수 없어도 언제나 1은 뺄 수 있음
    dp[i] = dp[i - 1] + 1;
    if (i % 2 === 0) dp[i] = Math.min(dp[i / 2] + 1, dp[i]);
    if (i % 3 === 0) dp[i] = Math.min(dp[i / 3] + 1, dp[i]);
  }
  return dp[n]; // Math.min 의 결과물
}

console.log(makeOne(n));
