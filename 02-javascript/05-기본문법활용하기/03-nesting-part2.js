/*
for문 내부에  if문 중첩(매 반복 횟수마다 조건을 판별한다.)
주로 반복문에서 사용되는 초기식 변수에 대한 경우의 수 판별을 위해 사용된다.

*/

let evenSum = 0;  //짝수의 합
let oddSum = 0;  //홀수의 합

for(let i=0; i<11; i++){
    if(i%2 == 0){
        console.log("%d는 짝수입니다.", i);
        evenSum += i;
    }else {
        console.log("%d는 홀수입니다.", i);
        oddSum += i;
    }
} 
console.log("1~10 까지의 짝수들의 합 :" + evenSum);
console.log("1~10 까지의 홀수들의 합 :" + oddSum);



/* 
공배수 구하기
어떤수 i가 x로 나누어도 나머지가 0이고 
y로 나누어도 나머지가 0일때 이 수를 x,y의 공배수라고 한다. -> 좀더 빠른 공식 x와 y의 합으로 나누기..

ex.1~100까지의 범위 안에서 3과 5의 공배수를 모두 출력하고 
공배수의 총 합인 sum을 구하시오
*/
const x = 3;
const y = 5;
let sum = 0;

for (let i=1; i<=100; i++){
    // 좀더 간결한 수학공식 if(i% (x*y) ==0)
    if(i % x == 0 && i % y == 0){
        console.log(i);
        sum += i;
    }
}
console.log("x와y의 공배수 총합 : "+ sum);




/* 
마지막 회차 생략 
ex. 게시글리스트 사이에 수평선을 넣을때 제일마지막 게시글에는 수평선 넣기 생략 
ex. 문자열 사이 "," 콤마넣기할때 마지막문자에는 콤마 넣기 생략

1.반복문의 조건식이 "변수<최대값"인 경우의 조건 -> 변수+1 < 최대값
2.반복문의 조건식이 "변수<=최대값"인 경우의 조건 ->변수 < 최대값
*/

console.group("\n반복문의 조건식에 < 사용한 경우");
for(let i=1; i<10; i++){
    if(i +1 <10){
        console.log(i);
    }
}
console.groupEnd();


console.group("\n반복문의 조건식에 <= 사용한경우");
for(let i=1; i<=9; i++){
    if(i<9){
        console.log(i);
    }
}
console.groupEnd();


console.log("\n글자사이에 콤마넣기");
let str = "";
for(let i=1; i<10; i++){
    str += i;
    if(i+1 <10){
        str += ",";
    }
}
console.log(str);
console.groupEnd();