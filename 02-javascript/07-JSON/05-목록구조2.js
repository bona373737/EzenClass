//배열의 원소로서 JSON구조를 직접 명시하기 
const classRoom = {
    student : [{
        studentNo : 10101,
        grade : 1,
        name : "학생1",
    },{
        studentNo : 20202,
        grade : 2,
        name : "학생2",
    }]
}

for(let i=0; i<classRoom.student.length; i++){
    console.log(i+"번째 학생");
    console.log("학번:"+classRoom.student[i].studentNo);
    console.log("학년:"+classRoom.student[i].grade);
    console.log("이름:"+classRoom.student[i].name);
}