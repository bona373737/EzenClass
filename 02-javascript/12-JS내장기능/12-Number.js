/* 
숫자처리와 관련된 기본기능들을 제공하는 내장클래스

isNaN,parseInt,parseFloat 함수를 개선해서 Number객체로 정리되어 나온것
 */
let a = new Number(123);
console.log(a);
console.log(typeof a);
console.log(a == 123);
console.log(a === 123);

//Number()함수와 parseInt,parseFloat의 차이점
//Number()함수는 실수,정수 구분없이 문자열을 숫자로 변환해줌
//parseInt()   -무조건 정수로 변환
//parseFloat() - 무조건 실수로 변환
let b1 = Number('123');
let b2 = Number('123.123')

//parseInt,parseFloat과 동일한 메서드
console.log(Number.parseInt('123.33'));
console.log(Number.parseFloat('123.33'));


//Number객체의 static property
console.log("표현가능한 가장 큰 양수 " + Number.MAX_VALUE);
console.log("표현가능한 가장작은 양수" + Number.MIN_VALUE); //0보다 크지만 0에 가장 가까운양수

//숫자가 아님을 나타내는 특별한 값
console.log(Number.NaN);
console.log(isNaN(Number.NaN));

//주어진 값이 NaN인지 확인하는 메서드(isNaN과 동일)
console.log(Number.isNaN('123'));

//주어진 값이 정수인지 확인하는 메서드
console.log(Number.isInteger('123'));
console.log(Number.isInteger(123));