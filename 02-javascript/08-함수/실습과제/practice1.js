/* 
## 문제1.
아래의 형태로 출력하는 함수를 구현하시오.
max는 출력해야 할 최대 라인 수

function printStar(max) {
    ... 구현하세요 ...
}
printStar(5)


#### 출력결과
*
**
***
****
*****
 */

function printStar(max){
    for(let i=0; i<max; i++){
        let star = "";
        for(let j=0; j<i+1; j++){
            star += "*";
        }
        console.log(star);
    }
}
printStar(5);
