//중첩 제어문 

/* 
1. if 안에 if문 

ex. 사용자에게 값을 입력받아 그 값을 기준으로 조건별로 각각 다른 동작을 진행할경우
사용자에게 입력 받은 값이 일차적으로 유효한 숫자를 입력했는지 확인 후 
유효하게 입력된 값만 가지고 조건별로 확인하는 코드를 실행시키기
*/
const point = 78;
if (point>=70){
    console.log("Pass 입니다.");

    if(point>90){
        console.log("A학점");
    }else if(point>80){
        console.log("B학점");
    }else {
        console.log("C학점");
    }
}else{
    console.log("NonPass 입니다.")
}


const userInputNum = 80; 
//사용자가 입력한 값이 빈값이 아니고 음수도 아닌 경우에만 작동
if(isNaN(userInputNum) || userInputNum <0 ){
    if(userInputNum < 20){
        console.log("미성년자 입니다. 음주불가!")
    }else if(userInputNum >19){
        console.log("성인입니다. 음주가능!")
    }
}



/* 
2. if 안에 for문

*/
const k = 5;

if(1<k && k <10){
    for(let i=1; i<10; i++){
        console.log("%d + %d = %d", k, i, k*i);
    }
}else{
    console.log("2~9사이의 수식만 출력 가능합니다.")
}

