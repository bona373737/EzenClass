//ES5문법으로 모듈참조하기
// const path = require('path');

//ES6문법으로 모듈참조하기
import path from "path";


//path모듈의 메서드1_경로합치기 기능
//파라미터에 개수제한이 없고, 조합된 경로 문자열에 해당하는 실제 path가 존재하는지 여부는 상관없다.
const currentPath = path.join('C:/Users/hello/world', 'myphoto', '../photo.jpg');
console.group("경로 합치기");
console.debug(currentPath);
console.groupEnd();

//path모듈의 메서드2_경로에서 디렉토리,파일명,확장자를 구분하기
const dirname = path.dirname(currentPath);
const basename = path.basename(currentPath);
const extname = path.extname(currentPath);
console.group('경로 분할하기');
console.log(dirname);
console.log(basename);
console.log(extname);
console.groupEnd();

//path모듈의 메서드3_경로의 성분을 key,value형태로 분할한 JSON형태로 반환
const parse = path.parse(currentPath);
console.group('경로정보 파싱');
console.debug("%o",parse);
console.debug(parse.root);
console.debug(parse.dir);
console.debug(parse.name);
console.debug(parse.ext);
console.groupEnd();