/* 
## 문제2.
1번 문제를 응용하여 같은 파라미터를 받았을 때 별을 역으로 출력하는 `printRevStar(max)` 을 구현하시오.

#### 출력결과

```
*****
****
***
**
*
```
*/
function printRevStar(max){
    for(let i=0; i<max; i++){
        let star = "";
        for(let j=0; j<max-i; j++){
            star += "*";
        }
        console.log(star);
    }
}
printRevStar(5);