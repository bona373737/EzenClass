//변수의 유효성번위(변수 스코프)

/* 
1.var : 프로그래밍언어의 기본적인 변수 유효범위에 위배된다.

if문의 실행여부에 따라 num이 선언되므로
if문의 실행여부로 num의 식별가능 여부가 결정된다. 
num을 식별하지 못할 경우 정의되지 않은 값(undefined)가 된다.
*/
if(false){
    var num1 = 100;
    console.log("블록안에서 num1의 값:" + num1);
}
console.log("블록밖에서의 num1의 값:" + num1);
console.log("num1의 데이터타입:" + typeof num1);


if(true){
    var num2 = 100;
    console.log("블록안에서 num2의 값:" + num2);
}
console.log("블록밖에서의 num2의 값:" + num2);
console.log("num2의 데이터타입:" + typeof num2);
console.log("================================================")




/*
2.let,const : 프로그래밍언어의 기본적인 변수스코프를 갖는다. 
-블록 밖에서 선언된 변수를 블록 안에서 사용가능 
-블록 안에서 선언된 변수는 블록밖으로 빠져나갈 수 없다.

-블록으로 구분된 영역 안에서는 다른 블록에서 선언된 똑같은 변수도 재선언 가능하다.
*/
let num3 = 100;
if(true){
    let num4 = num3 + 100;
    console.log("블록안에서 num4: "+ num4);
}
//블록안의 변수를 블록밖에서 사용하는 경우 에러발생.
// console.log("블록밖에서 num4: "+ num4);

if(true){
    let num4 = "다른 if문 내부에서 사용한 변수num4 재선언 가능"
    console.log(num4);
}


for(let i=0; i<5; i++){
    console.log("반복문 안의 j : "+ j)
}
//블록안의 변수를 블록밖에서 사용하는 경우 에러발생.
console.log("반복문 밖에서 J출력: " + j)
console.log("========================================")




/* 
정말 정말 독특한 var의 특성 

기본적으로 변수는 변수선언 후 값을 할달 할 수 있는데, 
var는 값을 먼저 할당한 뒤 변수 선언이 가능핟.

프로그래밍언어의 기본적인 규칙에 위배되므로 var는 사용하지 않는 것이 좋다!
*/
x=100;
let x;
//에러발생 : ReferenceError: Cannot access 'x' before initialization
console.log("값을 먼저 할당하고 변수 선언은 원칙적으로 불가하다.")

y=100;
var y;
console.log("var만 특이하게 값 먼저 할당 후 선언이 가능하다...특이하네...")