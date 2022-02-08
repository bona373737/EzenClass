/* 
*
**
***
****
*****
위의 별찍기 문제를 재귀함수 기법으로 구현하시오
 */

function gugu(level, depth=1){
    if(depth > 9){
        return;
    }else {
        console.log(level + "x" + depth + "=" + (level*depth));
        gugu(level,depth+1);
    }
}

// max는 최대 행 수, current는 현재 출력중인 행의 위치
function printStar(max, current=1) {
    if(current > max){
        return;
    }else{
        let str = ""
        for(let i=0; i<current; i++){
            str += "*";
        }
        console.log(str);
        printStar(max,current+1);
    }
}
printStar(5);