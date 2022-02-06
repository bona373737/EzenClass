// 목록의 아이템으로 사용될 jSON 객체 정의하기 
const student1 = {
    studentNo : 10101,
    grade : 1,
    name : "학생1"
}
const student2 = {
    studentNo : 20202,
    grade : 2,
    name : "학생2"
}
//목록 구조를 갖는 Json객체
const classRoom = {
    student : [student1, student2];
}
console.log(classRoom);


//반복문 for사용하여 객체 내부의 배열데이터접근
for(let i=0; i<classRoom.student.length; i++){
    console.log(i + 번째학생);
    console.log("학번"+ classRoom.student[i].studentNo);
    console.log("학년"+ classRoom.student[i].grade);
    console.log("이름"+ classRoom.student[i].name);
}

//반복분 for of사용하여 객체 내부의 배열데이터접근
for(const s of classRoom.student){
    console.log("학번:"+ s.studentNo);
    console.log("학년:"+ s.grade);
    console.log("이름:"+ s.name);
}

//for of의 경우 index가 없으므로 인덱스를 추가하고자 하는경우 
//별도의 초기식과 반복문 안에 증감식을 추가해줘야한다.(while처럼)
//해당방법은 비효율적...잘 사용되진 않는다.
let i = 0;
for(const s1 of classRoom.student){
    console.log(i+ "번째 학생");
    console.log("학번:"+ s1.studentNo);
    console.log("학년:"+ s1.grade);
    console.log("이름:"+ s1.name);
    i++;
}