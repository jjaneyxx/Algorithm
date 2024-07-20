// 1부터 N까지를 각각 다른 줄에 출력
// 출력을 하나씩 해주면 시간 초과가 남. -> 문자열에 결과 + 개행문자를 넣어서 마지막에 출력해야 함
// 문자 + 숫자 =  문자???

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let answer = ""; // 여기에 공백이 있으면 X
let num = Number(input);

for (let i = 1; i <= num; i++) {
  answer += i + "\n";
}
console.log(answer);
