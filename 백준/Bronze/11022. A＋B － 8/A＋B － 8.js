let input = require("fs").readFileSync(0).toString().trim().split("\n");

// for 문 안에서 요소(문자열->배열, -> 숫자),
for (let i = 1; i <= input[0]; i++) {
  input[i] = input[i].split(" ").map((v) => +v);
  console.log(`Case #${i}: ${input[i][0]} + ${input[i][1]} = ${input[i][0] + input[i][1]}`);
}
