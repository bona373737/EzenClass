/* 
## 문제 7.

number라는 변수를 정의하고 1 혹은 2의 값을 임의로 할당하시오.   
이 변수에는 1이나 2밖에 저장될 수 없습니다.

구구단 프로그램을 만들고자 한다.   
전체를 출력하는 구구단이 아니라 number가 1일 때는 홀수 단(3, 5, 7, 9),   
number가 2일 때는 입력하면 짝수 단(2, 4, 6, 8)을 출력하는 프로그램을 완성하시오.
*/


// 나의 소스코드
let number = 2;

if(number===1){
    for(let i=3; i<10; i+=2){
        console.log("구구단 %d단", i)
        for(let j=0; j<10; j++){
            console.log("%d x %d = %d", i, j, i*j);
        }
    }
}else if(number ===2){
    for(let i=2; i<10; i+=2){
        console.log("구구단 %d단", i)
        for(let j=0; j<10; j++){
            console.log("%d x %d = %d", i, j, i*j);
        }
    }
}else {
    console.log("1,2 이외의 잘못된 숫자를 입력하셨습니다.")
}



/* 
강사님 코드 버전1
inputNum이 2일때는 2,4,6,8.. 이런식으로 2부터 시작하여 출력 
inputNum이 3일때는 3,5,7,9...이런식으로 3부터 시작하여 출력

*/



//강사님 코드버전1
const inputNum1 = 2;
let startNum = inputNum1 == 2? 2:3;

for(let i=start; i<10; i+=2){
    for(let j=1; j<10; j++){
        console.log("%d x %d = %d", i, j, i*j);
    }
}

/*
const inputNum = 2;

let start = 0;
if(inputNum == 2){
    start = 2;
}else {
    start = 3;
}

for(let i=start; i<10; i+=2){
    for(let j=1; j<10; j++){
        console.log("%d x %d = %d", i, j, i*j);
    }
}
*/



//강사님 코드버전2
const inputNum2 = 2;
for(let i=4-inputNum2; i<10; i+=2){
    for(let j=1; j<10; j++){
        console.log("%d x %d = %d", i, j, i*j);
    }
}




//다른 학생의 코드...(다소 복잡함)
const num = 2;

for(let i=2; i<10; i++){
    if(num ==1){
        if(i%2 != 0){
            for(let j=1; j<10; j++){
                console.log("%d x %d = %d", i, j, i*j);
            }
        }
    }else{
        if(i %2 == 0){
            for(let j=1; j<10; j++){
                console.log("%d x %d = %d", i, j, i*j);
            }
        }
    }
}