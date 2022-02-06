//JSON반복문 for in

const student = {
    studentNo : 10101,
    grade : 1,
    name : "학생1",
    phoneNo : "010-1231-2342"
}

for (let k in student){
    console.log("%s : %s", k, student[k]);
    console.log(`${k} : ${student[k]}`)
}
