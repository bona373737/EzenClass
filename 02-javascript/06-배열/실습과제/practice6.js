/* 
문제4번의 장바구니 내역에서는 모든 장바구니 상품이 개별 배송이라고 한다. 상품금액(판매가*수량)이
8만원 이상인 경우 무료로 배송이 된다고 할 때 무료로 배송되는 항목은 모두 몇 개 인지 구하는 프로그
램을 구현하시오.
*/
let price = [38000, 20000, 17900, 17900];
let qty = [6,4,3,5];
let tempList = new Array(price.length);

for(let i=0; i<price.length; i++){
    tempList[i] = (price[i]*qty[i]);
}
console.log(tempList);

let freeDelivery = 0;
for(item of tempList){
    if(item > 80000){
        freeDelivery ++;
    }
}
console.log("무료배송되는 항목의 개수 : " + freeDelivery);
//내풀이방식을 보면 전체합계값을 담는 배열을 하나더 생성해서 풀이하는 경향이 있음..
//이런 풀이방식이 효율적인 풀이방법이 맞는지 문의가 필요할듯....


console.log("강사님 코드-------------------------------------");
let price1 = [38000, 20000, 17900, 17900];
let qty1 = [6,4,3,5];
let count = 0;

for(let i=0; i<price1.length; i++){
    //i번째에 대한 총금액
    let sum = price1[i] * qty1[i];
    //원하는 조건이 충족될때 카운트1추가
    if(sum > 80000){
        count++;
    }
}
console.log("무료배송 항목 : " + count + "원");