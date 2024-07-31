let input = require("fs").readFileSync(0).toString().trim();
input = +input;
let answer = 0;

for (let i = 1; i <= input; i++) {
  answer += i;
}

console.log(answer);