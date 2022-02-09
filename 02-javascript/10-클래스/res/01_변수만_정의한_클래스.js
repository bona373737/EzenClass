//멤버변수만 정의한 클래스 
//생성자함수 안에서 this키워드를 통해 객체 안에 탑제될 변수들을 초기화 한다. 

class MemberClass {
    constructor(){
        this.userName = null;
        this.email = null;
    };
};

//클래스를 활용한 객체생성
const m1 = new MemberClass();
console.log(m1);
console.log(m1.userName, m1.email);

const m2 = new MemberClass();
console.log(m2);
console.log(m2.userName, m2.email);


//객체의 특성 -> 같은 구조를 가지만 저장되는 내용은 개별적이다. 
//m1의 값이 변경되어도 m2의 값에 영향을 주지 않는다.
m1.userName = "민혁";
m1.email = "mh@gmail.com";

m2.userName = "철수";
m2.email = "cs@gmail.com";

console.log(m1);
console.log(m2);