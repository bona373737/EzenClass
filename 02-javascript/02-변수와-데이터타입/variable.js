"use strict";

/*
ES5의 var : 전역변수

원칙적으로 한번 선언한 변수는 재선언이 불가능하다(데이터가 소실의 위험이 있으므로) 
근데 자바스크립트에서는 가능
일반적인 프로그래밍 언어규칙에 위배되므로 전역변수를 위한 var 키워드 사용은 권장되지 않는다.
*/
var myNumber1;
myNumber1 = 100;
console.log(myNumber1);

var myNumber2 = 123;
console.log(myNumber2);
myNumber2 = 456;
console.log(myNumber2);

var myNumber3 = 789;
var myNumber3 = 999;
console.log(myNumber3);

/*
ES6의 let 

ES6버전에서 새로 추가된 변수 생성방법
대부분의 프로그래밍 언어에서 말하는 일반적인 변수의 생성규칙을 따른다. 
(중복선언 불가, 변수의 스코프(유효번위))
*/
let yourNumber1;
yourNumber1 = 100;
console.log(yourNumber1);

let yourNumber2 = 200;

// 중복선언 불가하여 에러발생"SyntaxError: Identifier 'yourNumber3' has already been declared"
let yourNumber3 = 1;
let yourNumber3 = 2;
