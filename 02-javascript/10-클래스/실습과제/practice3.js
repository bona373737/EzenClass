/* 
문제3 - 다음을 만족하는 Student 클래스를 작성하시오.

1) String형의 학과와 정수형의 학번을 프로퍼티로로 선언후 생성자를 통해 주입
2) getter, setter를 정의
3) sayHello() 메서드를 통해 "나는 OOOO학과 OO학번 입니다." 를 출력하는 기능을 구현
 */

class Student {
    constructor() {
        //String형의 학과와 정수형의 학번 
        // this._studentNum = 0;
        // this._department = "";
        //-> js는 할당되는 값에 따라 데이터타입이 변경되므로 초기값은 null로 넣기.
        this._studentNum = null;
        this._department = null;
    };

    get studentNum() {
        return this._studentNum;
    };
    set studentNum(value) {
        this._studentNum = value;
    };
    get department() {
        return this._department;
    };
    set department(value) {
        this._department = value;
    };

    sayHello() {
        console.log("나는 %s학과 %d학번 입니다.", this.department, this.studentNum);
    };
};

let student1 = new Student();
student1.department = "컴퓨터공학과";
student1.studentNum = 456;
student1.sayHello();


//강사님 코드 
class Student1 {
    constructor(departmentName, departmentNumber) {
        this._departmentName = departmentName;
        this._departmentNumber = departmentNumber;
    };
    get departmentName() {
        return this._departmentName;
    };
    set departmentName(value) {
        this._departmentName = value;
    };
    get departmentNumber() {
        return this._departmentNumber;
    };
    set departmentNumber(value) {
        this._departmentNumber = value;
    };
    sayHello1() {
        console.log("나는 %s학과 %d학번 입니다.", this.departmentName, this.departmentNumber);
    };
};

let student2 = new Student1("국어국문학과", 123456);
student2.sayHello1();