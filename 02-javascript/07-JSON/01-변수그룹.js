/* 
nodeJS 백단 작업할때 자주 활용됨
key는 배열이므로 실데이터에 접근하는 

데이터구조가 복잡해지면(ex.3차배열) json을 사용하여 
데이터명시성(이름표를 붙이는)을 높혀줘야 한다.
-> 여러가지 복잡한 정보를 규격화 해준다. 
-> 서로다른 두개의 프로그램간에 데이터교환형식으로 쓰인다
(이것이 결국 데이터교환규격:통신프로토콜)

프론트엔드,백엔드 의 본질적인 작업은 결국 json핸들링 하는 작업.
*/



//변수들의 그룹으로서의 JSON 정의
const student = {
    studentNo : 10101,
    grade : 1,
    name : "홍길동",
    phoneNo : "010-1231-2342"
}


//데이터 출력하기
//데이터에 접근하는 기본적인 방법은 객체이름.하위정보이름 -> 90%경우로 이 방식이 사용됨
console.log(student.studentNo);
console.log(student.grade);

//json의 key이름을 배열의 인덱스처럼 활용하여 데이터 출력
//접근하고자 하는 하위 변수의 이름을 동적으로 설정해야 할 경우 활용되는 방법.
console.log(student['studentNo']);
console.log(student['grade']);
const keyName = "phoneNo";
console.log(student[keyName]);

//json의 key를 활용하여 실데이터에 동적접근하는 방법 
//key이름을 getOwnPropertyNames()메서드를 사용하여 추출하면 추출한 데이터형태는 배열이다. 
//추출한 key이름이 배열이므로 반복문 처리가 가능하다.
const keys = Object.getOwnPropertyNames(student);
console.log("student객체의 key추출 : "+keys);

for(const k of keys){
    console.log(student[k]);
}

