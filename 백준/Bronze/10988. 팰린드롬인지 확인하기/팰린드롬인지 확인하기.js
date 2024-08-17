let input = require("fs").readFileSync(0).toString().trim();
const arr = [...input];
let temp = [];

for (let i = 0; i <= Math.floor(arr.length / 2) - 1; i++) {
  // 절반까지만 비교
  if (arr[i] === arr[arr.length - (i + 1)]) {
    temp += "true"; // 펠린드롬 맞음
  } else {
    temp += "false"; //펠린드롬 아님
  }
}
temp.includes(false) ? console.log(0) : console.log(1);
