let input = require("fs").readFileSync(0).toString().trim().split("\n");
let [people, arr, standardArr] = input;
people = +people; // 사람 수 : 23
arr = arr.split(" ");
standardArr = standardArr.split(" ");
let TCount = 0; // 필요한 티셔츠 묶음 수

for (let i = 0; i < arr.length; i++) {
  TCount += Math.ceil(arr[i] / standardArr[0]);
}

// 펜은 최대 몇 묶음 ?
let pen = `${Math.floor(people / standardArr[1])} ${people % standardArr[1]}`; // 23 / 7 -> 7이 문자열이여도 숫자가 나오는 이유 ?

console.log(`${TCount}\n${pen}`);
