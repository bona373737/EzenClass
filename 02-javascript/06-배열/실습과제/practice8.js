/* 
아래의 코드는 배열의 원소를 반대로 배치하는 소스코드의 일부이다.
빈 칸을 완성하시오.
*/
let arr = [5,3,2,8,9];
console.log('before -->' + arr);

for(let i=0; i<parseInt(arr.length/2); i++){
    let tmp = arr[i];
    arr[i] = arr[4-i];
    arr[4-i] =tmp;
}

console.log('after-->' + arr);


console.log("\n강사님 코드1-------------------------------------");
let arr1 = [5,3,2,8,9];
console.log('before -->' + arr1);

for(let i=0; i<parseInt(arr1.length/2); i++){
    let tmp = arr1[i];
    arr1[i] = arr1[arr1.length-1-i];
    arr1[arr1.length-1-i] =tmp;
}
console.log('after-->' + arr1);



console.log("\n강사님 코드2-------------------------------------");
let arr2 = [5,3,2,8,9];
console.log('before -->' + arr2);

for(let i=0; i<parseInt(arr2.length/2); i++){
    let positionNum = arr2.length-1-i;
    let tmp = arr2[i];
    arr2[i] = arr2[positionNum];
    arr2[positionNum] =tmp;
}
console.log('after-->' + arr2);

/* 
역순배치 공식 암기 
-반복횟수 : 배열전체길이 -2만큼
-i번째와 전체길이-i-1번째를 맞교화
*/

