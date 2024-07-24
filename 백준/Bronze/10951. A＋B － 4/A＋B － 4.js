const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  let array = input[i].split(" ").map(Number);
  console.log(array[0] + array[1]);
}
