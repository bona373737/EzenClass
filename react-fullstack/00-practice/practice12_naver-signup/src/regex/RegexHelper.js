/**
 * @filename    : RegexHelper.js
 * @author      :
 * @description : 정규표현식 검사 수행
 */

//for node.js
//const BadRequestException = require('./BadRequestException);
import BadRequestException from "../exceptions/BadRequestException";

class RegexHelper {
    //constructor(){}

    /**
     *값의 존재 여부를 검사한다.
     * @param {string} field 검사 대상 객체
     * @param {string} msg      값이 없는 경우 표시할 메시지 내용
     */
    value(field, msg) {
        const content = field.value;
        if (
            content == undefined ||
            content == null ||
            (typeof content === "string" && content.trim().length === 0)
        ) {
            throw new BadRequestException(msg, field);
        }
        //위의 if문에 해당하지 않는 경우
        return true;
    }

    /**
     * 입력값이 지정된 글자수를 초과했는지를 검사한다.
     * @param {string} field 검사할 대상의 css선택자
     * @param {int} len         최대글자수
     * @param {string} msg      값이 없을 경우 표시될 메세지
     */
    maxLength(field, len, msg) {
        this.value(field, msg);

        const content = field.value;
        if (content.trim().length > len) {
            throw new BadRequestException(msg, field);
        }

        return true;
    }

    /**
     * 입력값이 지정된 글자수 미만인지 검사한다.
     * @param {string} field   검사할 대상의 css선택자
     * @param {int} len           최소 글자수
     * @param {string}            값이 없을 경우 표시될 메시지
     */
    minLength(field, len, msg) {
        this.value(field, msg);

        let content = field.value;
        if (content.trim().length < len) {
            throw new BadRequestException(msg, field);
        }
        return true;
    }

    /**
     * 두 값이 동일한지 검사한다.
     * @param {string} origin   원본에 대한 css선택자
     * @param {string} compare  검사대상에 대한 css선택자
     * @param {string} msg      검사에 실패할 경우 표시할 메시지
     */
    compareTo(origin, compare, msg) {
        this.value(origin, msg);
        this.value(compare, msg);

        //변수 선언을 var로 해야하나???
        var src = origin.value.trim();
        var dsc = compare.value.trim();

        if (src !== dsc) {
            throw new BadRequestException(msg, origin);
        }

        return true;
    }

    /**
     * radio와 checkbox가 선택된 항목인지 확인한다.
     * @param {string} field   검사할 대상의 css선택자
     * @param {string} msg        검사에 실패할 경우 표시할 메시지
     */
    check(field, msg) {
        const checkedItem = Array.from(field).filter((v, i) => {
            return v.checked;
        });
        if (checkedItem.length === 0) {
            throw new BadRequestException(msg, field[0]);
        }
    }

    /**
     * 라디오나 체크박스의 최소 선택 갯수를 제한한다.
     * @param {string} field  검사할 대상의 css식별자
     * @param {ing} len          최소 선택 개수
     * @param {string} msg       검사에 실패할 경우 표시할 메시지
     */
    checkMin(field, len, msg) {
        //선택된 값들만 filter메서드 사용하여 배열로 담기
        const checkedItem = Array.from(field).filter((v, i) => {
            return v.checked;
        });

        if (checkedItem.length < len) {
            throw new BadRequestException(msg, field[0]);
        }
    }

    /**
     * 라디오나 체크박스의 최대 선택 갯수를 제한한다.
     * @param {string} field  검사할 대상의 css식별자
     * @param {ing} len          최대 선택 개수
     * @param {string} msg       검사에 실패할 경우 표시할 메시지
     */
    checkMax(field, len, msg) {
        //선택된 값들만 filter메서드 사용하여 배열로 담기
        const checkedItem = Array.from(field).filter((v, i) => {
            return v.checked;
        });

        if (checkedItem.length > len) {
            throw new BadRequestException(msg, field[0]);
        }
    }

    //////////////////////////////정 규 표 현 식 검사메서드//////////////////////////////////////////

