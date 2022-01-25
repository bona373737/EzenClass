/*
1. 산술연산자
*/
console.log("\n산술연산자====================================")

const myNum1 = 5;
const myNum2 = 16;
console.log(myNum1 + myNum2);
console.log(myNum1 - myNum2);
console.log(myNum1 / myNum2);
console.log(myNum1 % myNum2);

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
x -= 10;
x *= 10;
x /= 10;
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


