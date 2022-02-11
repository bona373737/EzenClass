/* 
encodeURI(String)

문자열을 URL에 포함시키기에 적절한 형태로 변환하는 기능
네이버검색창에 "자바스크립트"를 검색하면 검색창에 보여지는 URL은 아래와 같지만
https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=자바스크립트
실재로 브라우저가 인식하는 URL은 아래와 같은 주소이다.
https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8

인코딩 불가한 문자
A-Z, a-z, 0-9 ; , / ? : @ & = + $ - _ . ! ~ * ' () #
*/

const set1 = ';,/?:@&=+$#'; //예약문자
const set2 = "-_.!~*'()"; //비예약문자
const set3 = 'ABC abc 123'; // 알파벳 및 숫자,공백
const set4 = "자바스크립트";

//특수문자(예약문자 및 비예약문자)를 변환하지 못하기 때문에 UTF-8환경에서는 사용불가 
const enc1 = encodeURI(set1);
const enc2 = encodeURI(set2);
const enc3 = encodeURI(set3);
const enc4 = encodeURI(set4);

console.log("인코딩실패 : " + enc1);
console.log("인코딩실패 : " + enc2);
console.log("인코딩실패 : " + enc3);
console.log("인코딩성공 : " + enc4);


console.log("\n인코딩된 문자열을 원래의 문자열로 역변환(디코딩)----------------------")
console.log(decodeURI(enc1));
console.log(decodeURI(enc2));
console.log(decodeURI(enc3));
console.log(decodeURI(enc4));