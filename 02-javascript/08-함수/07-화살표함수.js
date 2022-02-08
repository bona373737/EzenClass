const foo = (x) => {
    for(let i=0; i<x; i++){
        console.log("Hello World");
    }
};
foo(7);

//파라미터가 한개만 있는 경우 소괄호 생략가능
const bar = x => {
    for(let i=0; i<x; i++){
        console.log("Hello World");
    }
};
bar(3);

//처리로직이 한줄만 존재하는 경우 중괄호 생략가능
const hello = (x,y) => x+y;
console.log(hello(100,400));