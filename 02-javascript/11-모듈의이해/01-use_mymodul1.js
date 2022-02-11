//require() 함수는 module.exports를 통해서 등록된 기능들을 리턴한다.
//리턴받는 my객체는 module.exports에 확장된 기능들을 참조한다.
//모튤파일의 위치는 동일 경로라 하더라고 반드시 "./"를 명시한다. 
// "./"가 생략되는 경우 node의 내장 모듈로 인식된다. 

const my = require('./MyModule1'); //파일확장자 생략 가능

//모듈 형태로 참조된 함수를 호출한다.
my();