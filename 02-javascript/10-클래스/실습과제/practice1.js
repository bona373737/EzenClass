/* 
## 문제1. 
국어, 영어, 수학 점수를 생성자 파라미터로 입력받아서 합계와 평균을 구하는 클래스 Student를 작성하시오.   
이 때 Stuent 클래스는 합계를 리턴하는 메서드인 `sum()`과 평균을 리턴하는 `avg()`를 제공합니다.   
작성된 클래스를 활용하여 아래 표에 대한 학생별 합계 점수와 평균점수를 출력하시오.   

| 이름 | 국어 | 영어 | 수학 |
|---|---|---|---|
| 철수 | 92 | 81 | 77 |
| 영희 | 72 | 95 | 98 |
| 민혁 | 80 | 86 | 84 |


#### 출력결과
```
철수의 총점은 249점 이고 평균은 83점 입니다.
영희의 총점은 251점 이고 평균은 83.66666666666667점 입니다.
민혁의 총점은 264점 이고 평균은 88점 입니다.
```
 */

class Student {
    constructor(studentName,kr,en,math){
        //setter없이 생성자파라미터로 값을 바로 입력받는 경우엔 
        //생성자함수 블록에 조건문을 추가하여 값을 적합성여부를 체크한다.
        if(studentName === null || kr === null || en === null || math === null ||){
            console.log("입력 오류!! 다시 입력해주세요.")
        };
        this._studentName = studentName;
        this._kr = kr;
        this._en = en;
        this._math = math;
    };   
    //메서드
    sum(){
        return this.kr+this.en+this.math; 
    };
    avg(){
        return this.sum()/3;
    }; 
};

//객체생성
const grade = [
    ["철수",92,81,76],
    ["영희",72,95,84],
    ["민혁",80,86,98]
];

for(const item of grade){
    const s = new Student(item[0],item[1],item[2],item[3]);
    console.log("%s의 총점은 %d점이고 평균은 %d점 입니다.", item[0],s.sum(),s.avg());
};