/*
연산자 연습문제

문제2.
자신의 나이를 의미하는 상수 `age`를 정의하고 이 값을 활용하여 
자신이 태어난 년도 `year`를 전역 변수 형식으로 산출하여 
"나는 OOOO년도에 태어났습니다."라는 형식의 문장으로 
이스케이프 문자를 활용하여 출력하시오.
*/
const thisYear = 2022;
const age = 32;
var year = thisYear - age + 1;
console.log("나는 %d년도에 태어났습니다.", year);


