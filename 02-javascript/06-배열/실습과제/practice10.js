/* 
9번문제에서의 반 평균을 출력하시오. 반 평균은 학생의 평균점수 총 합/학생수로 구합니다.
[주의] toFixed() 함수로 가공된 값은 문자열 형태이기 때문에 숫자 연산이 불가능합니다. 이를 감안하
여 반 점수를 구하세요.
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
let classSum = 0;
let classAvg = 0;


for(let i=0; i<grade.length; i++){
    sum=0;
    for(let j=0; j<grade[i].length; j++){
        sum += grade[i][j];
    }
    avg= sum / grade[i].length;
    avg = avg.toFixed(2);
    classSum += parseInt(avg);
    console.log(student[i]+" 총점:"+sum +"점, 평균: "+avg);
}

classAvg = classSum / student.length;
console.log("반평균 :"+classAvg);



console.log("강사님 코드--------------------------------")
/* 
toFixed)_함수로 소수점을 처리한 결과는 문자열이기때문에 
숫자연산이 불가능하므로 toFixed()함수 적용전에 
 */