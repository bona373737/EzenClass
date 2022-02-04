// JSON에 대한 구조분해 (= 비구조할당 = 비구조문법) ->react와 nodejs에 많이 사용됨
console.log("\nJSON에 대한 구조분해---------------------------------------------------");
const myObject = {a:1, b:2};
//비구조문법은 사용하지 않은경우 
const a_copy = myObject.a;
const b_copy= myObject.b;
//비구조문법을 사용하는 경우(비구조문법에서 변수명은 원본의 key이름과 동일해야함)
const {a,b} = myObject;



//비구조문법으로 추출할때 변수의 이름을 key이름과 다른이름으로 할당받을수 있는 방법
const data = {name:'hello', age:20, height:172, weight:85};
const {height:h, weight:w} = data;



//구조분해를 활용하여 필요한 데이터만 골라서 추출하는데에 주로 사용된다
const data1 = {name:'hello', age:20, height:172, weight:85};
const {name} = data;


//구조분해를 활용하여 필요한데이터만 골라서 추출하고 남은 나머지를 별도로 분리하기
const dummy = {a1:100, a2:200,a3:300,a4:400,a5:500,a6:600};
const {a1,a2, ...rest_a} = dummy;
console.log(a1);
console.log(a2);
console.log(rest_a);

//구조분해를 활용하여 기존데이터와 추가적인 값을 병합한 새로운 객체생성
//원본객체의 전체를 다 가져올때는 "...원본객체이름" 사용 
const origin = {name:'javascript', age:25};
const newData1 = {...origin, gender:'M'}   //원본전체데이터와 새로운데이터 gender
console.log(newData1);
//구조분해를 통한 새로운 데이터 생성시 원본과 동일한 이름의 속성이 있다면 데이터가 수정된다.
const newData2 = {...origin, age:30, gender:'F'}; 
console.log(newData2);


console.log("\n배열에 대한 구조분해---------------------------------------------------");
const myArray = [1,2];
const [one,two] = myArray;
console.log(one);
console.log(two);

//구조분해를 수행후 나머지 전체를 별도로 분리하기
[b1,b2, ...rest_b] = [1,2,3,4,5,6,7,8,9];
console.log(b1);
console.log(b2);
console.log(rest_b);

