/*
1. 산술연산자
*/
console.log("\n산술연산자====================================")

const myNum1 = 25;
const myNum2 = 4;
console.log(myNum1 + myNum2);
console.log(myNum1 - myNum2);
console.log(myNum1 / myNum2);
console.log(myNum1 % myNum2); //나머지
console.log(myNum1 * myNum2);
console.log(myNum1 ** myNum2);  //제곱

//나누기 몫만 구하고자 하는 경우 
let division = parseInt(myNum1/myNum2);
console.log(division);
division = Math.floor(myNum1/myNum2);
console.log(division);

const myStr1 = "Hello";
const myStr2 = "bona";
console.log(myStr1 + myStr2);
console.log(myStr1 + 1234);

/*
2. 대입연산자
*/
console.log("\n대입연산자====================================\n")

myNum3 = 300;
myNum4 = 30;
const myResult = myNum3 + myNum4;
console.log(myResult);

/*
3. 단항연산자
*/
console.log("\n단항연산자====================================")

let x = 100
x += 10;
console.log(x);
x -= 10;
console.log(x);
x *= 10;
console.log(x);
x /= 10;
console.log(x);
x %= 10;

/*
4. 증감연산자
연산자가 독립적으로 사용되는 경우는 위치에 상관없이 결과가 동일하지만
다른 수식에 포함된 상태로 사용되는 경우 위치에 따라 결과값이 달라진다
변수++, 변수--
++변수, --변수 
*/
console.log("\n증감연산자====================================")

let selfPlus = 1;
selfPlus++;
console.log(selfPlus);
selfPlus--;
console.log(selfPlus);

let prevValue = 1;
let prevResult = 10 + ++prevValue;
console.log(prevValue);
console.log(prevResult);

prevValue = 1;
prevResult = 10 + --prevValue;
console.log(prevValue);
console.log(prevResult);

/*
5. 비교연산자
비교연산의 결과를 true,false로 보여준다..
*/
console.log("\n비교연산자====================================")

const a = 100;
const b = 200;
const c = "100";
const e = 100.0;   //자바스크립트는 정수,실수 구분하지 않음, 100과 같은 값으로 인식함

console.group("1.이상,이하,미만,초과 비교");
console.log(a>b);
console.log(a<=b);
console.log(a<b);
console.log(a>=b);
console.groupEnd();

console.group("2.같다_ 내용만 비교");
console.log(a==c);
console.log(a==e);
console.log(a!=c);
console.log(a!=e);
console.groupEnd();

console.group("3.같다_내용과 데이터타입 둘다비교")
console.log(a===c);
console.log(a===e);
console.log(a!==c);
console.log(a!==e);
console.groupEnd();

/*
6 논리연산자(AND,OR,NOT)
AND가 OR보다 항상 우선한다_true&&false||false
숫자값에 적용하는 경우 0:false, 그외 모든수 : true로 인식된다.
문자열에 적용하는 경우  빈문자열 "":false, 그 외 모든경우:true로 인식한다.
*/
console.log("\n논리연산자====================================")

console.log(true && true || true);
console.log(true && true || true);
console.log(false || true && true);

let success = true;
let fail = !success;
console.log(success,fail);

let num1 = 1;
let num2 = 0;
console.log(!num1,!num2);    //숫자0을 제외한 모든수는 true
                            //숫자0은 false로 인식

let str1 = "";
let str2 = " ";
console.log(!str1, !str2);   //빈문자열은 false로 인식
                            //띄어쓰기 또는 단 한글자라도 있으면 true로 인식

/*
6 삼항연산자
*/
console.log("\n삼항연산자====================================")

const age1 = 19;
const type1 = age1 >= 20? "성인":"청소년";
console.log("당신은 %s 입니다.",type1);