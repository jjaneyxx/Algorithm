// 10828. 스택
// 시간복잡도 생각할 때 10^4 ? 10^5?
const [N, ...arr] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim());
const stack = [];
let answer = "";

for (let i = 0; i < N; i++) {
  // push
  if (arr[i].startsWith("push")) stack.push(arr[i].split(" ")[1]);
  // top
  if (arr[i] === "top") {
    if (stack.length === 0) answer += "-1 ";
    else {
      answer += `${stack[stack.length - 1]} `;
    }
  }
  // size
  if (arr[i] === "size") {
    answer += `${stack.length} `;
  }
  // empty 
  if (arr[i] === "empty") {
    if (stack.length === 0) {
      answer += "1 ";
    } else {
      answer += "0 ";
    }
  }
  // pop 
  if (arr[i] === "pop") {
    if (stack.length === 0) {
      answer += "-1 ";
    } else {
      answer += `${stack.splice(stack.length - 1, 1)} `;
    }
  }
}

console.log(answer.trim());
