const input = require("fs").readFileSync(0).toString().trim().split("\n");
// let [n1, n2] = input.map((v) => +v);
// console.log(`${n1}, ${n2}`); -> 472, 385

let a3 = Number(input[0]) * Number(input[1][2]);
let a4 = Number(input[0]) * Number(input[1][1]);
let a5 = Number(input[0]) * Number(input[1][0]);
let a6 = a3 + a4 * 10 + a5 * 100;

console.log(`${a3}\n${a4}\n${a5}\n${a6}`);

/*
(3) : n1 * n2 의 일의 자리
(4) : n1 * n2 의 십의 자리
(5) : n1 * n2 의 백의 자리
(6) : (3)+(4)*10 + (5)*100 
*/