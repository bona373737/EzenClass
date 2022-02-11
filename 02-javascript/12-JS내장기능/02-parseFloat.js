/* 
parseFloat(value)

주어진 값에서 변환한 부동소수점 수(실수)를 리턴
변환할수 없는 값인 경우 NaN을 리턴한다.
 */

//정상적인 경우 
console.log(parseFloat(3.14));
console.log(parseFloat('3.14'));
console.log(parseFloat('314e-3'));
console.log(parseFloat('0.0314E+20'));

//NaN을 반환하는 경우 
console.log(parseFloat('FF2'));