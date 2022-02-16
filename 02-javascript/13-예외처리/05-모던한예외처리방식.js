/* 
모던한 예외처리 방식 : 에러객체 활용



*/

function foo(x, y) {
    if (x < 0 && y < 0) {
        // 이 함수안에서 에러가 발생했을때 이 함수를 호출하는 위치를 에러로 인식한다. 
        // 이 함수를 호출하는 위치:const k = foo(-1,-2)
        // 이 함수를 호출하는 위치에 try-chatch문을 넣어줘야 한다. 
        throw new Error("x와 y가 0보다 작습니다.");
    }
    return x + y;
}

const k = null;
try {
    //foo(-1,-2)부분에서 오류가 발생했으므로 변수 k 대입되는 과정이 실행되기도 전에 바로 
    //catch문으로 넘어가지므로 k값은 여전히 null이다. 
    k = foo(-1, -2);
} catch (errObject) {
    console.log("에러이름 : " + errObject.name);
    console.log("에러내용 : " + errObject.message);
    console.log(errObject);
}
console.log(k);



//try블록 안의 코드는 최소하는 것이 프로그램 효율에 좋다. 
//그래서 k값을 정상적으로 리턴받았다면 그 결과값을 홀요하는 처리는 try블록 밖에서 하는 것이 좋다.
//에러점검이 끝난 후 try-catch블록 밖에서 k값을 활요하려면 
//변수의 선언 위치가 try블록보다 상위에 위치해야 한다(변수의 스코프 규칙)