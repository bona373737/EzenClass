/* 
문제 12.
자신의 주민번호 한 글자씩 모든 숫자를 원소로 갖는 배열 jumin을 아래와 같이 정의하시오.
ssn = [0,1,1,2,1,3,1,0,0,0,1,2,3]


정의된 배열을 활용하여 유요한 주민등록번호인지 아닌지를 판별하는 코드를 구현해보자. 판별 방법은 아래와 같다.

- 기본 주민등록코드에는 각 숫자에 대응하는 가중치가 있다. 가중치는 주민등록번호의 순서에 따라 `2 3 4 5 6 7 8 9 2 3 4 5` 이다.
- 먼저 마지막 숫자는 제외하고, 기본코드의 각 12자리와 가중치를 모두 곱하여 합한다.
- 합한 값을 11로 나눈 나머지 값을 구한다.
- 11에서 그 나머지 값을 뺀 후, 이를 10을 나눈 나머지를 구한다.
- 나머지의 1의 자리 값과 주민등록번호 마지막 자리 값이 맞아야 유효한 주민등록번호이다.

?? 나머지의 1의 자리 값은??
*/

let ssn =   [주민번호];
let ssnWeight = [2,3,4,5,6,7,8,9,2,3,4,5];

//가중치를 곱한 전체합계구하기
let sum = 0;
for(let i=0; i<ssn.length-1; i++ ){
    sum += ssn[i]*ssnWeight[i];
}
//유효성검사 공식에서 마지막 10으로 나눈 나머지값이 2자리수인경우 확인
let validityCheckValue = (11-(sum % 11))%10;
if(validityCheckValue >9){
    validityCheckValue = validityCheckValue %10; 
}

//유효성검사 공식으로 계산된 결과값과 주민번호 마지막자리값이 같은지 비교
if( validityCheckValue === ssn[ssn.length-1]){
    console.log("유효한 주민번호입니다.")
}else{
    console.log("유효하지 않은 주민번호입니다.")
}


console.log("\n강사님 코드---------------------------------------------------------");
/* 
가중치값을 배열로 만들지 않은 풀이방법
*/
let ssn1 =   [주민번호];
let ssnWeight1 = 2;
let sum = 0;

for(let i=0; i<ssn.length-1; i++){
    sum += ssn[i] * ssnWeight1;
    //가중치값을 1증가 시킴
    ssnWeight1++;
    //가중치값이 9보다 크면 2로 리셋
    if(k>9){
        k=2;
    }
}

let mod = sum % 11;
let x = (11-mod)%10;
//나머지값의 일의자리값
let y = x % 10;

if(y == ssn[ssn1.length-1]){
    console.log("유효한 주민번호 입니다.")
}else{
    console.log("유효하지 않은 주민번호 입니다.")
}
