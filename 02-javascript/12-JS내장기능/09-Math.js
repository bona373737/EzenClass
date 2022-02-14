/* 
수학적인 속성과메서드를 가진 내장객체
모든 기능이 정적 멤버변수와 정적메서드 형태로 제공된다.
즉, 객체 생성을 하지 않고 클래스 이름으로 직접 접근가능하다. 
*/

//최대값
let max = Math.max(100, 123, 456);
console.log("최대값 : " + max);

//최소값
let min = Math.min(100, 123, 456, 789);
console.log("최소값 : " + min);

//소수점 반올림
let num1 = 3.7146;
console.log("소수점반올림 : " + Math.round(num1));

//소수점 올림과 내림선택----> ex.D-day표시할때,  하루전,  하루후 .. 날짜계산할때 많이 쓰임
console.log("소수점 무조건 올림 : " + Math.ceil(num1));
console.log("소수점 무조건 내림 : " + Math.floor(num1));


//절대값을 반환absolute
let num2 = -123;
console.log("절대값 : " + Math.abs(num2));

//0~1범위의 난수 발생
//----> 결과값에 곱하기 10을 해서 1~9사이값의 난수로 활용가능
//----> 로또값 구하기 : 
console.log("난수발생 : " + Math.random());

//임의의 두개 수 사이의 난수를 리턴하는 함수 
function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
};
console.log("1~10사이 난수발생 : " + random(1, 10));

//함수의 응용---> 5자리 인증번호 생성
let auth = "";
for (let i = 0; i < 5; i++) {
    auth += random(0, 9); //문자열+숫자는 ->> 문자열(문자열이 전염성이 강하다)
}
console.log("인증번호:" + auth);