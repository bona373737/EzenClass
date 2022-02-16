/* 
에러종류1. Syntax Error : 문법에러,코딩상의 실수이므로 수정하지 않으면 프로그램이 동작하지 않음
에로종류2. Runtime Error : 프로그램 작성과정에서 논리상의 오류로 미처 대응하지 못한 상황이 발생하는 경우
                           처리하지 않을 경우 실행과정 중 프로그램이 중단된다.
                           프로그램이 뻗는다고 표현되는 상황들이 이에 속한다
                           프로그램이 뻗는 상황을 방지하기 위해 예외처리가 필요하다. 
*/

/* 
예외처리 형태:try{    }
에러가 없다면 try안의 마지막 줄까지 실행되고, catch블록은 건너뛰다. 
에러가 있다면 try안의 코드실행이 중단되고 catch(err)블록으로 제어흐름이 넘어간다.
변수 err는 무슨일이 일어났는지에 대한 설명이 담긴 에러객체를 포함한다.
*/


// const data = [1, 2, 3];
// for (let i = 0; i < 10; i++) {
//     console.log(data[i].toFixed(2));
// }
//->TypeError: Cannot read properties of undefined (reading 'toFixed')
//배열 인덱스가 2번까지 밖에없는데 반복의 범위를 10번까지로 잘못설정하여 runtime오류 발생 


console.log("예외처리적용-----------------------------------------");
const data1 = [1, 2, 3];
try {
    for (let i = 0; i < 10; i++) {
        console.log(data1[i].toFixed(2));
    }
} catch (err) {
    // console.group();
    console.error("에러발생(1)");
    console.error("에러 이름 : " + err.name);
    console.error("에러 메세지 : " + err.message);
    // console.groupEnd();
} finally {
    //에러의 발생여부에 상관없이 무조건 맨 마지막에 실행되는 블록
    //필요하지 않은경우 생략 가능하다. 
    console.log("배열 탐색이 종료되었습니다.");
}

console.log("\n에러가 발생해도 프로그램이 뻗지 않고 try{   }밑의 코드가 정상 실행되는것을 볼수 있음");