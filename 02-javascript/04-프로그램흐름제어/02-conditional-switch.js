console.group("1. switch 기본구문");
const krGrade = "B";
switch(krGrade){
    case 'A' :
        console.log("A학점입니다.");
        break;
    case 'B' :
        console.log("B학점입니다.");
        break;
    case 'C' :
        console.log("C학점입니다.");
        break;
    default :
        console.log("C학점 미만입니다.");
}
console.groupEnd();


console.group("\n2. switch구문에서 break가 없는 경우");
const enGrade = "B";
switch(enGrade){
    case 'A':
        console.log("A학점입니다");
    case 'B':
        console.log("B학점입니다.");
    case 'C':
        console.log("C학점입니다");
    default:
        console.log("C학점 미만입니다.");
}
console.groupEnd();


console.group("\n3. 의도적으로 Break조절하기");
const mathGrade = "B";
switch(mathGrade){
    case 'A':
    case 'B':
    case 'C':
        console.log("이 과목을 Pass 했습니다.");
        break;
    default:
        console.log("이 과목을 Pass하지 못했습니다.");
        break;
}
console.groupEnd();


console.group("\n4. break의 조건을 식으로 설정하는 경우");
//조건식의 결과값은 true,false 두가지 경우의 수만 있다.
const scienceGread = 72;
switch (scienceGread > 70){
    case true:
        console.log("이 과목을 Pass 했습니다.");
        break;
    default:
        console.log("이 과목을 Pass하지 못했습니다.");
        break;
}
console.groupEnd();