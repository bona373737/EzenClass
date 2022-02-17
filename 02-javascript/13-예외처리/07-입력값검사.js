const RegexHelper = require('./06-RegexHelper');

//회원가입시 사용자 입력값을 가정한 변수
const username = '홍길동';
const age = '20';
const userid = 'js123';

//입력값 검사를 수행하기 위한 객체생성
const regex = new RegexHelper();

//입력값의 형식검사 수행
try {
    regex.kor(username, "이름은 한글로만 입력하세요");
    regex.num(age, "나이는 숫자로만 입력하세요");
    regex.engNum(userid, "아이디는 영어와 숫자의 조합만 가능합니다.");
    regex.madLen(username, 20, "이름은 최대 20글자까지만 가능합니다.");
} catch (err) {
    console.error(err.name);
    console.error(err.statusCode);
    console.error(err.message);
    
}
console.log('검사완료!!')