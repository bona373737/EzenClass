/* 
정규표현식을 재사용하기 위해 모듈화하기 
*/
const BadRequestException = require('./06-BadRequestException');

class RegexHelper {

    //입력값이 한글로만 구성되어 있는지 검사하는 메서드
    kor(input) {
        const pattern1 = /^[ㄱ-ㅎ가-힣]*$ /;
        if (!pattern1.test(input)) {
            throw new BadRequestException(msg);
        }
    }

    //입력값이 숫자로만 구성되어 있는지 검사하는 메서드
    num(input, msg) {
        const pattern2 = /^[0-9]*$/;
        if (!pattern2.test(input)) {
            throw new BadRequestException(msg);
        }
    }

    //입력값이 영문+숫자로만 구성되어 있는지 검사하는 메서드
    engNum(input, msg) {
        const pattern3 = /^[a-zA-Z0-9]*$/;
        if (!pattern3.test(input)) {
            throw new BadRequestException(msg);
        }
    }

    //최대글자수 검사하는 메서드
    madLen(input, len, msg) {
        if (input.length > len) {
            throw new BadRequestException(msg);
        }
    }
}

module.exports = RegexHelper;