/*
다음 표는 어느 학급의 성적표이다.
     HTML CSS Javascript 
둘리   78   89       96
도우너 62   77       67
또치   54   90       80
희동  100   99       98
학생별 총점과 평균점수를 구하기 위한 소스코드를 아래와 같이 작성중이다. 빈 칸을 완성하시오.
단, 평균점수의 경우 toFixed() 함수를 사용하여 소수점 둘째 자리까지만 출력하시오.
*/

console.log("풀이방법1--------------------------------")
let student = ['둘리', '도우너', '또치', '희동'];
let grade = [
    [78,89,96],
    [62,77,67],
    [54,90,80],
    [100,99,98]
];
let sum=0; avg=0;

for(let i=0; i<grade.length; i++){
    sum = 0;
    for(let j=0; j<grade[i].length; j++){
        sum += grade[i][j];
    }
    avg= sum / grade[i].length;
    avg = avg.toFixed(2);
    console.log(student[i]+" 총점:"+sum +"점, 평균: "+avg);
}


console.log("\n풀이방법2--------------------------------")
//해당풀이는 불필요하게 배열을 하나 더 생성하여 메모리 낭비가 되는 코드인듯...
let student1 = ['둘리', '도우너', '또치', '희동'];
let grade1 = [
    [78,89,96],
    [62,77,67],
    [54,90,80],
    [100,99,98]
];
let sum1=0; avg1=0;

let sumArr = new Array(4);
let avgArr = new Array(4);

for(let i=0; i<grade1.length; i++){
    for(let j=0; j<grade1[i].length; j++){
        sumArr[i] += grade[i][j]; 
    }
    avgArr[i] = sumArr[i] / grade[i].length;
}
console.log(sumArr);
console.log(avgArr);




console.log("\n강사님 코드--------------------------------");
console.log("강사님코드 풀이방법1번과 동일함!! ")