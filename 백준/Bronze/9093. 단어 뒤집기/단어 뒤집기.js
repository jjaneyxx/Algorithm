//9093. 단어 뒤집기
// 5:12 - 5:35 
let [N, ...arr] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim());
N = +N;
let answer = "";
// [ 'I am happy today\r', 'We want to win the first prize' ]
for (let i = 0; i < N; i++) {
  let sentence = arr[i].split(" "); // 단어 배열
  sentence.forEach((item) => (answer += `${item.split("").reverse().join("")} `));
  console.log(answer.trim());
  answer = "";
}
