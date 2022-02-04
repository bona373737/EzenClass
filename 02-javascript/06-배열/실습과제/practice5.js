/* 
앞의 문제 4번의 장바구니 내역에서 상품금액(판매가*수량)이 가장 비싼 항목은 얼마인지 출력하시오
*/
let price = [38000, 20000, 17900, 17900];
let qty = [6,4,3,5];
let tempList = new Array(price.length);

for(let i=0; i<price.length; i++){
    tempList[i] = (price[i]*qty[i]);
}
console.log(tempList);

let max = 0;
for(let i=0; i<tempList.length; i++){
    if(tempList[i] > max){
        max = tempList[i];
    }
}
console.log("가장비싼 항목의 금액은 : " +max);



console.log("강사님 코드-------------------------------------")
let price1 = [38000, 20000, 17900, 17900];
let qty1 = [6,4,3,5];
let money = price1[0] * qty[0]

for(let i=1; i<price1.length; i++){
    //i번째에 대한 총금액
    const sum = price1[i] * qty1[i];
    if(money < sum){
        money = sum;
    }
}