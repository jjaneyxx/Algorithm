/**
 * 입력 두 줄 : 재환이가 내는 아, 의사가 내는 아
 * 두 문자열은 모두 a 와 h
 * a 는 0개 이상
 * h는 항상 마지막에 하나
 * 입력 두 줄이 일치하면 go 아니면 no
 * 문자열에서 특정 문자 개수 세서 반환
 */

const input = require("fs").readFileSync(0).toString().trim().split("\n");

let str = input[0];
let doc = input[1];
let a = /a/g; // str 에서 a 문자 찾기
let strCount = 0;
let docCount = 0;

// 재환의 a 의 개수 >= 의사 a 의 개수

let strMatches = str.match(a);
let docMatches = doc.match(a);

if (strMatches) {
  strCount = strMatches.length;
}

if (docMatches) {
  docCount = docMatches.length;
}

//console.log(strCount); //3
//console.log(docCount); //5

if (strCount >= docCount) {
  console.log("go");
} else {
  console.log("no");
}
