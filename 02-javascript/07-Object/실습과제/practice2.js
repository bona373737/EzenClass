/* 
## 문제2-1

다음의 JSON은 어느 학급의 중간고사 성적을 나타낸다.

```js
const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
}
```
위 데이터에서 학생별 총점과 평균을 구하시오.

#### 출력결과
철수의 총점은 341점 이고 평균은 85.25점 입니다.
민영의 총점은 369점 이고 평균은 92.25점 입니다.
남철의 총점은 257점 이고 평균은 64.25점 입니다.
혜진의 총점은 322점 이고 평균은 80.5점 입니다.
 */
console.log("문제2-1  ------------------------------------------------------");
const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
};
// console.log(exam['남철'][1]);
for(e in exam){
    let sum = 0;
    for(let i=0; i<exam[e].length; i++){
        sum += exam[e][i]
    }
    let avg = sum / exam[e].length;
    console.log(e + "의 총점은" + sum+"점 이고 평균은"+ avg + "점 입니다." )
}



//강사님 코드
console.log("\n")
for(const key in exam){
    //학생별 총점을 위한 변수초기화는 반복문 안에서 진행.
    let sum =0 ;
    for(const p of exam[key]){
        sum += p;
    }
    let avg = sum / exam[key].length;
    console.log("%s의 총점은 %d점 이고 평균은 %d점 입니다.",key,sum,avg)
}





/* 
##문제2-2.
위 문제의 점수가 순서대로 국어, 영어, 수학, 과학일 경우 수학에 대한 모든 학생의 총점과 평균을 구하시오.

#### 출력결과
모든 학생의 수학 총점은 325점 이고 평균은 81.25점 입니다.
*/
console.log("문제2-2  ------------------------------------------------------");
let mathSum = 0;
let keyCount = 0;
for(e in exam){
    keyCount ++;
    for(let i=0; i<exam[e].length; i++){
        if(i==2){
            mathSum += exam[e][2];
        };
    };
};
let avg1 = mathSum / keyCount;
console.log("모든 학생의 수학 총점은"+mathSum+"점 이고 평균은"+avg1+"점 입니다.")



//강사님 코드
//전체 학생에 대한 총점이므로 반복문의 바깥에서 변수 초기화
let mathSum1 = 0;
//객체의 길이는 배열처럼 length로 알아낼수 없으므로 개수를 따로 알아내야 한다.
let studentCount = 0;
for(const key in exam){
    mathSum1 += exam[key][2];
    studentCount ++;
}
let avg = mathSum1 / studentCount;
console.log("모든 학생의 수학 총점은 %d점이고 평균은 %d점 입니다",mathSum1,avg);
