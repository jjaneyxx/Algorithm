const input = require("fs").readFileSync(0).toString().trim().split("\n");
// console.log(input);

let num = parseInt(input[0]);
// console.log(num);

for (let i = 1; i < input.length; i++) {
  let taskCase = input[i].trim(); // 문자열 -> charAt()
  console.log(taskCase.charAt(0) + taskCase.charAt(taskCase.length - 1));
}
