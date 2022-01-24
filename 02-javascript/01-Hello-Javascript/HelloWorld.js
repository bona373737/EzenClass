//ES6호환기능만 사용하도록 명시(엄격모드)
"use strict";

//메세지 출력
console.log('안녕하세요');
console.log('html없이 cmd명령어를 사용하여 js파일만 실행해보세요');
console.log('html파일에 js파일을 참조시켜 웹브라우저에서 실행해보세요');

//메세지 그룹핑해서 출력하기
console.group("message1");
    console.log('안녕하세요');
    console.log('안녕하세요');
    console.log('안녕하세요');
console.groupEnd();

console.group("message2");
    console.log('안녕하세요');
    console.log('안녕하세요');
    console.log('안녕하세요');
console.groupEnd();