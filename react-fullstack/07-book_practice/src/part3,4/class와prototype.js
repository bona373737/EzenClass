/**
 *ES6이전에는 자바스크립트에 클래스가 없었다.
 * 개념자체는 존재했지만 구현하려면 class대신 prototype이라는 문법을 사용하여 다음과 같이 작업해야 한다.
 */

//기존의 prototype을 사용한 구문 작성법
function Dog(name) {
  this.name = name;
}
Dog.prototype.say = function () {
  console.log(this.name + "멍멍");
};
let dog = new Dog("검둥이");
dog.say();

//ES6부터 Class를 사용한 구문 작성
class Dog {
  constructor(name) {
    this.name = name;
  }
  say() {
    console.log(this.name + "멍멍");
  }
}
const dog = new Dog("힌둥이");
dog.say();
