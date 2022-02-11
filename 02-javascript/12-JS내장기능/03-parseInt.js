/* 
parseInt(value,int)

첫번째 파라미터를 10진수 정수값으로 변환한다
변환할 수 없다면 NaN을 반환한다.
두번째 파라미터는 value가 몇진법인지 알려주는 값(파라미터생략시 기본값=10)
문자열의 선행공백은 무시함
숫자 + 글자 형태의 문자열은 숫자부분만 취함
글자 +숫자 형태의 문자열은 변호불가(NaN반환)
소수점을 포함하고 있을 경우 정수부분만 취함
 */

//15로 변환되는 예제들
console.log(parseInt('0xF', 16)); //OxF를 16진법으로 변환
console.log(parseInt(' F', 16));
console.log(parseInt('17', 8));
console.log(parseInt('015', 10));
console.log(parseInt(15.99, 10));
console.log(parseInt('15,123', 10));
console.log(parseInt('FXX123', 16));
console.log(parseInt('1111', 2));
console.log(parseInt('15*3', 10));
console.log(parseInt('15e2', 10));
console.log(parseInt('15px', 10));

//-15를 반환하는 예제들
console.log(parseInt('-F', 16));
console.log(parseInt('-0F', 16));
console.log(parseInt('-0XF', 16));
console.log(parseInt(-15.1, 10));
console.log(parseInt('-17', 8));
console.log(parseInt('-15', 10));
console.log(parseInt('-1111', 2));
console.log(parseInt('-1111Hello', 2));

//NaN을 반환하는 예제들
console.log(parseInt("Hello", 8));
console.log(parseInt("Hello1234", 8));