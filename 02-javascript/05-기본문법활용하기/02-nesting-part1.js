//중첩 제어문 

/* 
1. if 안에 if문 

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

