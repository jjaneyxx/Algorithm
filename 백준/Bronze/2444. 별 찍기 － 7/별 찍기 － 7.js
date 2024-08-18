const N = +require("fs").readFileSync(0).toString().trim();
let answer = "";

// 위에서 1부터 N-1 줄까지 먼저 출력
// 이후 N부터 1줄까지 출력

// 위쪽 삼각형 부분 출력 (1부터 N-1까지)
for (let i = 1; i < N; i++) {
  // i 는 줄의 번호
  let blank = " ".repeat(N - i);
  let stars = "*".repeat(2 * i - 1);
  console.log(blank + stars);
}

// 아래쪽 삼각형 부분 출력 (N부터 1까지) 
for (let j = N; j >= 1; j--) {
  let blank = " ".repeat(N - j);
  let stars = "*".repeat(2 * j - 1);
  console.log(blank + stars);
}