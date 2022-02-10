class UserClass {
    constructor(){
        this._userName = null;
        this._email = null;
    };
    //멤버변수  _userName에 값을 할당하기 위한 setter함수
    set userName(value){
        if(!value){
            console.log("userName을 입력하세요");
            return;
        }
        this._userName = value;
    };
    //멤버변수 _userName에 값을 반환하기 위한 getter함수
    get userName(){
        return this._userName;
    };
    set email(value){
        if(!value){
            console.log("email을 입력하세요");
            return;
        }
        this._email = value;
    };
    get email(){
        return this._email;
    };
    //메서드
    login(){
        if(!this.userName || !this.email){
            console.log("userName이나 email을 확인하세요");
            return;
        };
        console.log("로그인 되었습니다.");
    }
};

const user = new UserClass();
user.login();

//setter를 통한 값을 간접할당
user.userName = "hello";
user.email = "hello@naver.com"
user.login();
