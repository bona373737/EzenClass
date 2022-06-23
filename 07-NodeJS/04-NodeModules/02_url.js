//url모듈에서 URL클래스만 참고하기
import { URL } from "url";

const myurl = "http://www.itpaper.co.kr:8765/hello/world.html?a=123&b=456#home";

//URL의 각 성분을 분해
//JS의 location객체와 동일한 기능
const location = new URL(myurl);

console.group('url성분 정보 확인');
console.debug(location);
console.debug(location.href);
console.debug(location.protocol);
console.debug(location.host);
console.debug(location.hostname);
console.debug(location.port);
console.debug(location.origin);
console.debug(location.pathname);
console.debug(location.search);
console.debug(location.hash);
console.groupEnd();
