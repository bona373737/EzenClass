const m3 = {
    userName : "철민",
    email : 'ch@naver.com'
};

//m3와 같은 구조를 갖는 m4를 정의 
const m4 = m3;
console.log("m3 :"+m3.userName+m3.email);
console.log("m4 :"+m4.userName+m4.email);

//값의 변경
m3.userName = "민수";
m3.email = "ms@gmail.com";

//객체간의 복사는 서로 영향을 준다.
console.log("m3 :"+m3.userName+m3.email);
console.log("m4 :"+m4.userName+m4.email);

