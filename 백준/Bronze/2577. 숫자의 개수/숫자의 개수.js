let _ = require("fs").readFileSync(0).toString().trim().split("\n");

let num = String(_[0] * _[1] * _[2]);

for (let i = 0; i <= 9; i++) {
  let count = 0;
  for (let n of num) {
    if (Number(n) === i) {
      count++;
    }
  }
  console.log(count);
}
