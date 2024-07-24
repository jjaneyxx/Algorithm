
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const totalSum =
  Number(input[0]) ** 2 +
  Number(input[1]) ** 2 +
  Number(input[2]) ** 2 +
  Number(input[3]) ** 2 +
  Number(input[4]) ** 2;
const answer = totalSum % 10;
console.log(answer);
