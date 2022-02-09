//멤버변수를 갖는 생성자를 통해서 객체 만들기
function User(){
    //멤버변수는 일반변수와 구분하기 위해 언더바로 시작하는 이름을 갖는다.
    this._id= null;
    this._email=null;
};

//생성자를 통한 객체 만들기
const foo = new User();
foo._id = "hello";
foo._email = "hello@javascript.com";
console.log(foo);

const foo2 = new User();
foo2._id = "hello";
foo2._email = "hello@javascript.com";
console.log(foo2);