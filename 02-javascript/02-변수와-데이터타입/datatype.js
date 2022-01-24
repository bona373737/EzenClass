// 데이터타입

let value1 = 123;
console.log(typeof value1);

let value2 = true;
console.log(typeof value2);

let value3 = "hello World";
console.log(typeof value3);

let value4 = new Date();
console.log(typeof value4);

// undefined와 null의 구분이 모호하다. 
let value5 = null;
console.log(typeof value5);

let value6;
console.log(typeof value6);

/*
null과 nundefined가 가진 차이점은 
변수에 값이 null이라면 변수가 선언되고 null이라는 값이 주어진 상태이고 
undefined라면 변수가 선언되고 아무것도 하지 않은 상태입니다. 

즉 null은 직접적으로 값이 없어라고 말한 상태이지만 
undefined는 아무것도 하지 않은 상태라고 말할 수 있기 때문에 
프로그래머가 의도적으로 값이 주어지지 않은 상태의 동작을 개발하려는 것이 아니라면 
undefined의 사용은 부적절하다고 이야기할 수 있습니다.

의도적으로 undefined를 사용해야 하는 경우가 아니라면 null을 사용하는것이 바람직하다.

ex.개발과정에서 의도적으로 변수에 값을 미리 할당하지 않고 추후 사용자에게 입력받은 값으로
값을 할당하고자 할때 변수에 null값을 할당 한다.

*/



