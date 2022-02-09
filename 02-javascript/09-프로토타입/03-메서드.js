//prototype을 활용한 메서드 정의
const User3 = function(id,email){
    this._id = id;
    this._email = email;
};

User3.prototype.login = function(){
    console.log("로그인되었습니다" + this._id);
};

User3.prototype.logout = function(){
    console.log("로그아웃되었습니다." + this._id);
};


//생성자 함수로 객체 생성
const student = new User3("학생", 'stu@gmail.com');
console.log(student._id);
console.log(student._email);
student.login();
student.logout();