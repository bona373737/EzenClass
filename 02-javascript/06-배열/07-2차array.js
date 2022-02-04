//2차 배열( 배열 안에 배열이 들어가는 형태,가변배열) 

const a = [1,2,3,4,5];
const b = [4,5,6];
const myArray1 = [a,b];
myArray1 = [[1,2,3,4,5],[4,5,6]];
console.log(myArray1);
console.log(myArray1[0]);
console.log(myArray1[0][1]);

//new Array 클래스를 사용하여 선언하는 방법 : 사용지양.
const c= new Array(10,20,30);
const e = new Array(50,60,70);
const myArray2 = new Array(c,d);
myArray2 = new Array(new Array(10,20,30,),new Array(50,60,70));
console.log(myArray2);


//2차 배열의 탐색
const myArr = [
    [1,2,3],
    [4,5,6]
]

//배열 자체의 길이는 행(줄수)을 의미함
console.log(myArr.length);

//배열의 각 행단위로 열 조회
console.log(myArr[0].length);
console.log(myArr[1].length);

//2차배열을 반복문으로 탐색할때는 이중반복문 사용 
//바깥쪽 반복문 행, 안쪽반복문 열
for(let i=0; i<myArr.length; i++){
    console.log(myArr[i]);
    for(let j=0; j<myArr[i].length; j++){
        console.log(myArr[i][j]);
    }
}

/* 2차배열의 활용(표형태)
    국어  수학  영어
철수 30    50    70
영희 40    80    80
미희 80    50    30
 */

const grade = [
    ["철수", 92, 81, 76],
    ["영희", 72, 95, 84],
    ["민혁", 80, 86, 98]
]

