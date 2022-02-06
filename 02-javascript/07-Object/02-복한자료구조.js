// 다양한 데이터타입을 포함하는 복합자료 구조
const company ={
    name : "(주)굿모닝컴퍼니",
    since : 2013,
    department : ["기획팀", "디자인팀", "개발팀"]
}

//데이터 접근방법(객체명.하위데이터이름  이 형태사용을 권장함)
console.log(company.department[2])
console.log(company['department'][2])