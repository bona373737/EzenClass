/* 
callback hell을 탈출하기 위해 ES6에서 도입된 promise기술
->>자바스크립트에서는 네트워크 통신이 거의 유일한 비동기 처리작업

promist 사용법
1.promise를 가동하기 위해서는 promise객체를 리턴하는 함수가 필요함
2.promise객체는 resolve함수와 reject함수를 파라미터로 받는 콜백이 필요함

function myPromise() {
    return new Promise(function(resolve,reject)){
        //이 안에 비동기적으로 실행할 내용을 코드작성
        //이 안의 실행코드를 성공했을땐 resolve를 실행시키고 
        //이 안의 실행코드가 실패했을땐 reject를  실행시킨다. 
    };
};

const doMyPromise = myPromise();
//함수를 실행시킨뒤 함수실행의 성공,실패 여부에 따른 후속 코드 작성
doMyPromise.then((객체)=>{
    성공했을 경우 실행됨 : resolve()

}).catch((객체)=>{
    실패했을 경우 실행됨 : reject()

}).finally(()=>{
    성공,실패여부에 상관없이 무조건 실행되는 마무리 처리

});



------------------------------------------------------------------------------------
promise를 사용하기 전에는 myPromise()함수내에서 함수 실행 결과에 따른 
성공했을때의 후속 코드와 실패했을때의 후속코드를 같은 함수내에 다함께 작성 했었다. 
-->promise를 사용하게 되면서, 성공,실패여부에 따른 후속코드를 분리시킬수 있었다.


ES7에서 promise를 좀더 개선하여 async,await를 사용하게 되면서 promise는 과도기의 기술로서 
현재는 잘 사용되지 않고 있고 취업시 기술면접 문제로 잘 나온다.


*/

function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
};

function getLuckyResult() {
    return new Promise(function (resolve, reject) {

        setTimeout(() => {
            console.log("당신의 추첨 결과는....?");
            const lucky = random(1, 9);

            if (lucky % 2 == 0) {
                resolve({
                    msg: "당첨입니다!!",
                    a: 1,
                    b: 2,
                    c: 3
                }); //객체로 전달
            } else {
                reject({
                    msg: "꽝~!!",
                    d: -1,
                    e: -2
                }); //객체로 전달
            }
        }, 1000);

    });
}


const mypromise = getLuckyResult();

mypromise.then(({
    msg,
    a,
    b,
    c
}) => {
    console.log("%s, a=%d, b=%d, c=%d", msg, a, b, c);

}).catch(({
    msg,
    d,
    e
}) => {
    console.error('%s, d=%d, e=%d', msg, d, e);

}).finally(() => {
    console.log('finish!')

});