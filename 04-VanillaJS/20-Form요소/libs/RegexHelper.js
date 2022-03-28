/**
 * @filename    : RegexHelper.js
 * @author      : 이광호(leekh4232@gmail.com)
 * @description : 정규표현식 검사 수행
 */

//for node.js
//const BadRequestException = require('./BadRequestException);

class RegexHelper {
    //constructor(){}

    /**
     *값의 존재 여부를 검사한다.
     * @param {string} selector 검사 대상의 css선택자
     * @param {string} msg      값이 없는 경우 표시할 메시지 내용
     */
    value(selector, msg) {
        const content = document.querySelector(selector).value;
        if (content == undefined || content == null || (typeof content == 'string' && content.trim().length == 0)) {
            throw new BadRequestException(msg, selector);
        }
        //위의 if문에 해당하지 않는 경우 
        return true;
    };


    /**
     * 입력값이 지정된 글자수를 초과했는지를 검사한다.
     * @param {string} selector 검사할 대상의 css선택자
     * @param {int} len         최대글자수
     * @param {string} msg      값이 없을 경우 표시될 메세지
     */
    maxLength(selector, len, msg) {
        this.value(selector, msg)

        const content = document.querySelector(selector).value;
        if (content.trim().length > len) {
            throw new BadRequestException(msg, selector);
        }

        return true;
    };

    /**
     * 입력값이 지정된 글자수 미만인지 검사한다.
     * @param {string} selector   검사할 대상의 css선택자
     * @param {int} len           최소 글자수
     * @param {string}            값이 없을 경우 표시될 메시지
     */
    minLength(selector, len, msg) {
        this.value(selector, msg);

        let content = document.querySelector(selector).value;
        if (content.trim().length < len) {
            throw new BadRequestException(msg, selector);
        }
        return true;
    };

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
        var src = document.querySelector(origin).value.trim();
        var dsc = document.querySelector(compare).value.trim();

        if (src != dsc) {
            throw new BadRequestException(msg, origin);
        }

        return true;
    };

    /**
     * radio와 checkbox가 선택된 항목인지 확인한다.
     * @param {string} selector   검사할 대상의 css선택자
     * @param {string} msg        검사에 실패할 경우 표시할 메시지
     */
    check(selector, msg) {
        const content = document.querySelector(selector);
        const checkedItem = Array.from(content).filter((v, i) => {
            v.checked
        });


    };

    /**
     * 라디오나 체크박스의 최소 선택 갯수를 제한한다.
     * @param {string} selector  검사할 대상의 css식별자
     * @param {ing} len          최소 선택 개수
     * @param {string} msg       검사에 실패할 경우 표시할 메시지
     */
    checkMin(selector, len, msg) {
        const content = document.querySelectorAll(selector);
        //선택된 값들만 filter메서드 사용하여 배열로 담기
        const checkedItem = Array.from(content).filter((v, i) => {
            return v.checked
        })

        if (checkedItem.length < len) {
            throw new BadRequestException(msg, selector);
        }
    };

    /**
     * 라디오나 체크박스의 최대 선택 갯수를 제한한다.
     * @param {string} selector  검사할 대상의 css식별자
     * @param {ing} len          최대 선택 개수
     * @param {string} msg       검사에 실패할 경우 표시할 메시지
     */
    checkMax(selector, len, msg) {
        const content = document.querySelectorAll(selector);
        //선택된 값들만 filter메서드 사용하여 배열로 담기
        const checkedItem = Array.from(content).filter((v, i) => {
            return v.checked;
        })

        if (checkedItem.length > len) {
            throw new BadRequestException(msg, selector);
        }
    };


    //////////////////////////////정 규 표 현 식 검사메서드//////////////////////////////////////////

    /**
     * 입력값이 정규표현식을 충족하는지 검사한다.
     * @param {string} selector  검사할 대상의 css선택자
     * @param {string} msg       표시할 메시지
     * @param {object} regexExpr 검사할 정규표현식
     */
    field(selector, msg, regexExpr) {
        this.value(selector, msg);

        const content = document.querySelector(selector).value;
        const src = content.trim();

        //입력값에 대한 정규표현식 검사가 실패라면?
        if (!regexExpr.test(src)) {
            throw new BadRequestException(msg, selector);
        }
        return true;
    };

    /**
     * 숫자로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출 한다.
     * @param {string} selector  검사할 대상의 css선택자
     * @param {string} msg       검사 실패시 표시할 메시지
     */
    num(selector, msg) {
        return this.field(selector, msg, /^[0-9]*$/);
    };
    /**
     * 영문으로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출 한다.
     * @param {string} selector  검사할 대상의 css선택자
     * @param {string} msg       검사 실패시 표시할 메시지
     */
    eng(selector, msg) {
        return this.field(selector, msg, /^[a-zA-z]*$/);
    };
    /**
     * 한글로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출 한다.
     * @param {string} selector  검사할 대상의 css선택자
     * @param {string} msg       검사 실패시 표시할 메시지
     */
    kor(selector, msg) {
        return this.field(selector, msg, /^[ㄱ-ㅎ가-힣]*$/);
    };
    /**
     * 영문과 숫자로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출 한다.
     * @param {string} selector  검사할 대상의 css선택자
     * @param {string} msg       검사 실패시 표시할 메시지
     */
    engNum(selector, msg) {
        return this.field(selector, msg, /^[a-zA-Z0-9]*$/);
    };
    /**
     * 한글과 숫자로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출 한다.
     * @param {string} selector  검사할 대상의 css선택자
     * @param {string} msg       검사 실패시 표시할 메시지
     */
    korNum(selector, msg) {
        return this.field(selector, msg, /^[ㄱ-ㅎ가-힣0-9]*$/);
    };
    /**
     * 이메일주소 형식인지 검사하기위해 field()를 간접적으로 호출 한다.
     * @param {string} selector  검사할 대상의 css선택자
     * @param {string} msg       검사 실패시 표시할 메시지
     */
    email(selector, msg) {
        return this.field(selector, msg, /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[az]{2})?)$/i);
    };
    /**
     * 중간에 -대시기호 없는 핸드폰번호 형식인지 검사하기 위해 field()를 간접적으로 호출 한다.
     * @param {string} selector  검사할 대상의 css선택자
     * @param {string} msg       검사 실패시 표시할 메시지
     */
    cellphone(selector, msg) {
        return this.field(selector, msg, /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/);
    };
    /**
     * 집번호 형식인지 검사하기 위해 field()를 간접적으로 호출 한다.
     * @param {string} selector  검사할 대상의 css선택자
     * @param {string} msg       검사 실패시 표시할 메시지
     */
    telphone(selector, msg) {
        return this.field(selector, msg, /^\d{2,3}\d{3,4}\d{4}$/);
    };
    /**
     * 집번호와 핸드폰번호 형식 둘중하나를 충족하는지 검사.
     * @param {string} selector  검사할 대상의 css선택자
     * @param {string} msg       검사 실패시 표시할 메시지
     */
    phone(selector, msg) {
        this.value(selector, msg);

        const content = document.querySelector(selector).value.trim();
        var check1 = /^\d{2,3}\d{3,4}\d{4}$/; //집번호형식
        var check2 = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/; //핸드폰형식

        if (!check1.test(content) && !check2.test(content)) {
            throw new BadRequestException(msg, selector);
        }
        return true;
    };

    //for node.js
    //module.exports = new RegexHelper();

























}