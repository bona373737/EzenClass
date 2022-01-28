/* 
## 문제 2.
while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
*/


//풀이방법 1
let num = 9;
//while(num > -1)
while(num >= 0){
    if(num %2 !== 0){
        console.log(num);
    }
    num--;
}

//풀이방법 2
let i = 9;

while(i > -1 ){
    console.log(i);
    i-=2 ;
}

