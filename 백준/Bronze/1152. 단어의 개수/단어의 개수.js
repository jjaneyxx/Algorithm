let input = require("fs").readFileSync(0).toString().trim().split(" ");
let count = 0;

for (let i = 0; i < input.length; i++) {
  // 입력이 공백 하나일 때를 대비, 요소가 공백이 아닐 때만 카운트
  if (input[i] !== "") {
    count++;
  }
}

console.log(count);
