/* 
## 문제 1.
for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
*/

//풀이방법 1
//for(let i=9; i> -1; i--)
for(let i=9; i>=0; i--){
    if(i % 2 !== 0){
        console.log(i);
    }
}


//풀이방법 2
for(let i=9; i> -1; i-=2){
    console.log(i);
}