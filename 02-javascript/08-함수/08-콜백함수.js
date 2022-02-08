/* 
콜백함수의 사용 이유
it업무는 기본적으로 팀프로젝트이다. 

ex.
A팀원 :파라미터를 받아서 연산결과를 출력하는 함수를 제작하여 B에게 전달
B팀원 : A로부터 전달받은 함수를 사용하여 파라미터를 전달하고 그에 따른 결과가 두파라미터의 합계가 나오도록 구현

function doSomething(x,y,youFunction){
    const result = yourFuntion(x,y);
    
}
*/

// 콜백함수를 파라미터로 요구하는 함수 정의하기 
function doSomething (x,y,cd){
    const result = cd(x,y);
    console.log(result);
};

console.log("\n콜백함수 유형1 _ 직접함수를 정의함--------------------")
function minus(a,b){
    return a-b;
};
doSomething(100,50, minus);


console.log("\n콜백함수 유형2_콜백함수를 익명함수 형태로 전달--------------------")
doSomething(200,100, function(a,b){
    return a*b;
});
doSomething(200,100, function(a,b){
    return a/b;
});


console.log("\n콜백함수 유형3_ 익명함수를 화살표 함수로 사용--------------------")
doSomething(5,7,(a,b) =>{
    for(let i=a; i<b; i++){
        console.log("7 x "+i+"="+(i*7));
    }
});

console.log("\n함수로직이 한줄인 경우 축약된 형태--------------------")
doSomething( 5,7,(a,b)=> console.log(a+b) );