//setTimeout :  일정시간 이후 연결된 함수를 실행
//setInterval : 일정시간마다 연결된 함수를 반복적으로 실행

/* 
setInterval(func, int)
지정된 함수를 두번째 인자로 전달된 시간마다 한번씩 호출한다(타이머기능)
setInterval(func, int) 이후의 처리 로직들은 func의 실행여부와 상관없이 즉시 실행된다.

타이머를 종료시킬 수 있는 timerid를 반환한다.
이값을 clearInterval()함수에 전달하면 타이머가 종료된다.
int는 밀리세컨트 (1/1000)초를 의미하는 정수
 */

let count1 = 0;
const timerId1 = setInterval(() => {
    count1++;
    console.log("[타이머1]" + count1 + "번째 자동실행");
    if (count1 == 5) {
        console.log("타이머1 종료");
        clearInterval(timerId1);
    }
}, 3000);
console.log("타이머1 시작");



let count2 = 0;
const timerId2 = setInterval(() => {
    count2++;
    console.log("[타이머2]" + count2 + "번째 자동실행");
    if (count2 == 5) {
        console.log("타이머2 종료");
        clearInterval(timerId1);
    }
}, 3000);
console.log("타이머2 시작");