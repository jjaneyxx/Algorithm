const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");
// input 은 문자열로 이루어진 객체

for (i = 0; i <= input.length - 2; i++) {
  let array = input[i].split(" ").map(Number);
  console.log(array[0] + array[1]);
}
