// console객체의 log()메서드에서 사용할 수 있는 서식문자열
// 주로 문자와 변수를 함께 출력하고자 할때 사용됨

const num = 123;
const str = "hello";
const boolTrue = true;
const boolFalse = false;
const obj = new Date();
const arr = [1,2,3];
const json = {"a" : 123, "b":234};



console.group("\%d 사용하여 숫자변수 출력 : 숫자와 논리값만 정상출력된다.");
// 숫자값 변수는 정상 출력된다
console.log("숫자변수출력 num = %d",num);
// 문자값 변수는 숫자가 아니므로 Not a Number가 출력된다
console.log("문자열변수출력 str = %d",str);
// 논리값 변수는 각 논리값에 해당하는 숫자값으로 변환되어 출력된다.
console.log("논리변수출력 boolTrue = %d",boolTrue);
console.log("논리변수출력 boolFalse = %d",boolFalse);
// 객체값 변수는 숫자가 아니므로 값대신 객체가 위치한 주소값인 Hash값이 출력된다.
console.log("객체 변수출력 obj = %d", obj);
// 문자값 변수는 숫자가 아니므로 Not a Number가 출력된다
console.log("배열객체 변수출력 arr = %d", arr);
// 문자값 변수는 숫자가 아니므로 Not a Number가 출력된다
console.log("json객체 변수출력 json = %d", json);
console.groupEnd();



console.group("\%s 사용하여 문자변수 출력 : 모든 데이터타입의 값을 문자로 치환하여 정상출력 ")
console.log("숫자변수출력 num = %s",num);
console.log("문자열변수출력 str = %s",str);
console.log("논리변수출력 boolTrue = %s",boolTrue);
console.log("논리변수출력 boolFalse = %s",boolFalse);
console.log("객체 변수출력 obj = %s", obj);
console.log("배열객체 변수출력 arr = %s", arr);
console.log("json객체 변수출력 json = %s", json);
console.groupEnd();