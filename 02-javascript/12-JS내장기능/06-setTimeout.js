//setTimeout은 중간 휴지시간을 주는것이고 이 이후 무엇을 동작하게 할지는 
//개발자가 추가로 지정해줘야 한다(보통 익명함수 또는 화살표함수형태로 콜백함수와 함께 사용됨)
//setTimeout으로 지정된 함수는 프로그램의 전체흐름과 별개의 흐름으로 진행된다(비동기)

/* 
setTimeout(func,int)
func : 콜백함수
int : 1/1000c초 단위의 시간값

지정된 함수를 두번째 인자로 전달된 시간 후에 실행하도록 예약한다(딜레이기능)
setTimeout() 이후의 처리로직들을 func의 실행여부와 상관없이 즉시실행된다(비동기)
 */




function foo() {
    for (let i = 0; i < 10; i++) {
        console.log("콜백함수 3초뒤 실행 2 x " + i + "=" + (i * 2));
    }
};
setTimeout(foo, 3000);
console.log("구구단을 외자!!");


//일반적으로 콜백함수를 별도로 정의하지 않고 익명함수로 즉시 전달하는 형태가 주로 사용된다. 
setTimeout(() => {
    for (let i = 1; i < 10; i++) {
        console.log("콜백함수 1.5초뒤 실행 3 x " + i + "=" + (i * 3));
    }
}, 1500)

console.log("프로그램 종료~!!!");