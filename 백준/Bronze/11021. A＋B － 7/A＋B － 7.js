let input = require("fs").readFileSync(0).toString().trim().split("\n");

// console.log(input);
let T = +input[0];

/* 
_[1],..._[4] : 문자열 -> 배열, 숫자 
배열[0]+배열[1] -> for 문
*/

for (let i = 1; i <= T; i++) {
  let sum = 0;
  input[i] = input[i].split(" ").map((v) => +v);
  sum = input[i][0] + input[i][1];
  console.log(`Case #${i}: ${sum}`);
}