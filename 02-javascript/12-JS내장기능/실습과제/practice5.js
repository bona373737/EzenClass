/* 
## 문제5. (로또번호 생성기 2)
`1~45`사이의 범위의 1씩 증가 하는 원소가 저장되어 있는 배열 `balls`을 생성하고 
6개의 빈 칸을 갖는 배열 `lotto`를 생성하시오.

`lotto` 배열을 탐색하는 반복을 수행하면서 `balls` 배열에서 임의의 원소 하나를 추출하여 
`lotto` 배열에 채워 넣으시오.

추출된 숫자는 `balls` 배열에서는 삭제되어야 합니다.
 */

let lottoArr = new Array(6);
let balls = new Array(45);
for (let i = 0; i < balls.length; i++) {
    balls[i] = i + 1;
};

function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
};

for (let i = 0; i < lottoArr.length; i++) {
    //인덱스번호와 1~45범위의 값을 혼동함
    //let ballsIndex = random(1, balls.length);
    let ballsIndex = random(0, balls.length - 1);
    lottoArr[i] = balls[ballsIndex];
    balls.splice(ballsIndex, 1);
    //console.log(balls.length);
};
console.log(lottoArr);



//강사님 코드-----------------------------------------------------------------------
const balls1 = new Array(6);
for (let i = 0; i < balls1.length; i++) {
    balls1[i] = i + 1;
};

const lotto = new Array(6);

function random1(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
};

for (let i = 0; i < lotto.length; i++) {
    const rnd = random1(0, balls1.length - 1);
    lotto[i] = balls1[rnd];
    balls1.splice(rnd, 1);
}
console.log(lotto);