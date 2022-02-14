/* 
정규표현식

문자열의 형식을 의미하는 수식
문자열이 특정조건을 충족하는지 검사하거나 
특정 패턴의 문자열을 검색

프로그래밍언어와 별도로 독립적으로 존제하는 수식으로서
타 언어에서도 공통적으로 사용된다.
정규표현식을 인식할수 있도록 프로그래밍 언어가 지원을 하는것일뿐.

const 변수명 = /정규표현식/
변수명.test(검사할문자열)
문자열이 정규표현식에 부합할 경우 true를 반환한다.
^[ ]*$ ->모든글자라는 의미

예외처리부분에서 주로 사용된다. 
보통 아이디검사,이름검사 등은 어느 사이트에서나 동일한 기능이므로
해당코드를 개발자들 각자가 모듈화 해서 갖고 있는 편이다. 
*/

const userName = "홍길동";
cosnt age = '20';
const userId = 'js123';

const pattern1 = /^[ㄱ-ㅎ가-힣]*$ /;
if (!pattern1.test(userName)) {
    console.log("이름은 한글만 입력가능합니다.");
};

const pattern2 = /^[0-9]*$/;
if (!pattern2.test(age)) {
    console.log("나이는 숫자만 입력가능합니다.");
};

const pattern3 = /^[a-zA-Z0-9]*$/;
if (!pattern3.test(userId)) {
    console.log("아이디는 영어,숫자 조합으로만 입력가능합니다.");
};

if (userId.length > 20) {
    console.log('아이디는 최대 20자 까지만 입력가능합니다.');
}

console.log('검사완료!!');