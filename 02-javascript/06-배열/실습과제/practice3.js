/* 
다음 표는 어떤 학생이 일요일부터 토요일까지의 일주일간 아르바이트를 한 시간이다.
일 월 화 수 목 금 토 
7  5  5  5  5  10  7
주말에는 7시간, 평일에는 5시간을 일하기로 했지만, 금요일에 다른 직원의 사정으로 대신 근무를 하게
되어 10시간을 일했다.
이 학생의 시급이 4,500이었지만 목요일부터는 5,200원으로 올랐다고 할 때 일주일간의 총 급여를 구하
는 프로그램을 작성하시오.
*/

console.log("풀이방법-----------------------------")
let time = [7,5,5,5,5,10,7];
let money = 0;
let prevSalary = 4500;
let currentSalary = 5200;

for(let i=0; i<time.length; i++){
    if(i < 4){
        money += ( time[i] * prevSalary);
    }else{
        money += (time[i] * currentSalary);
    }
}

console.log("1주일간의 전체급여: " + money + "원");



console.log("\n강사님 코드1-------------------------")
let time1 = [7,5,5,5,5,10,7];
let money1 = 0;
let salary1 = 0;

for(let i=0; i<time1.length; i++){
    if(i<4){
        salary1 =4500;
    }else {
        salary1 = 5200;
    }
    money1 += time1[i] * salary1;
}
console.log("1주일간의 전체급여: " + money1 + "원");


console.log("\n강사님 코드2-------------------------")
let time2 = [7,5,5,5,5,10,7];
let money2 = 0;

for(let i=0; i<time2.length; i++){
let salary2 = (i<4)? 4500:5200;
money2 += time2[i] * salary2;
}
console.log("1주일간의 전체급여: " + money2 + "원");


console.log("\n강사님 코드3-------------------------")
let time3 = [7,5,5,5,5,10,7];
let money3 = 0;

for(let i=0; i<time3.length; i++){
money3 += time3[i] * ( i<4? 4500 : 5200 ) ;
}
console.log("1주일간의 전체급여: " + money3 + "원");