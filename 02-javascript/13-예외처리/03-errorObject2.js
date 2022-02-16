//개발자 임의로 정의한 에러에 대한 예외처리

let myErr = new Error("이상한 일이 발생했습니다.");
//throw구문은 그 자체를 에러로 인식하기 때문에 try~catch처리가 가능하다.
try {
    throw myErr;
} catch (myErr) {
    console.log(myErr.name);
    console.log(myErr.message);
}
console.log("프로그램 종료");


/* 
개발자가 임의로 정의하는 에러가 필요한 이유!

사용자에게 생년월일을 입력하세요. 
-> 입력값을 활용하여 나이계산하는 코드를 작성할 경우. 

910616
19910616
안알랴줌

참고... 
잘못된 사용자입력값을 DB까지 그대로 들어가게되어 시스템이 다운되는 과정에서 
SQLinjection 해킹기법과 관련됨  ex.여기어때 sqlinjection해킹사고건
이러한 경우의 문제는 정말 기본중의 쌩기본인 예외처리를 안해서 발생한 문제로 문제가 많았다.
*/