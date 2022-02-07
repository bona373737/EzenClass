/* 
<타언어와 다른 자바스크립트의 특이성>
1.함수호출시 파라미터 생략가능
파라미터를 요구하는 함수라 하더라도 호출시 필요없

2.파라미터의 기본값 정의

*/

function f(x){
    const y = x +1;
    console.log(y);
}
//파라미터생략한 채로 함수호출하면
//x값이 undefined로 주어지게 되고 undefined +1의 결과값으로 NaN를 출력해준다.
f();


console.log("\n방법1.파라미터가 생략된채로 함수가 호출될 경우에 대비하여 코드작성")
function foo(x,y){
    let result = 0;
    if(x != undefined){result += x;};
    if(y != undefined){result += y;};
    console.log(result);
};
foo(200,300);
foo(300);
foo();


console.log("\n방법2.파라미터가 생략될 경우에 적용할 기본값을 정의하는 방법")
//방법1을 사용하는 경우 작성해야할 코드가 길어지고 복잡해지는 점을 개선함.
function bar(x=1,y=2){
    let result = x+y;
    console.log(result);
}
bar(100,200);
bar(500);
bar();

