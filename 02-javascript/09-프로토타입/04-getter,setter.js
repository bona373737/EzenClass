function User(){
    this._id= null;
    this._email=null;
};

const foo = new User();
foo._id = "hello";
foo._email = "hello@javascript.com";
console.log(foo);
/* 
지금까지 배운 객체를 생성하는 방법을 보면 
멤버변수에 값을 직접 입력하는 모습을 볼수 있는데 
foo._id="hello" 입력값에 오류가 있을수 있고 잘못된 값이 입력되는것을 
막을 수 있는 방법이 없이 무조건적로 값이 대입되어버린다. 

값을 대입하기 전에 해당값이 올바른 값인지 적절성여부 검증 후 
값이 대입되도록 하는 것이 setter
*/

User.prototype.checkId = function(id){
    if(this._id === null){
        return;
    }
    return this._id;
}
/* 
위 방법처럼 개발자가 함수를 만들어서 검증하던부분을 
너무 자주사용되지까 getter,setter를 자바스크립트 객체로 제공


객체의 멤버변수를 직접가져와 변수처럼 사용하는것처럼 보이지만
실상은 getter,setter함수에게 return받은 값을 사용하는것
*/
function User4(){
    this._id = null;
    this._email = null;
}
Object.defineProperty(User4.prototype, 'id', {
    get : function(){
        return this._id;
    },
    set : function(param){
        this._id = param;
    }
});
Object.defineProperty(User4.prototype, 'email', {
    get : function(){
        return this._email;
    },
    set : function(param){
        this._email = param;
    }
});

//객체 생성하기
const friend = new User4();
friend.id = '친구';
friend.email = 'fri@gmail.com';
console.log(friend.id, friend.email);
