import { URL, URLSearchParams } from "url";

const myurl = "http://www.itpaper.co.kr:8765/hello/world.html?a=123&b=456#home";

//url에서 쿼리부분만 추출하기_추출된 값의 데이터타입은 string이다.
const {searchParams} = new URL(myurl);
console.debug(searchParams);

//쿼리스트링 변수의 값 하나씩 직접 가져오기
console.log(searchParams.get('a'));
console.log(searchParams.get('b'));

//JSON객체를 QueryString문자열로 변환
//URL에 포함될수 없는 글자(한글,특수문자 등)은 자동으로 Encoding처리된다.
const obj ={name:'hello',nick:'world','address':'서울시 서초구'};
const str = new URLSearchParams(obj);
console.log(str);

