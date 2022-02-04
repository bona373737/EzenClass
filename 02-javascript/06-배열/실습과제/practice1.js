/* 
다음의 소스코드는 boolean 데이터를 저장하고 있는 배열에 대한 어떤 처리를 보여준다.
실행 결과에서 제시하는 것과 같이 배열에 저장되어 있는 값들을 반전(true는 false로, false는 true로) 
변환하는 처리를 완성하시오.
*/

// 풀이방법 1
console.log("풀이방법1----------------------------")
let check_list = [true,false,false,true,false];
console.log("before --->" + check_list);
for(let i=0; i<check_list.length; i++){
    if(check_list[i] === true){
        check_list[i] = false;
    }else {
        check_list[i] = true;
    }
}
console.log("after --->" + check_list);


//풀이방법2
console.log("풀이방법2----------------------------")
let check_list1 = [true,false,false,true,false];
console.log("before --->" + check_list1);
for(let i=0; i<check_list1.length; i++){
    check_list1[i] = check_list1[i]===true? false:true;
}
console.log("after --->" + check_list1);


//강사님 코드
//boolean값 반전시킬때 사용하는 NOT연산자 "!"
console.log("강사님코드----------------------------")
let check_list2 = [true,false,false,true,false];
console.log("before --->" + check_list2);
for(let i=0; i<check_list2.length; i++){
    check_list2[i] = !check_list2[i];
}
console.log("after --->" + check_list2);