//사용자 정의 함수 
function helloWorld() {
    console.log("Hello World");
};

//작성된 함수를 모듈로 등록
module.exports = helloWorld;


//모듈로 등록할때 익명함수로 바로 export할수도 있다. 
module.exports = function () {
    console.log("Hello Hello Hello")
}





//모듈안에 함수를 담는것은 모듈 한개당 1개함수만 가능한듯??? 
//제일 마지막에 위치한 함수로 실행된다.