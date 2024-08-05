let input = require("fs").readFileSync(0).toString().trim().split("\n");
let T = +input[0]; // 테스트케이스 개수
let answer = "";

// 테스트 케이스 순회
for (let i = 1; i <= T; i++) {
  let R = +input[i].split(" ")[0]; // 반복 횟수
  let S = input[i].split(" ")[1]; // 문자열 -> 배열

  // 문자열 S 를 순회
  for (let k = 0; k < S.length; k++) {
    answer += S[k].repeat(R);
  }
  answer += "\n";
}

console.log(answer);