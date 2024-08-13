let num = `${require("fs").readFileSync(0)}`.trim();
console.log(num ? num.split(" ").length : 0);