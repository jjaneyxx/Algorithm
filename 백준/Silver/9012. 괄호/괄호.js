let input = require("fs").readFileSync(0).toString().trim().split("\n");
const caseCount = +input[0];

for (let i = 1; i <= caseCount; i++) {
  const cases = input[i];
  const stack = [];
  let result = true;

  for (let j = 0; j < cases.length; j++) {
    if (cases[j] === "(") {
      stack.push(1);
    } else if (cases[j] === ")") {
      if (!stack.pop()) {
        result = false;
        break;
      }
    }
  }

  if (stack.length !== 0) {
    result = false;
  }

  result === false ? console.log("NO") : console.log("YES");
}
