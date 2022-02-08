/* 
*****
****
***
**
*
위의 별찍기문제를 재귀함수 기법을 사용하여 구현하시오
 */

// max는 최대 행 수, current는 현재 출력중인 행의 위치
function printRevStar(max, current=1) {
    if(current > max){
        return;
    }else{
        let str = ""
        for(let i=0; i<max-current+1; i++){
            str += "*";
        }
        console.log(str);
        printRevStar(max,current+1);
    }
}
printRevStar(5);

/* 
별찍기 문제를 재귀함수로 풀이하면...
바깥반복문을 재귀함수로 기능하게 하고 안쪽반복문만 for사용하면 되는건가??

*/