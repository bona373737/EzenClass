/* 
아래의 소스코드는 위의 상품 목록에서 상품의 가격을 원소로 하는 배열 price를 정의하였을 때 “낮은
가격순”버튼이 눌러졌을 때 상품의 가격을 재정렬하기 위한 코드에 대한 일부이다. 빈 칸을 채워넣어
완성하시오.

오름차순 정렬
*/
let price = [209000,109000,119000,109000,94000];
console.log("상품가격 --->" + price);

for(let i=0; i<price.length-1; i++){
    for(let j=i+1; j=price.length; j++){
        if(price[i] > price[j]){
            let tmp = price[i];
            price[i] = price[j];
            price[j] = tmp;
        }
    }
}
console.log("낮은가격순 --->" + price);



console.log("강사님 코드-------------------------------------")
let price1 = [209000,109000,119000,109000,94000];
console.log("상품가격 --->" + price);

for(let )

/* 
오른차순으로 정렬 공식
부모반복문 : i가 0부터 전체길이의-1보다 작은동안
자식반복문 : i가 i+1부터 전체길이보다 작은동안
i번째와 j번째의 크기를 비교하여 맞교환 처리 수행
*/