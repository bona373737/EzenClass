
console.group("1. 조건식부분에 논리값 을 사용한 경우")
let havaMoney = true;
if(havaMoney){
    console.log("havaMoney가 true면 외식하기")
}
if(!havaMoney){
    console.log("havaMoney가 false면 외식불가")
}
console.groupEnd();



console.group("\n2.조건식부분에 숫자값을 사용한 경우")
//숫자는 0은 false로 인식하고 그외는 다 true로 인식함
haveMoney = 5000;
if(havaMoney){
    console.log("haveMoney가 true면 외식하기")
}
havaMoney = 0;
if(havaMoney){
    console.log("haveMoney가 false면 외식불가")
}
console.groupEnd();



console.group("\n3.조건식부분에 비교식을 사용한 경우")
havaMoney = 5000;
if(havaMoney > 3000){
    console.log("haveMoney가 3000원 이상이면 외식하기")
}
if(havaMoney > 6000){
    console.log("haveMoney가 6000원 이상이면 외식하기")
}
console.groupEnd();



console.group("\n4.조건식부분에 논리식(AND,OR)을 사용한 경우")
const x1 = true;
const x2 = true;
if(x1 && x2){
    console.log("x1 and x2가 모두 true인경우 출력")
}
if(x1 || x2){
    console.log("x1 or x2가 true인 경우 출력")
}
console.groupEnd();



console.group("\n5.조건식부분에 NOT연산을 사용한 경우")
const a = true;
const b = false;
if(!a){
    console.log("Hello World")
}
if(!b){
    console.log("Hello World")
}
console.groupEnd();



console.group("\n5.조건식부분에 논리식NOT 을 사용한 경우")
const y1 = true;
const y2 = false;
if(y1 && y2){
    console.log("(y1 && y2) 조건은 false입니다.")
}
if(!(y1 && y2)){
    console.log("!(y1 && y2) 조건은 true입니다.")
}
console.groupEnd();
console.log("==========================================")


console.group("\n else if로 조건 여러개 설정하기");
const point = 72;
if(point > 90){
    console.log("A학점입니다.");
}else if(point >80){
    console.log("B학점입니다.");
}else if(point >70){
    console.log("C학점입니다.");
}else if(point >60){
    console.log("D학점입니다");
}else {
    console.log("F학점");
}
/*
if문은 위에서 부터 차례대로 실행결과가 누적되어 내려오므로 
학점 범위 설정시 아래처럼 설정 하지 않아도 됨! (switch문과의 차이점)
A학점 : point > 90
B학점 : point <=90 && point>80
C학점 : point <=80 && point>70
D학점 : point <=70 && point>60
*/
console.groupEnd();