const foo = {
    name : "자바스크립트",
    age : 19
};
//객체에 존재하지 않는 값 출력할경우 ->undefined
console.log(foo.email);
//객체에 존재하지 않는 값을 활용한 연산(age를 ageee로 오타난상황가정)
//->undefined + 1 으로 연산되므로 결과값은 NaN가 뜬다.
const nextAge = foo.ageee +1;
console.log(nextAge);



//객체에 존재하지않는 key에대한 대입연산자 사용된경우
//-> 새롭게 key값이 추가 된다
foo.email = "hello@world.com";
console.log(foo);


//빈객체의 확장
const myJson = {};
console.log(myJson);
for(let i=0; i<10; i++){
    const key = "value" + i;
    myJson[key] = i * 100;
}
console.log(myJson);


const yourJson ={};
yourJson["key추가1"]=3;
yourJson["key추가2"]=4;
console.log(yourJson);
