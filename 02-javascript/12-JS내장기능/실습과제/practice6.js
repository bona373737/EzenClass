/* 
## 문제6.
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 
단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 
완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

```javascript
function solution(participant, completion) {
    var answer = '';
    return answer;
}
```
### 제한사항
- 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
- completion의 길이는 participant의 길이보다 1 작습니다.
(즉, 마라톤 미완주자 1명을 찾는 문제라는 의미 + 미완주자 1명을 발견하면 나머지 반복은 진행하지 않고 중지)
- 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
- 참가자 중에는 동명이인이 있을 수 없습니다.
 */
const participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
const completion = ["josipa", "filipa", "marina", "nikola"];

//해당코드는 미완주자1명을 배열앞쪽에서 발견해내도, 배열 끝번호까지 무조건 반복을 실행시키고 있다...비효율적!
function solution(participant, completion) {
    let answer = "";
    for (let i = 0; i < participant.length; i++) {
        if (completion.includes(participant[i]) === false) {
            answer = participant[i];
        }
    };
    console.log("마라톤 미완주자 : " + answer);
};

solution(participant, completion);



//강사님 코드-----------------------------------------------------------------------------

//for문을 사용하여 탐색하다가 Break사용
function solution1(participant, completion) {
    let answer1 = "";
    for (let i = 0; i < participant.length; i++) {
        const p = participant[i];
        if (!completion.includes(p)) {
            answer1 = p;
            break;
        };
    };
    //return answer1;
    console.log(answer1);
};
solution1(participant, completion);


//배열의 some한수 사용 
function solution2(participant, completion) {
    let answer2 = "";
    participant.some((v, i) => {
        if (!completion.includes(v)) {
            answer2 = v;
            return true;
        }
    });
    //return answer2;
    return console.log(answer2);
};
solution2(participant, completion);