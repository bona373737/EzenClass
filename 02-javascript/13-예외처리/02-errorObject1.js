//개발자가 직접 정의하는 에러

/* 
에러객체를 생성
생성자 파라미터로 에러의 내용 전달
*/

let myErr = new Error("이상한 일이 발생했습니다.");
console.log(myErr.name);
console.log(myErr.message);

//개발자가 직접 에러를 발생시킬 수 있다.
throw err;
// 이 구문을 실제 에러로 인식하기 때문에 프로그램이 이위치에서 중단된다

console.log("프로그램 종료");