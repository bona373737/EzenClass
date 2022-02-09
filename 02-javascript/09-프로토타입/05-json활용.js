//json을 활용한 클래스 정의하기 
function Member (username, password){
    this._username = username;
    this._password = password;
};

//getter,setter, 메서드 일괄정의 (json객체 사용하여 프로토타입 객체만들기)
Member.prototype = {
    //getter,setter 정의
    get username() {
        return this._username 
    },
    set username(param){
        this._username= param;
    },
    get password() {
        return this._password 
    },
    set password(param){
        this._password= param;
    },
    //로그인을 수행하는 메서드(메서드안에서 getter,setter 활용.)
    login : function(){
        console.log(this.username+"님 로그인 되었습니다.");
    },
    logout : function(){
        console.log(this.username+"님 로그아웃 되었습니다.");
    },
};

const member1 = new Member('hello', '1234');
console.log(member1.username);
console.log(member1.password);
member1.login();
member1.logout();