let input = require("fs").readFileSync(0).toString().trim().split(" ");
let [d1, d2, d3] = input.map((v) => +v); // 3 3 6
let answer = 0;

if (d1 == d2 && d2 == d3) {
  answer = 10000 + d1 * 1000;
} else if (d1 != d2 && d2 != d3 && d1 != d3) {
  answer = Math.max(d1, d2, d3) * 100;
} else {
  // 같은 눈이 2개만 나오는 경우
  if (d1 == d2 && d2 != d3) {
    answer = 1000 + d1 * 100;
  } else if (d1 == d3 && d1 != d2) {
    answer = 1000 + d1 * 100;
  } else if (d2 == d3 && d1 != d2) {
    answer = 1000 + d2 * 100;
  }
}

console.log(answer);
