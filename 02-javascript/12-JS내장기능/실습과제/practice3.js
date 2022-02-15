/* 
## 문제3.
아래의 문장에서 "수업시간"이라는 단어가 총 몇 번 등장하는지 카운트 하는 프로그램을 구현하시오.
```
str = "수업시간에 배운것은 수업시간에 다 이해하고 넘어가야지 수업시간에 놓치면 따라오기 힘들다."
```
#### 출력결과
```
3
```
 */
const str = "수업시간에 배운것은 수업시간에 다 이해하고 넘어가야지 수업시간에 놓치면 따라오기 힘들다.";
const findWord = "수업시간";

// 탐색 과정이해하기
let first = str.indexOf(findWord, 0);
console.log(first);
let second = str.indexOf(findWord, first + 4);
console.log(second);
let third = str.indexOf(findWord, second + 4);
console.log(third);
let fifth = str.indexOf(findWord, third + 4);
console.log(fifth);


//위의 코드를 반복문 사용하여 구현
let startIndex = 0;
let counter = 0;

while (str.indexOf(findWord, startIndex) > -1) {
    let nowIndex = str.indexOf(findWord, startIndex)
    counter++;
    startIndex = nowIndex + findWord.length;
};
console.log("수업시간이라는 단어의 등장 횟수 : " + counter);



//강사님 코드------------------------------------------------------------
let str1 = "수업시간에 배운것은 수업시간에 다 이해하고 넘어가야지 수업시간에 놓치면 따라오기 힘들다.";
const word = "수업시간";
const flen = word.length;
let find = true;
let count = 0;

while (find) {
    console.log(str1);
    p = str1.indexOf(word);
    //수업시간 단어를 찾은 경우 find값은 여전히 true;
    find = p > -1;

    if (find) {
        count++;
        //str배열에서 확인이 끝난 부분은 아예 잘라버리기.
        str1 = str1.substring(p + flen);
    };
};
console.log("수업시간이라는 단어의 등장 횟수 : " + count);