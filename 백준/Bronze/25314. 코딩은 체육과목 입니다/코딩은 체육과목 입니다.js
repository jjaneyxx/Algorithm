let _ = require("fs").readFileSync(0).toString().trim();
_ = Math.floor(+_ / 4);

let line = "";

for (let i = 0; i < _; i++) {
  line += "long ";
}

console.log(`${line}int`);
