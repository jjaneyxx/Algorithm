let [N, ...arr] = require("fs").readFileSync(0).toString().trim().replace(/\r/g, "").split("\n");
arr = arr.map(Number).sort((a, b) => a - b);
let ans = "";
arr.forEach((i) => (ans += i + "\n"));
console.log(ans.trim());