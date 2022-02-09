/* 
## 문제1. 
국어, 영어, 수학 점수를 생성자 파라미터로 입력받아서 합계와 평균을 구하는 클래스 Student를 작성하시오.   
이 때 Stuent 클래스는 합계를 리턴하는 메서드인 `sum()`과 평균을 리턴하는 `avg()`를 제공합니다.   
작성된 클래스를 활용하여 아래 표에 대한 학생별 합계 점수와 평균점수를 출력하시오.   
클래스는 JSON 형식으로 작성되어야 합니다.   

| 이름 | 국어 | 영어 | 수학 |
|---|---|---|---|
| 철수 | 92 | 81 | 77 |
| 영희 | 72 | 95 | 98 |
| 민혁 | 80 | 86 | 84 |

#### 출력결과
철수의 총점은 249점 이고 평균은 83점 입니다.
영희의 총점은 251점 이고 평균은 83.66666666666667점 입니다.
민혁의 총점은 264점 이고 평균은 88점 입니다.
*/


function Student(studentName,kr,en,math){
    this._studentName = studentName;
    this._kr = kr;
    this._en = en;
    this._math = math;
};
Student.prototype = {
    //메서드 정의
    sum : function(){
        return this._kr + this._en + this._math;
    },
    avg : function(){
        return this.sum()/3;
    }
}
const student1  = new Student("철수",30,30,30);
console.log("%s의 총점은 %d점이고 평균은 %d점 입니다.", student1._studentName,student1.sum(),student1.avg());
const student2  = new Student("영희",50,50,50);
console.log("%s의 총점은 %d점이고 평균은 %d점 입니다.", student2._studentName,student2.sum(),student2.avg());
const student3  = new Student("민혁",80,80,80);
console.log("%s의 총점은 %d점이고 평균은 %d점 입니다.", student3._studentName,student3.sum(),student3.avg());


console.log("\n반복문으로 객체활용----------------------------------")
const grade = [
    ["철수",92,81,76],
    ["영희",72,95,84],
    ["민혁",80,86,98]
];
for(const item of grade){
    const s = new Student(item[0],item[1],item[2],item[3]);
    console.log("%s의 총점은 %d점이고 평균은 %d점 입니다.", item[0],s.sum(),s.avg());
};


// //멤버변수 정의
// function Student (){
//     this._studentName = null;
//     this._kr = null;
//     this._en = null;
//     this._math = null;
// };

// //prototype사용하여 getter,setter 정의
// Object.defineProperty(Student.prototype, 'studentName',{
//     get : function(){
//         return this._studentName;
//     },
//     set : function(param){
//         this._studentName = param;
//     }
// });
// Object.defineProperty(Student.prototype, 'kr',{
//     get : function(){
//         return this._kr;
//     },
//     set : function(param){
//         this._kr = param;
//     }
// });
// Object.defineProperty(Student.prototype, 'en',{
//     get : function(){
//         return this._en;
//     },
//     set : function(param){
//         this._en = param;
//     }
// });
// Object.defineProperty(Student.prototype, 'math',{
//     get : function(){
//         return this._math;
//     },
//     set : function(param){
//         this._math = param;
//     }
// });

// //prototype사용하여 메서드 정의
// Student.prototype.sum = function(){
//     return this._kr + this._en + this._math;
// };
// Student.prototype.avg = function(){
//     return this.sum()/3;
// }


// //객체생성하기 
// const student1 = new Student();
// student1.studentName = "철수";
// student1.kr = 50;
// student1.en = 50;
// student1.math = 50;
// console.log("%s의 총점은 %d점이고 평균은 %d점 입니다.", student1.studentName,student1.sum(),student1.avg());

// const student2 = new Student();
// student2.studentName = "영희";
// student2.kr = 30;
// student2.en = 30;
// student2.math = 30;
// console.log("%s의 총점은 %d점이고 평균은 %d점 입니다.", student2.studentName,student2.sum(),student2.avg());

// const student3 = new Student();
// student3.studentName = "민혁";
// student3.kr = 80;
// student3.en = 80;
// student3.math = 80;
// console.log("%s의 총점은 %d점이고 평균은 %d점 입니다.", student3.studentName,student3.sum(),student3.avg());

