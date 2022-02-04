/* 
1.깊은복사(값복사) 
일반 변수끼리 복사한 경우 원본이 변경되도 복사본에는 영향이 없다. 
-배열객체가 갖는 요소들을 메서드를 활용한 깊은복사방법 : slice()
-json객체가 갖는 요소들을 깊은복사하는방법


2.참조복사(얕은복사)
배열,JSON,객체 끼리의 복사는 참조처리되어 어느한쪽을 수정하면 다 함께 수정된다.
값을 그대로 복사해 온게 아니고 해당값이 있는 주소값을 복사해오는 것이기때문. 
*/

console.log("깊은복사(값복사)--------------------------------------------------------");
let a = 100;
let b = a;
//원본과 복사본이 독립된 각각의 변수로 저장됨(서로간에 영향없음)
a +=5;
console.log(a);
b +=10;
console.log(b);


console.log("얕은복사(참조복사)-------------------------------------------------------");
const user = {
    nama : "lee"
}
const member = user;
console.log(user);
console.log(member);
//배열,json,객체를 복사하는 것은 값이 아닌 주소값을 복사해오는 형태여서 원본과 복사본이 서로 동기화됨
member.nama = "kim";
console.log(user);
console.log(member);



console.log("배열의 주소값이 아닌 실재값을 복사해오는 방법------------------");
const a1 = [1,2,3];
//복사해오려는 원본과 동일한 길이의 빈배열 생성 후
//배열안의 값에 접근하여 복사
const a2 = new Array(a1.length)
for(let i=0; i<a1.length; i++){
    a2[i]=a1[i];
}

//배열객체가 갖는 메서드를 활용한 깊은복사 방법
const a3 = a1.slice();

console.log(a1);
console.log(a2);
console.log(a3);

//원본의 값을 변경해도 다른 복사본에 영향없음
a1[0] += 100;
console.log(a1);
console.log(a2);
console.log(a3);



console.log("객체,JSON의 주소값이 아닌 실재값을 복사해오는 방법------------------");
const addr = {
    city : '서울',
    gu : '서초'
}
//깊은 복사를 수행할 빈 JSON객체를 생성
const copy = {};

for(let key in addr){
    copy[key] = addr[key];
}
console.log(addr);
console.log(copy);

//원본의 값을 변경해도 다른 복사본에 영향없음
addr.gu = "강남";
console.log(addr);
console.log(copy);

//깊은복사를 수행하는 JS내장기능(복사될 객체가 비어있는 경우 복사, 비어있지 않은 경우 누적)
const copy2 = {};
Object.assign(copy2, addr);
console.log(copy2);