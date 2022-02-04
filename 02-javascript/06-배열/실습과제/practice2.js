/* 
이 학생의 총점과 평균점수를 구하는 프로그램에 대한 아래의 소스코드를 완성하시오.

*/

console.log("\n풀이방법1----------------------")
let grade =[75,82,91];
let sum = 0, avg=0;

for(let i=0; i<grade.length; i++){
    sum += grade[i];
}

avg = sum / grade.length;
avg = avg.toFixed(2);
console.log("총점 : "+sum + "점, 평균점수: "+avg + "점");


console.log("\n풀이방법2----------------------")
let grade1 =[75,82,91];
let sum1 = 0, avg1=0;

for(const item of grade1){
    sum1 += item;
}
avg1 = sum1 / grade1.length;
avg1 = avg1.toFixed(2);
console.log("총점 : "+sum1 + "점, 평균점수: "+ avg1 + "점");


//강사님 코드
console.log("\n강사님 코드----------------------")
console.log("강사님 코드와 동일한 풀이방법으로 코드 작성했음!!")