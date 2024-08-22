// 입력 : N=4, rest = [ 'aba', 'abab', 'abcabc', 'a' ]
let [N, ...rest] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim());
N = +N;
let answer = 0;

for (let i = 0; i < N; i++) {
  let arr = rest[i].split("");
  const set = new Set(arr);

  for (const a of set) {
    let indexNum = arr.lastIndexOf(a) - arr.indexOf(a) + 1; //
    let count = arr.filter((item) => a === item).length;

    if (indexNum !== count) {
      answer++;
      break;
    }
  }
}

console.log(N - answer);

// 배열에서 중복되는 문자 수 구하기
// indexOf - lastIndexof 구하기
