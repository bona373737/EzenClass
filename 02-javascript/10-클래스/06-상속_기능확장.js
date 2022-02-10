class sayHello {
    eng() {
        console.log("hello Javascript");
    };
};

class sayHelloWorld extends sayHello {
    kor() {
        console.log("안녕하세요 자바스크립트");
    };
};

const say = new sayHelloWorld();
say.eng();
say.kor();