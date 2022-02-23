/* 
isNaN(value)
파라미터로 전달된 값이 NaN인경우 true, 아닌경우 false를 반환한다.
숫자로 별환 가능한 형식의 경우 false

javaScript의 다른 모든값과 달리 
NaN은 같음연산 (==, ===)을 사용해 판별할수 없다.
그래서 NaN 여부를 판별하는 함수가 필요하다.
 */


//숫자로 변환할수 없다고 판단하는 경우 
console.log(isNaN(NaN));
console.log(isNaN(undefined));
console.log(isNaN({}));
console.log(isNaN('blabla'));
console.log(isNaN('123ABC'));


//숫자로 변환할수 있다고 판단하는 경우
console.log(isNaN(true)); //true는 숫자로 값1과 동일
console.log(isNaN(null)); //null 숫자로 값0과 동일
console.log(isNaN(37));
console.log(isNaN('37')); // '37' -> 숫자37으로 변환된다.
console.log(isNaN('37.33')); // '37.33' -> 숫자37.33으로 변환된다.
console.log(isNaN('')); // 빈문자열은 숫자0과 동일하다
console.log(isNaN(' ')); // 공백만 있는 문자열은 숫자0과 동일하다

console.log("------");
console.log(isNaN(false));