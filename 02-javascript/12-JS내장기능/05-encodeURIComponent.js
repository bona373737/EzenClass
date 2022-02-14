/* 
encodingURIComponent(String)

알파벳과 숫자 및 비예약 표식을 제외한 모든 글자를 변환
 */

const set1 = ';,/?:@&=+$#'; //예약문자
const set2 = "-_.!~*'()"; //비예약문자
const set3 = 'ABC abc 123'; // 알파벳 및 숫자,공백
const set4 = "자바스크립트";


const enc1 = encodeURIComponent(set1);
const enc2 = encodeURIComponent(set2);
const enc3 = encodeURIComponent(set3);
const enc4 = encodeURIComponent(set4);

console.log("인코딩성공 : " + enc1);
console.log("인코딩실패 : " + enc2);
console.log("인코딩실패 : " + enc3);
console.log("인코딩성공 : " + enc4);


console.log("\n인코딩된 문자열을 원래의 문자열로 역변환(디코딩)----------------------")
console.log(decodeURIComponent(enc1));
console.log(decodeURIComponent(enc2));
console.log(decodeURIComponent(enc3));
console.log(decodeURIComponent(enc4));