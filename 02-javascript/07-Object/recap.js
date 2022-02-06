
//object 생성방법1 : 'object literal' syntax
const obj1 = {};

//object 생성방법 2 : 'object constructor' syntax
const obj2 = new Object();

const person1 = {name : 'nana', age : 4};
console.log(person1);
// object에 property추가
person1.height = 130;
console.log(person1);
// object의 property 삭제
delete person1.height;
console.log(person1);

//object property에 접근하는 방법
console.log(person1.age);
console.log(person1['name']);
function printValue(obj,key){
    console.log(obj[key]);
}
printValue(person1,'name');

//property value shorthand
function makePerson(name,age){
    return{
        name,
        age
    };
};
const person2 = makePerson("kaka",8);


//Constructor Funtion
//위의 function처럼 다른계산없이 순수하게 object만 생성하는 함수는 대문자로 시작하고, this를 사용한다. 
function MakePerson(name,age){
    //this = {};
    this.name = name;
    this.age = age;
    //return this;
}

//객체안의 property의 key 출력
for(key in person1){
    console.log(key);
}

// 객체 복사 old way
const user = {name : 'cucu', age : 4};
const user2 ={};
for(key in user){
    user2[key] = user[key];
}
console.log(user2);


//객체복사 js내장객체사용 
const user3 = {};
Object.assign(user3,user);
console.log(user3);

//객체 병합 
const fruit1 = {color:'red'};
const fruit2 = {color:'blue', size: 'big'};
const mixedFruit = Object.assign({},fruit1,fruit2);
console.log(mixedFruit);
