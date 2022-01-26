/*
문제1.아래의 `switch문`을 `if문`으로 재작성 하시오.

const 수학 = "B";

switch (수학) {
    case 'A':
    case 'B':
    case 'C':
        console.log("이 과목을 Pass 했습니다.");
        break;
    default:
        console.log("이 과목을 Pass하지 못했습니다.");
        break;
}

*/
const mathGrade = "B";

if(mathGrade ==="A" || mathGrade==="B" || mathGrade === "C"){
    console.log("이 과목을 Pass 했습니다.")
}else {

    console.log("이 과목을 Pass하지 못했습니다.")
}
