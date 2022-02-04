// 배열의 활용(아래 내용은 기본공식처럼 아예 외어두기!!)

//1. 배열의 원소의 총합,평균 구하기
console.log("1. 배열의 원소의 총합,평균 구하기");
const data = [10,20,30,40,50];
let sum = 0;

for(let i=0; i<data.length; i++){
    sum += data[i];
}
console.log("data의 총합 : "+ sum);
const avg = sum /data.length;
console.log("data의 평균 :"+ avg);


//2. 최대값 구하기 
console.log("\n2.배열 원소들의 최대값 구하기");
const data1 = [8,5,3,2,10,6,7];
let maxData = data1[0];
//i번째와 i+1번째를 비교해나가는 형태
for(let i=1; i<data1.length; i++){
    if(maxData < data1[i]){
        maxData = data1[i];
    }
}
console.log("data1배열의 최대값은 : " + maxData);


//3.배열원소들의 위치 역순으로 바꾸기
//[1,9,5,3,6]  ->  [6,3,5,9,1]   원소의 인덱스 번호기준으로 맞바꾸기
// 반대쪽위치 원소의 인덱스번호 구하는 공식 : data.length-i-1
//반복횟수 구하기 : parseInt(data.length/2)
const data2 = [1,5,2,4,3];
const p = parseInt(data2.length/2);

for(let i=0; i<p; i++){
    const k = data2.length -i -1;
    const temp = data2[i];
    data2[i]= data2[k];
    data[k]=temp; 
}
console.log(data);





/* 
4.오름차순,내림차순정렬 
정렬관련 많이 알려진알고리즘 3가지
-첫번째값부터 순서대로 나머지값 전체와 비교(앞순서부터 정렬값이 확정된다.)
-

*/
