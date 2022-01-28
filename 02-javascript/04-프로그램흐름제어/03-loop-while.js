/*
while반복문에서 필수요소는 초기식,조건식,증감식 !!!

초기식
while(조건식){
    반복적으로 실행될 내용
    증감식 
}

let a = 1;
while(a<5){
    console.log("while 반복문 실행중입니다")
    a++
}

#반복문의 사용목적은
반복문이 종료되었을때 초기값이 어떻게 변경되었는지를 확인하는것 
ex.console.log("a의 반복문 종료 후 최종결과값은 : " + a)


#반복문 제어하기
반복을 몇 번 수행해야 하는지 판단할 수 없는 경우 무한루프 형태로 지정하고   
특정 조건이 충족되는지에 따라 반복의 중단 여부를 결정한다.

반복문의 흐름제어 기능을 갖는 키워드
- `continue`: 조건식으로 강제 이동
- `break`: 현재 반복문을 강제로 종료하고 블록을 빠져 나간다.

*/

let a = 1;
while(a<5){
    console.log("while반복문 실행중입니다 a:" + a);
    a++;
}
let b = 0;
while(b<50){
    console.log("while반복문 실행중입니다 b:" + b);
    b += 10;
}
let f = 10;
while(f > 0){
    console.log("while반복문 실행중입니다 f:" + f);
    f -= 2;
}

//구구단 출력
let c = 1;
while(c<10){
    const e = c * 7;
    console.log("7 x %d = %d",c,e);
    c++;
}

// 누적합계구하기( 누적합을 담을 변수를  초기값0으로 하여 준비)
let sum = 0;
let i = 1;
while(i <=10){
    sum += i;
    console.log("i : %d , sum:%d", i, sum);
    i++;
}
console.log("1부터 10까지의 합계 : " +sum)
