//배열 탐색하기--------------------------------------------

let arr1 = [1, 0, false, NaN];
//문자열메서드에도 동일메서드 있음(indexOf,lastIndexOf)
//indexOf(item,from)
//indexOf()메서드는 내부적으로 값을 탐색할때 "==="를 사용한다.

console.log(arr1.indexOf(0));
console.log(arr1.indexOf(null));
console.log(arr1.lastIndexOf(3));
console.log(arr1.includes(1));


console.log(arr1.indexOf(NaN)); //indexOf는 NaN인식 못함 
console.log(arr1.includes(1)); //includes는 NaN인식 가능



//find는 탐색 조건을 세부적으로 명시할 수 있다.------------------------------------
const arr3 = [5, 12, 8, 131, 44];
const found = arr3.find(function (value) {
    //조건에 부합하는 값이 return되어 found변수에 저장된다. 
    //조건에 부합하는 값에 해당하는 첫번째 값이 리턴되고 종료됨(한개만 찾기)
    console.log(value);
    if (value % 2 == 0) {
        return true; //true가 return되는 경우 value는 found에 저장된다.
    } else {
        return false; //false가 return되는 경우 value는 버려진다.
    }
});


//filter()------------------------------------------------------------------------
//find와 다르게 조건에 부합되는 값들이 return되어 배열에 저장된다.
//value에 배열의 원소 하나씩 들어가 실행되므로, 배열의 원소 개수만큼 실행된다.
const arr4 = [5, 12, 8, 131, 41];
const results = arr4.filter(function (v, i, arr) {
    console.log("v=%d, i=%d, arr=%s", v, i, arr);
    if (v % 2 == 0) {
        return true;
    } else {
        return false;
    }
});
console.log(results);


//배열 정렬 ------------------------------------------------------------------
//sort() ------------------------------------------------------------------------
//이전에 배웠던 정렬 알고리즘을 내부적으로 구현하고 있는 메서드
//배열의 모든 원소를 문자열로 취급하기 때문에 글자정렬기준이 적용된다. 
//숫자값을 정렬하려면...?
//sort함수 내에 콜백함수를 추가하여 정렬조건을 임의로 명시할수 있다. 
const arr5 = [2, 1, 15];
arr5.sort();
console.log(arr5); //sort()기본동작은 모든원소를 문자열로 취급하여 글자정렬기준적용

arr5.sort(function (a, b) {
    console.log("a=%s, b=%s", a, b);
    //리턴값이 양수인경우 : a가b보다 크다
    //리턴값이 음수인경우 : b가a보다 크다
    if (a > b) {
        return 1;
    } else {
        return -1;
    }
});
console.log(arr5);

//reverse()-------------------------------------------------------------------------
//이전에 배웠던 배열역순배치의 알고리즘을 내부적으로 구현하고 있는 메서드
let arr6 = [1, 2, 3, 4, 5];
arr6.reverse();
console.log(arr6);