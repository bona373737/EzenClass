/*
문제3.
사과를 바구니에 나누어 담으려고 한다.   
하나의 바구니는 사과를 10개씩 담을 수 있으며 사과를 담다가 10개 미만으로 남는 경우 하나의 바구니를 추가로 사용해야 한다.   
예를 들어 120개의 사과를 나누어 담기 위해서는 12개의 바구니가 필요하지만 121~130개까지 사과가 있다면 13개의 바구니가 필요하고
 다시 131개의 사과를 나누어 담기 위해서는 14개의 바구니가 필요하게 된다.

현재 갖고 있는 사과의 수를 의미하는 `numOfApples` 변수에 123이라는 값이 할당되어 있을 경우 필요한 바구니의 수를 구하는 프로그램을 구현하시오.
*/

const numOfApples = 123;

//구본아 작성 코드
let box1 = Math.floor(numOfApples / 10);
let box2 = numOfApples % 10;
let box3 = box2>0? 1:0
let finalBoxNum = box1 + box3;
console.log("사과를 담기위해 필요한 박스의 개수는 %d 개 입니다.",finalBoxNum);

/*
강사님 작성코드
parseInt 또는 Math.floor 등의 나머지 몫을 구하기 위한 형변환해주는 메서드 사용하지 않고 
순수하게 연산으로만 문제 풀기
(12.3에서 0.3을 빼기하는 형태로 나누기의 몫을 구함)
*/
const extra = (numOfApples % 10) / 10;  //나머지값구하기

console.log("계산방법 1======")
let basketCount 
    = extra>0? (numOfApples/10)- extra +1 : (numOfApples/10) - extra;
console.log(basketCount);

console.log("계산방법 2======")
basketCount = (numOfApples/10) -extra;
basketCount += extra>0? 1:0;
console.log(basketCount);
