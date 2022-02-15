/* 
## 문제2.
임의의 주민번호를 다음과 같이 `*`을 포함하여 변수에 저장하시오.
ssn = '020517-3******'
또한 현재 년도를 now_year라는 변수로 저장하시오.
이 값을 사용하여 생년월일, 나이, 성별을 출력하시오.

#### 출력결과
2002년 5월 17일에 태어난 20세 남자 입니다.
 */

const ssn = '990616-1******';
const nowYear = "2022";

const ssnYear = ssn.substring(0, 2);
const ssnMonth = ssn.substring(2, 4);
const ssnDay = ssn.substring(4, 6);
//나이구하는 해당 수식은 출생년월이 1900년 이상인 경우만 해당함
const ssnAge = (nowYear.substring(2)) - (ssn.substring(0, 2)) + 100 + 1;
//주민번호 뒤에 앞자리가 3,4의 경우도 있는거를 생각못함
const ssnGender = ssn.substring(8, 9) == 1 ? "남자" : "여자";

console.log("%s년 %s월 %s일에 태어난 %s세 %s 입니다.", ssnYear, ssnMonth, ssnDay, ssnAge, ssnGender);
//99년 -> 1999년으로 출력형태 수정 필요
//06월 -> 6월으로 출력형태 수정 필요





//강사님 코드--------------------------------------------------------
const ssn1 = '020517-3******';
const date = new Date();
const nowYear1 = date.getFullYear();
// console.log(typeof nowYear1);

let yy = parseInt(ssn1.substring(0, 2));
let mm = parseInt(ssn1.substring(2, 4));
let dd = parseInt(ssn1.substring(4, 6));
let gen = parseInt(ssn1.substring(7, 8));

//2000년도 이전 출생자의 주민번호 뒷자리:1,2
//2000년도 이후 출생자의 주민번호 뒷자리:3,4
yy = (gen > 2) ? yy + 2000 : yy + 1900;

const age = nowYear1 - yy + 1;
const sex = (gen % 2) ? "남자" : "여자";


console.log("%d년 %d월 %d일에 태어난 %d세 %s 입니다.", yy, mm, dd, age, sex);