/* 
## 문제3-1
아래의 데이터는 2021년 01월 25일부터 02월 01일까지의 Covid19 일별 확진자 수를 표현한 자료구조다.
covid19 = [
    {date: '0125': active: 426}, 
    {date: '0126': active: 343}, 
    {date: '0127': active: 547}, 
    {date: '0128': active: 490}, 
    {date: '0129': active: 460}, 
    {date: '0130': active: 443}, 
    {date: '0131': active: 338}, 
    {date: '0201': active: 299}
]
```
1월 25일부터 2월 1일까지의 누적 확진자 수와 일 평균 확진자 수를 구하시오.

#### 출력결과
누적 확진자 수: 3346
평균 확진자 수: 418.25
*/
console.log("\n문제3-1  ------------------------------------------------------");
covid19 = [
    {date: '0125', active: 426}, 
    {date: '0126', active: 343}, 
    {date: '0127', active: 547}, 
    {date: '0128', active: 490}, 
    {date: '0129', active: 460}, 
    {date: '0130', active: 443}, 
    {date: '0131', active: 338}, 
    {date: '0201', active: 299}
];
let sum =0;
for(let i=0; i<covid19.length; i++){
    sum += covid19[i].active;
}
let avg = sum / covid19.length;
console.log("누적확진자수 :"+sum);
console.log("평균확진자수 :"+avg);



//강사님 코드 
let sum1 = 0;
for(const j of covid19){
    sum += j.active;
}
console.log("누적 확진자 수 : %d", sum1);
console.log("평균 확진자 수 : %d", sum/covid19.length);

/*
##문제3-2
1월 25일부터 2월 1일까지 중에서 확진자가 가장 많이 나타난 날짜는 언제인가?

#### 출력결과
확진자가 가장 많이 나타난 날: 0127
*/
console.log("\n문제3-2  ------------------------------------------------------");
let max = 0;
let maxDay = "";

for(let i=0; i<covid19.length; i++){
    if(max < covid19[i].active){
        max = covid19[i].active;
        maxDay = covid19[i].date;
    }
};
console.log("확진자가 가장 많이 나타난 날 : "+ maxDay);


//강사님 코드 
//강사님은 최대값 변수의 시작값을 index 0번으로 넣고 시작하심.
let maxActive = covid19[0].active;
let maxDay1 = covid19[0].date;

for(const j of covid19){
    if(maxActive < j.active){
        maxActive = j.active;
        maxDay1 = j.date;
    }
}
console.log("확진자가 가장 많이 나타난 날 : %s", maxDay1);