const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
let num = Number(input);

let line = "";
for (let i = 1; i <= input; i++) {
  for (let k = 1; k <= i; k++) {
    line = line + "*";
  }
  console.log(line);
  line = "";
}