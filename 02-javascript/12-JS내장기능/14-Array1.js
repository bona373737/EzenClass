/* 
배열객체 메서드 
*/
const data = [10, 20, 30, 40, 50];

//배열내에 요소들 추가,삭제 ---------------------------------
//배열 맨 끝에 요소 추가
data.push(60, 70);
console.log(data);

//배열 맨끝의 요소를 꺼내기
data.pop();
console.log("pop() : " + data);

//배열 맨 앞에 요소추가
data.unshift(1, 2, 3);
console.log("unshift() : " + data);

//배열 맨 끝의 요소 꺼내기
data.shift();
console.log("shift() : " + data);

//배열 중간의 요소들 꺼내기
const z = data.splice(2, 3) //인덱스 2번부터 요소 3개 제거
console.log(z);
console.log("splice() : " + data);

//배열 중간의 요소들 꺼내고 그 자리에 다른 값 넣기 
data.splice(0, 2, 'a', 'b', 'c'); //인덱스 0번부터 2개 삭제후 a,b,c추가
console.log("splice(추가):" + data);

//splice 삭제할 원소의 수를 0으로 지정하면 중간삽입의 기능
data.splice(3, 0, 'd', 'e');
console.log(data);


// a,b,c배열 세개를 결합한 새로운 배열 반환(배열결합)
const a = [1, 2];
const b = [3, 4, 5];
const c = [6, 7, 8, 9];
const e = a.concat(b, c);
console.log("concat():" + e);