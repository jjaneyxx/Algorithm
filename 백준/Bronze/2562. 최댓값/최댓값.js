let _ = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim());

_ = _.map((v) => +v);
console.log(Math.max(..._));
console.log(_.indexOf(Math.max(..._)) + 1);
