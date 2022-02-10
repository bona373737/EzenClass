/* 
문제4. 다음을 만족하는 클래스 Account를 작성하시오.

1) 다음의 2 개의 필드를 선언
    문자열 owner; (이름)
    숫자형 balance; (금액)
2) 위 모든 필드에 대한 getter와 setter의 구현
3) 위 모든 필드를 사용하는 가능한 모든 생성자의 구현-----???? 이부분이 뭔말이즹? 생성자 여러개 구현??
3) 메소드 deposit()의 헤드는 다음과 같으며 인자인 금액을 저축하는 메소드
    deposit(amount)
4) 메소드 withdraw()의 헤드는 다음과 같으며 인자인 금액을 인출(리턴)하는 메소드
    withdraw(long amount)
    인출 상한 금액은 잔액까지로 하며, 이 경우 이러한 상황을 출력
 */

class Account {
    constructor() {
        //문자열 owner, 숫자형 balance
        // this._owner = "";
        // this._balance = 0;
        //-> js는 할당되는 값에 따라 데이터타입이 변경되므로 초기값은 null로 넣기.
        this._owner = null;
        this._balance = null;
    };
    get owner() {
        return this._owner;
    };
    set owner(value) {
        this._owner = value;
    };
    get balance() {
        return this._balance;
    };
    set balance(value) {
        this._balance = value;
    };
    deposit(amount) {
        this.balance += amount;
    };
    withdraw(longAmount) {
        if (this.balance > longAmount) {
            this.balance -= longAmount;
            return longAmount;
        } else {
            console.log("인출가능 금액을 초과하였습니다.")
            console.log("현재인출가능 잔액 : " + this.balance);
        }
    };
};

let myAccount = new Account();
myAccount.balance = 3000000;
myAccount.owner = "nana";
console.log(myAccount.balance);
myAccount.deposit(50000);
console.log(myAccount.balance);
myAccount.withdraw(25000);
console.log(myAccount.balance);
myAccount.withdraw(40000000000);