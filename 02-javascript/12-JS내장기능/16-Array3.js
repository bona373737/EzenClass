//배열탐색(반복문)배열반복문의 업그레이드 버전
/* 
기존방법 : 배열의 원소를 하나씩 스캔하여 반복

배열객체 매서드활용 반복문처리(ES6적용된 modern js)-> 주로 콜백함수가 활용됨

*/
const arr = [10, 20, 30, 40, 50];


console.log("전통적이 반복문 ------------------------------------------------");
for (let i = 0; i < arr.length; i++) {
    if (i == 3) {
        console.log("반복중단");
        break;
    }
    console.log("%d번째 원소 : %d", i, arr[i]);

}


console.log("forEach() ------------------------------------------------------");
arr.forEach((value, index) => {
    //함수에 배열의 값과 인덱스값을 전달한다.
    if (index == 3) {
        console.log("반복중단!!");
        return;
        //콜백함수역시 함수이므로 break키워드를 사용하여 반복문을 중단할수 없다.
        //return으로도 반복문 중간불가
        //콜백함수에서 반복문을 중단하고자 return을 사용해도, 현재동작중인 콜백만 종료될뿐 전체 반복에는 영향이 없다.
    }
    console.log("%d번째 원소 : %d", index, value);
});
//forEach문 내부에서 반복문에서만 사용가능한 break,continue키워드 사용불가 
//forEach문에서 반복을 중단하고자 할 경우-> forEach()가 아닌 some()을 사용하기
//forEach의 특징 
/* 
for문보다 실행속도가 빠름

*/

console.log("\nsome() ------------------------------------------------------");
arr.some((value, index) => {
    if (index == 3) {
        console.log("반복중단!!");
        return true;
        //some함수는 return하는 순간 함수가 반복을 종료한다.
    }
    console.log("%d번째 원소 : %d", index, value);
});


console.log("\n콜백함수에서 리턴하는 값들을 하나의 배열로 묶기------------------");
//전통적인 방법
const d1 = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 4 == 0) {
        d1.push(arr[i]);
    }
}
console.log(d1);

//forEach()를 사용하는 방법 
const d2 = [];
arr.forEach((v, i) => {
    if (v % 4 == 0) {
        d2.push(v);
    }
});
console.log(d2);

//map()을 사용하는 방법
const hello = arr.map(function (v, i) { //콜백함수
    return v + 1;
});
console.log(hello);

const hello2 = arr.map((v, i) => { //화살표함수
    return v + 1;
});
console.log(hello2);

const hello3 = arr.map((v, i) => v + 1); //return이 한줄인 경우 문법 간소화 가능
console.log(hello3);









//forEach()
//some()
//map()
//위의 세개 메서드가 nodeJS,Reactjs에서 가장 많이 사용되는 반복문 형태 