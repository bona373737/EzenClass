/*
문제4.
어떤 계산기는 입력된 값에서 백의자리 이하를 버리고 결과를 도출한다고 한다. 
예를 들어 입력된 값이 456이라면 400이 결과로 출력된다. 
이러한 출력결과를 만들 수 있는 코드를 작성하시오.
*/

//구본아 작성코드
let inputNum = 456;
let resultNum = Math.floor(inputNum /100)*100;
console.log("입력하신값의 백의자리 이하를 버린 값은 %d 입니다.",resultNum);

/*
강사님 작성코드
parseInt 또는 Math.floor 등의 나머지 몫을 구하기 위한 형변환해주는 메서드 사용하지 않고 
순수하게 연산으로만 문제 풀기
(456에서 56을 빼기하는 형태로 백의자리 값만 남김)
*/
const extra = (inputNum %100) /100;
console.log(extra);
const result = ((inputNum/100) - extra) *100;
console.log(result);
