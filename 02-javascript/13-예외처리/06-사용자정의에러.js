/* 
에러의 종류를 세분화 하기위해 기본 Error클래스의 기능을 확장하여(extends)
개발자가 직접 에러에 대한 경우의 수를 정의할 수 있다.
 */

class XlessError extends Error {
    //자식클래스가 생성자를 갖는 경우 부모의 생성자를 반드시 강제호출 해야 한다. 
    constructor(msg) {
        super(msg);
        super.name = 'XlessError';
    }
}

class YlessError extends Error {
    constructor(msg) {
        super(msg);
        super.name = 'YlessError';
    }
}

function foo(x, y) {
    if (x < 0) {
        //함수 안에서 에러를 강제로 발생시키기
        throw new XlessError("x가 0보다 작습니다.");
    }
    if (y < 0) {
        throw new YlessError("y가 0보다 작습니다.");
    }
    return x + y;
}

const a = null;
const b = null;

try {
    a = foo(-1, 10);
} catch (err) {
    //catch문에 전달되는 err객체는 XlessError클래스의 객체이다.
    console.log(err.name);
    console.log(err.msg);
}

try {
    a = foo(10, -1);
} catch (err) {
    //catch문에 전달되는 err객체는 YlessError클래스의 객체이다.
    console.log(err.name);
    console.log(err.msg);
}