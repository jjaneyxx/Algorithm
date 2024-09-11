const [n1, n2] = require("fs").readFileSync(0).toString().trim().split(" ");

let gcd = 1;
for (let i = 2; i <= Math.min(n1, n2); i++) {
  if (n1 % i === 0 && n2 % i === 0) gcd = i;
}

let n = 1;
while (n > 0) {
  if ((n1 * n) % n2 === 0) break;
  n++;
}
let lcm = n1 * n;
console.log(`${gcd}\n${lcm}`);