// 문자열 처리 
/* 
문자열은 그 자체가 객체이다. 
String 객체는 멤버변수(프로퍼티)와 메서드(함수)가 내장되어 있다. 

String객체의 메서드
-변수가 담고 있는 내용을 가공하거나 특정내용을 추출하는 기능
 이 기능들의 공통점은 원본내용은 변하지 않고 가공결과만을 리턴한다.
*/

//문자열변수를 만드는 정석의 방법
const str1 = new String("Hello javascript");
console.log(str1);
//--> 자주사용되므로 변수형식으로 문자열 만들수 있도록 지원됨
const msg = "Life is too short, you need Javascript";
console.log(msg);

//String객체의 메서드 종류
console.log("\nString객체.length -------------------------------");
const mylength = msg.length;
console.log("문자열길이(공백,특수문자포함) : " + mylength);


console.log("\nString객체.charAt() ------------------------------");
const str2nd = msg.charAt(2);
console.log("인덱스번호 2번의 문자열 : " + str2nd);
console.log("인덱스번호 3번의 문자열 : " + msg[3]);


console.log("\nString객체.indexOf() -----------------------------");
const p1 = msg.indexOf("f");
console.log("f가 처음 나타나는 인덱스번호 : " + p1);
console.log("없는 문자열을 indexOf한 경우의 반환값 : " + msg.indexOf("z"));
console.log("단어나 문장을 indexOf한 경우 단어첫글자의 위치를 반환 :" + msg.indexOf("is"));
//indexOf에 파라미터 2개 
const p2 = msg.indexOf("i");
let p3 = msg.indexOf("i");
console.log(p2, p3);
p3 = msg.indexOf("i", p2 + 1);
console.log("또다른 i값을 첫번째 i값의 인덱스 그 다음번호부터 탐색(두번째 i : %d)", p3);


console.log("\nString객체.lastIndexOf() ------------------------");
const p4 = msg.lastIndexOf("r");
console.log("a의 마지막 위치 인덱스값 : " + p4);

//응용
if (msg.indexOf("Hello") > -1) {
    console.log("Hello가 포함됨");
} else {
    console.log("Hello가 포함되지 않음")
};


console.log("\nString객체.substring() ------------------------");
const subString1 = msg.substring(0, 17);
console.log("문자열자르기 0부터 17전까지 : " + subString1);
//두번째 파라미터가 없는 경우 지정된 위치부터~끝가지
const subString2 = msg.substring(19);
console.log("문자열자르기 19부터~끝까지 : " + subString2);


console.log("\nString객체.toUpperCase() ------------------------");
const up = msg.toUpperCase();
console.log("모든 글자의 대문자 변환 : " + up);


console.log("\nString객체.toLowerCase() ------------------------");
const low = msg.toLowerCase();
console.log("모든 글자의소문자 변환 : " + low);


console.log("\nString객체.trim() ------------------------");
const src1 = "   Hello World   ";
const src2 = src1.trim();
console.log(src1);
console.log(src2);


console.log("\nString객체.split() ------------------------");
//문자열에 포함된 구분자를 기준으로 문자열을 잘라 배열로 반환한다.
const txt = "HTML,CSS,JAVASCRIPT,WOW";
const arr = txt.split(",");
console.log(arr);


console.log("\nString객체.replace() ------------------------");
//첫번째 파라미터내용을 두번째 파라미터로 변경한 결과 반환
//첫번째 파라미터와 일치하는 내용이 둘 이상 존재할 경우 첫번째 항복만 변경한다.
const txt2 = txt.replace(",", "$");
console.log(txt);
console.log(txt2);


console.log("\nString객체.replaceAll() ------------------------");
const test = "HTML,Javascript,CSS,JAVASCRIPT,WOW,Javascript";
//대소문자 구분함
console.log(test);
console.log(test.replaceAll("Javascript", "자바스크립트"));