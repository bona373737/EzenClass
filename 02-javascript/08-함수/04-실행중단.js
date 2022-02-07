//함수 내부 실행문에 if조건문 사용 

function returnBreake(x,y){
    if(x<10){
        return -1;
    }
    if(y<10){
        return -2;
    }
    return x +y
}

// 첫번째 if문에 의해 함수실행이 중단되고 -1이 반환됨
console.log(returnBreake(1,100));

// 두번째 if문에 의해 함수실행이 중단되고 -2가 반환됨
console.log(returnBreake(100,1));

//정상실행됨
console.log(returnBreake(100,20));
