/* 

## 문제1.

다음은 10명의 학생들에 대한 혈액형 데이터이다.
['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O']

아래와 같은 result JSON을 정의하고, 각 혈액형별 학생수를 아래의 json의 각 key에 대한 value에 저장하시오
 (혈액형별 학생 수를 for문을 활용하여 산출해야 합니다.)

 */
const bloodType = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O'];
const result = {"A" : 0, "B" : 0, "AB" : 0, "O" : 0};

for(let i=0; i<bloodType.length; i++){
    if(bloodType[i] == 'A'){
        result['A'] ++;
    }else if(bloodType[i] =='B'){
        result['B'] ++;
    }else if(bloodType[i] =='O'){
        result['O'] ++;
    }else if(bloodType[i] =='AB'){
        result['AB'] ++;
    }
};
console.log(result);


//switch문 사용하여 재풀이
const bloodType1 = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O'];
const result1 = {"A" : 0, "B" : 0, "AB" : 0, "O" : 0};
for(let i=0; i<bloodType1.length; i++){
    switch(bloodType1[i]){
        case 'A' :
            result1['A'] ++;
            break;
        case 'B' :
            result1['B'] ++;
            break;
        case 'O' :
            result1['O'] ++;
            break;
        case 'AB' :
            result1['AB'] ++;
            break;
    }
}
console.log(result1);



//강사님 코드
//key값과 배열 구성값들의 이름이 똑같은 점을 활용하면 좀더 간단한 코드작성 가능.
const bloodData = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O'];
const result2 = {"A" : 0, "B" : 0, "AB" : 0, "O" : 0};
for(const b of bloodData){
    result2[b]++;
}
console.log(result2);

