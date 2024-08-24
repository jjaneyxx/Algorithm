let input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim());
let sum = 0;
let totalCredits = 0;

for (let i = 0; i < 20; i++) {
  let arr = input[i].split(" ");
  let grade = arr[2]; // 과목평점 (점수)
  let credits = Number(arr[1]); // 학점

  if (grade === "P") {
    continue;
  } else {
    if (grade === "A+") grade = 4.5;
    else if (grade === "A0") grade = 4.0;
    else if (grade === "B+") grade = 3.5;
    else if (grade === "B0") grade = 3.0;
    else if (grade === "C+") grade = 2.5;
    else if (grade === "C0") grade = 2.0;
    else if (grade === "D+") grade = 1.5;
    else if (grade === "D0") grade = 1.0;
    else if (grade === "F") grade = 0.0;

    sum += grade * credits; // 과목평점*학점의 합 더하기
    totalCredits += credits; // 학점의 총합 구하기
  }
}
console.log(sum / totalCredits);
