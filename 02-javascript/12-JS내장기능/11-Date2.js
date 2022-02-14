/* 
날짜계산

timestamp : 1970년 1월 1일 자정부터 현재까지 흐른시간을 초단위로 환산한 값
(날짜는 24시간이 하루, 60분이 1시간 등... 함계단위가 각기 다르므로, 
이부분을 "초단위"로 통일시켜 날짜의 흐름을 확인한다.)

초단위를 일단위로 환산하는 공식 : 
초단위를 


getTime()함수는 timestamp를 밀리세컨드단위로 환산하여 반환한다.
*/
const myDate = new Date();
const nowTimestamp = myDate.getTime();
console.log("현시점 timestamp : " + nowTimestamp);


//몇일이 지났는지 계산하기----------------------------------------------
//(과거시점으로 지나온 시간을 계산할 경우 소수점을 무조건 내린다.)
//(현재의 날짜 - 과거의 어느시점 날짜)
const prevDay = new Date(2020, 0, 1);
const prevTimestamp = prevDay.getTime();
const temp1 = nowTimestamp - prevTimestamp;
const dateDiff1 = Math.floor(temp1 / (24 * 60 * 60 * 1000));
console.log("2020.1.1일부터 현재까지 경과일수 : " + dateDiff1);


//몇일이 남았는지 계산하기------------------------------------------------
//(미래의 시점으로 남은 시간을 계산할 경우 소수점을 무조건 올린다)
//(미래의 어느시점 날짜 - 현재의 날짜)
const nextDay = new Date(myDate.getFullYear(), 11, 31);
const nextTimestamp = nextDay.getTime();
const tmp2 = nextTimestamp - nowTimestamp;
const dateDiff2 = Math.ceil(tmp2 / (24 * 60 * 60 * 1000));
console.log("올해의 남은 일수 : " + dateDiff2);



//지금으로부터 30일 후----------------------------------------------------
//단위가 수용할수 있는 값이 초과될 경우 자동으로 올림처리한다.







//30일이 지난 후에서 다시 100일전을 계산-------------------------------------






/* 
Date클래스 활용하지 않고  달력 출력하기---------------------------------------

6행7열로 구성된 2차배열을 준비하고
배열의 모든칸에 1부터 순차적으로 증가하는 값을 할당 
또, i가 0일때 j가 3보다 작다면 0을 대입하고 인덱스가 3인 위치부터 1씩 증가하는 값을 할당
또한, counter가 30보다 크다면 그 자리에는 0을 대신 할당해야 한다.
*/
console.log("\n\nDate클래스 활용하지 않고  달력 출력하기---------------------------------------------")
let data = new Array(6);
for (let i = 0; i < data.length; i++) {
    data[i] = new Array(7);
}
console.log(data);

let counter = 1;
for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
        if (i == 0 && j < 3 || counter > 30) {
            data[i][j] = 0;
        } else {
            data[i][j] = counter++;
        }
    };
};
console.log(data);

//달력모양으로 출력
for (let i = 0; i < data.length; i++) {
    let str = "";
    for (let j = 0; j < data[i].length; j++) {
        if (data[i][j] == 0) {
            str += '\t';
        } else {
            str += data[i][j] + '\t';
        }
    };
    console.log(str);
};


/* 
Date클래스 활용하여 당월의 달력을 출력하는 기본공식 코드 작성-----------------------------

이번달 1일이 몇요일부터 시작인지와 
이번달 마지막 날짜가 몇일까지 있는지를 알면 
시작날짜부터 마지막 날짜까지 숫자를 1씩 증가시켜서 달력을 완성시킬 수 있다. 
*/
console.log("\n\nDate클래스 활용하여 당월의 달력을 출력하는 기본공식 코드 작성-----------------------");
//오늘 날짜객체를 생성
const today = new Date();
//오늘 날짜가 해당하는 달의 1일로 이동
today.setDate(1);
//이번달 1일에 대한 요일이 무슨요일인지 확인
const startDay = today.getDay();
console.log("이번달 1일의 요일은 : " + startDay);
//이번달의 마지막날을 몇일인지 구하기(:다음달의 0번째 날짜를 구하면된다.)
const m = today.getMonth();
today.setMonth(0);
today.setDate(0);
const lastDate = today.getDate();
console.log("이번달 마지막날은 : " + lastDate);


//6행 7열의 빈배열 만들기
let data1 = new Array(6);
for (let i = 0; i < data1.length; i++) {
    data1[i] = new Array(7);
};
//1씩 증가할 값
let counter1 = 1;

for (let i = 0; i < data1.length; i++) {
    for (let j = 0; j < data1[i].length; j++) {
        if (i == 0 && j < startDay || counter1 > lastDate) {
            data1[i][j] = 0;
        } else {
            data1[i][j] = counter1++;
        }
    };
};

//달력 모양으로 출력
for (let i = 0; i < data1.length; i++) {
    let str1 = '';
    for (let j = 0; j < data1.length; j++) {
        str1 += data1[i][j] == 0 ? "\t" : (data1[i][j] + "\t");
    }
    console.log(str1);
}