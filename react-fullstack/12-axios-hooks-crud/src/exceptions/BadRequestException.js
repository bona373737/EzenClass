class BadRequestException extends Error {
    //파라미터로 객체와 msg받기
    constructor(field = null, msg = '잘못된 요청입니다.') {
        super(msg);
        this._statusCode = 400;
        this._field = field;
    }
    get statusCode(){
        return this._statusCode;
    }
    get selector() {
        return this._field;
    }
    set selector(params) {
        this._field = params;
    }
}
export default BadRequestException;