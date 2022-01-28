/* 
이중반복문
바깥의 반복문이 1회 수행할때마다 안쪽의 반복문이 매번 처음부터 새롭게 시작하는 이중반복구조
두 반복문간의 조건값이 서로 달라야 한다.

바깥반복문은 행(가로줄)을 결정
안쪽반복문은 열(세로줄)을 결정
*/




//구구단 2단~9단출력
console.group("\n구구단 2~9단 출력")
for(let i=2; i<10; i++){
    console.log("구구단 %d단" ,i);
    for(let j=0; j<10; j++){
        console.log("%d x %d = %d", i, j, i*j);
    }
}
console.groupEnd();


/* 
반복범위 동적설정
->바깥쪽의 반복문 i(순차적으로 변경되는값)을 안쪽반복문에서 계산식에 활용.
자식 반복문의 조건식이 부모반복문의 조건변수를 활용하여 새로운 값을 계산하면
반복문의 반복범위에 변화를 줄수 있다. 
i값에 따른 j의 동적범위 변화 -> i,j=i+1
*/
console.group("\ni값에 따른 j의 동적범위 설정")
for(let i=0; i<5; i++){
    for(let j=0; j<i+1; j++){
        console.log("i=%d, j=%d", i,j);
    }
}
console.groupEnd();


console.group("\n별찍기");
/* 
*
**
***
****
*****
*/
for(let i=0; i<7; i++){
    let str ="";
    for(let j=0; j<i+1; j++){
        str += "*";
    }
    console.log(str);
}
console.groupEnd();




console.group("\n역방향 별찍기");
/* 
******
****
***
**
*
*/
for(let i=0; i<7; i++){
    let str = "";
    for(let j=0; j<7-i; j++){
        str += "*";
    }
    console.log(str);
}
console.groupEnd();

/* 
java에서의 별찍기와 혼동이 될수 있는 부분
java에서는 print()를 사용하여 출력하기 때문에 자동적으로 나란히 출력되지만 
javascript에서 console.log()로 출력하면 기본적으로 한줄씩 띄어쓰기 된다. 

*/