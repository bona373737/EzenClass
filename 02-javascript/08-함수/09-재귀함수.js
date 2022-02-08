//재귀함수 : 함수가 자기스스로를 재호출 하는 것, 무한루프에 빠지는것을 주의해야 한다.
//재귀함수 사용할때는 종료조건을 명시하는 것이 중요하다.

/* 
function 함수이름(param1,para2,....,paramN){
    if(종료조건){
        return 값;
    }else {
        재귀함수();
    }
} */

//재귀함수는 순환,탐색알고리즘에서 주로 사용됨, 수열을 구할때 사용ex피보나치수열(트리탐색)
//사이트상에서는 목록 타고 들어가는 형태에서 사용됨

console.log("\n재귀함수로 팩토리얼 구하기-----------------------------");
//팩토리얼예시 "5! = 5*4*3*2*1"
//--> 팩토리얼 수학식 f(x)=x+(f(x-1))  단 f(1)=1 종료조건
// 별찍기,구구단 출력문제도 재귀함수사용하여 풀이 가능하다. 
function f(x){
    if (x <=1){
        console.log(1);
        return 1;
    }else {
        console.log(x +"x" + "f(" + (x-1) + ")");
        return x *f(x-1);
    }
};
const a =f(5);
console.log(a);




console.log("\n재귀함수로 구구단 출력하기-----------------------------");
function gugu(level, depth=1){
    //종료조건
    if(depth > 9){
        return;
    }
    //
    else {
        console.log(level + "x" + depth + "=" + (level*depth));
        gugu(level,depth+1);
    }
}
gugu(5);




console.log("\n피보나치 수열-----------------------------");
/* 
수학에서 피보나치 수는 첫째 및 둘째 항이 1이며 
그 뒤의 모든 항은 바로 앞 두 항의 합인 수열이다
ex)1, 1, 2, 3, 5, 8
수학식 f(n)=f(n-1)+f(n-2)

추가문제: 프로그래머스 피보나치수 https://programmers.co.kr/learn/courses/30/lessons/12945
*/
function fibonacci(n){
    //종료조건
    if(n<2){
        return n;
    }else{
        return fibonacci(n-2) + fibonacci(n-1);
    }
};
const fibo = fibonacci(10);
console.log(fibo);
