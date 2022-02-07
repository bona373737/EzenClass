//함수정의
function sayHello(){
    console.log("Hello World!!");
}
//함수호출
sayHello();


function f(x){
    let result = x + 1;
    console.log(result);
}
f(3);


//다중 파라미터
function sum(x,y,z){
    let result = x+y+z;
    console.log(result);
}
sum(1,3,4);


//함수의 재사용
for(let i=0; i<5; i++){
    sayHello();
}