    /**
     * 입력값이 정규표현식을 충족하는지 검사한다.
     * @param {string} field  검사할 대상의 css선택자
     * @param {string} msg       표시할 메시지
     * @param {object} regexExpr 검사할 정규표현식
     */
    field(field, msg, regexExpr) {
        this.value(field, msg);

        //입력값에 대한 정규표현식 검사가 실패라면?
        if (!regexExpr.test(field.value.trim())) {
            throw new BadRequestException(msg, field);
        }
        return true;
    }

    /**
     * 숫자로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출 한다.
     * @param {string} field  검사할 대상의 css선택자
     * @param {string} msg       검사 실패시 표시할 메시지
     */
    num(field, msg) {
        return this.field(field, msg, /^[0-9]*$/);
    }
    /**
     * 영문으로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출 한다.
     * @param {string} field  검사할 대상의 css선택자
     * @param {string} msg       검사 실패시 표시할 메시지
     */
    eng(field, msg) {
        return this.field(field, msg, /^[a-zA-z]*$/);
    }
    /**
     * 한글로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출 한다.
     * @param {string} field  검사할 대상의 css선택자
     * @param {string} msg       검사 실패시 표시할 메시지
     */
    kor(field, msg) {
        return this.field(field, msg, /^[ㄱ-ㅎ가-힣]*$/);
    }
    /**
     * 영문과 숫자로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출 한다.
     * @param {string} field  검사할 대상의 css선택자
     * @param {string} msg       검사 실패시 표시할 메시지
     */
    engNum(field, msg) {
        return this.field(field, msg, /^[a-zA-Z0-9]*$/);
    }
    /**
     * 한글과 숫자로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출 한다.
     * @param {string} field  검사할 대상의 css선택자
     * @param {string} msg       검사 실패시 표시할 메시지
     */
    korNum(field, msg) {
        return this.field(field, msg, /^[ㄱ-ㅎ가-힣0-9]*$/);
    }
    /**
     * 이메일주소 형식인지 검사하기위해 field()를 간접적으로 호출 한다.
     * @param {string} field  검사할 대상의 css선택자
     * @param {string} msg       검사 실패시 표시할 메시지
     */
    email(field, msg) {
        return this.field(
            field,
            msg,
            /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[az]{2})?)$/i
        );
    }
    /**
     * 중간에 -대시기호 없는 핸드폰번호 형식인지 검사하기 위해 field()를 간접적으로 호출 한다.
     * @param {string} field  검사할 대상의 css선택자
     * @param {string} msg       검사 실패시 표시할 메시지
     */
    cellphone(field, msg) {
        return this.field(field, msg, /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/);
    }
    /**
     * 집번호 형식인지 검사하기 위해 field()를 간접적으로 호출 한다.
     * @param {string} field  검사할 대상의 css선택자
     * @param {string} msg       검사 실패시 표시할 메시지
     */
    telphone(field, msg) {
        return this.field(field, msg, /^\d{2,3}\d{3,4}\d{4}$/);
    }
    /**
     * 집번호와 핸드폰번호 형식 둘중하나를 충족하는지 검사.
     * @param {string} field  검사할 대상의 css선택자
     * @param {string} msg       검사 실패시 표시할 메시지
     */
    phone(field, msg) {
        this.value(field, msg);

        const content = field.value.trim();
        var check1 = /^\d{2,3}\d{3,4}\d{4}$/; //집번호형식
        var check2 = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/; //핸드폰형식

        if (!check1.test(content) && !check2.test(content)) {
            throw new BadRequestException(msg, field);
        }
        return true;
    }

    checkId(field, msg) {
        //5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.
        return this.field(field, msg, /^[a-z0-9_-]{5,20}$/);
    }

    checkPw(field, msg) {
        //8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.
        return this.field(field, msg, /^[a-zA-Z0-9!@#$%^&*()?_-]{8,20}$/);
    }

    birthYearNum(field, msg) {
        return this.field(field, msg, /^[0-9]{4}$/);
    }
    birthDayNum(field, msg) {
        return this.field(field, msg, /^[0-9]{1,2}$/);
    }

    //for node.js
    //module.exports = new RegexHelper();
}
export default new RegexHelper();
