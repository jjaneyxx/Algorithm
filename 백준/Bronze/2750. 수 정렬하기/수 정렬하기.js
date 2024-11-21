let [N, ...arr] = require("fs").readFileSync(0).toString().trim().replace(/\r/g, "").split("\n");
arr = arr.map(Number).sort((a, b) => a - b);
arr.forEach((item) => console.log(item));
