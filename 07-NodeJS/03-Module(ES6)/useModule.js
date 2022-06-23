//파일경로 명시할때 확장자 생략 불가
//동일 경로라 하더라도 "./"는 생략불가
//"./"가 생략되는 경우 node의 내장모듈로 인식하게 된다.


//모튤형태로 참조된 함수를 호출
import my1 from './MyModule1.js';
my1();

import {name, property, say, home } from './MyModule2.js';
console.log(name);
console.log(property.id);
console.log(property.type);
say();
console.log(home.postcode);
console.log(home.address);
home.getAddress();


//클래스 형태의 모듈참조
//(리턴받는 모듈은 클래스 형태이므로 기능을 사용하기 위해선 인스턴스를 생성해야 한다.)
import my3 from './MyModule3.js';
const module_obj = new my3();
module_obj.say();


//객체형태의 모듈 참조
//리턴된 모듈은 객체형태이므로 직접 모듈내의 기능을 호출할 수 있다.
import my4 from './MyModule4.js'
my4.say();

