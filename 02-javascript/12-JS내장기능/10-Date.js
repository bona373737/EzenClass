/* 
객체를 생성하는 순간의 시스템시각(컴퓨터시각)이나 생성자파라미터로 전달될 시각을 
플랫폼에 종속되지 않는 형태로 나타낸다.
 */

const date1 = new Date();

const myYear = date1.getFullYear();
console.log("년 : " + myYear);
const myMonth = date1.getMonth() + 1; //인덱스번호 0 = 1월, 11 = 12월
console.log("월 : " + myMonth);
const myDate = date1.getDate();
console.log("일 : " + myDate);
let myDay = date1.getDay();
console.log("요일 :" + myDay);
//요일을 string으로 표현
const days = ['일', '월', '화', '수', '목', '금', '토'];
myDay = days[myDay];
console.log("요일 :" + myDay + "요일");

const hh = date1.getHours();
console.log("시간 :" + hh);
const mi = date1.getMinutes();
console.log("분 :" + mi);
const ss = date1.getSeconds();
console.log("초 : " + ss);

let result = myYear + "년 " + myMonth + "월 " + myDate + "일 " + myDay + "요일 " + hh + ":" + mi + ":" + ss;
console.log(result);

//---------------------------------------------------------------------------------
console.log("\n아래의 Date객체 메서드는 사용빈도가 적음------------------------------")
console.log("그냥 출력했을때 : " + date1);
console.log("날짜부분만 출력 : " + date1.toDateString());
console.log("ISO 8601확장형식으로 출력 : " + date1.toISOString());
console.log("현재지역 형식으로 출력(날짜) : " + date1.toLocaleDateString());
console.log("독일지역 형식으로 출력(날짜) : " + date1.toLocaleDateString('de-DE'));
console.log("한국지역 형식으로 출력(날짜) : " + date1.toLocaleDateString('ko-KR'));
console.log("현재지역 형식으로 출력(시간) : " + date1.toLocaleTimeString());
console.log("독일지역 형식으로 출력(시간) : " + date1.toLocaleTimeString('de-DE'));
console.log("한국지역 형식으로 출력(시간) : " + date1.toLocaleTimeString('ko-KR'));

//특정날짜를 의미하는 객체 생성(6월은 => 인덱스번호 5)
let myBirthDay = new Date(2021, 5, 16);
console.log("\n내 생일 :" + myBirthDay.toLocaleString());

//이미 생성된 날짜 객체의 성분변경
let data3 = new Date(2021, 9, 5, 21, 19, 31);
console.log("\n" + data3.toLocaleString());
data3.setFullYear(1111);
data3.setMonth(0);
data3.setDate(1);
data3.setHours(1);
data3.setMinutes(1);
data3.setSeconds(1);
console.log(data3.toLocaleString());