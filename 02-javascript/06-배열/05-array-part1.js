/* 배열 array 

배열할당 방법
1. let myArray = [1,2,3,4,5];

2. let myArray = new Array("hello", "World", 1,2,3,false);
이 방법은 사용하지 않는 것이 좋다. 
new Array(15) 처럼 괄호 안에 숫자값 하나만 넣는 경우 이것을 값한개로 인식하는 것이 아닌
15칸짜리 배열을 생성하라는 의미로 인식해버린다. 
15칸짜리 배열이 만들어 지고 속은 비어있는 undefined 상태가 되어 버린다. 
*/

let myArray1;
myArray1 = ["hello", "World", 1,2,3,false];

let myArray2 = ["hello", "World", 1,2,3,false];

let myArray3 = new Array("hello", "World", 1,2,3,false);

console.log(myArray1[2]);      //배열의 세번째칸의 값을 출력
console.log(myArray1.length);  //배열의 칸수를 반환한다(배열에 들어있는 값의 개수x)


let item2 = myArray3;
if(item2 !== undefined){
    console.log("세번째 원소 존재합니다.");
}else {
    console.log("세번째 원소가 존재하지 않습니다.")
}

//배열for문에 활용 
const len = myArray3.length;
for(let i=0; i<len; i++){
    console.log(myArray3[i]);
}




//배열생성의 주의점
let myArray4 = new Array(5);
console.log(myArray4);
console.log(myArray4[3]);




//배열의 각 원소를 새로운 변수 a,b,c에 나누어서 저장하기 
//(리엑트에서는 이러한 비구조문법이 자주 사용된다.)
let myArray5 = [100,200,300]
let [a,b,c] = myArray5;
console.log(a);
console.log(b);
console.log(c);