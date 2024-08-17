const input = require("fs").readFileSync(0).toString().trim();
let arr = input.split(""); // [ 'W', 'A' ]
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  let num = input[i].charCodeAt(0); // 87, 65

  if (num >= 65 && num <= 67) arr[i] = 2;
  else if (num >= 68 && num <= 70) arr[i] = 3;
  else if (num >= 71 && num <= 73) arr[i] = 4;
  else if (num >= 74 && num <= 76) arr[i] = 5;
  else if (num >= 77 && num <= 79) arr[i] = 6;
  else if (num >= 80 && num <= 83) arr[i] = 7; // 4
  else if (num >= 84 && num <= 86) arr[i] = 8;
  else if (num >= 87 && num <= 90) arr[i] = 9; // 4
}

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum + arr.length);
