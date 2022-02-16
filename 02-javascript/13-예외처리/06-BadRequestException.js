/* 
Error클래스를 상속받는 임의의 
*/

class BadRequestException extends Error {
    constructor(msg = '잘못된 요청입니다.') {
        super(msg);
        super.name = 'BadRequestException';
        //멤버변수 추가
        this._statusCode = 400;
    }
    get statusCode() {
        return this._statusCode;
    }
}

module.exports = BadRequestException;