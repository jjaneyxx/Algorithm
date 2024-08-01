const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
let num = +input;

let line = "";

for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num - i; j++) {
    line += " ";
  }
  for (let k = 1; k <= i; k++) {
    line += "*";
  }
  // 출력, 다음 줄로 넘어가기 전 초기화
  console.log(line);
  line = "";
}
