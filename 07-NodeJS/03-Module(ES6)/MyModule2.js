//exports의 하위 속성으로 변수, JSON, 함수 추가하기 
const name = "노드";
const property = {
    id: 'nodejs',
    type: 'javascript'
};
const say = function () {
    console.log("Hello MyModule2");
};

//exports속성으로 객체 추가 
const home = {
    postcode: '12345',
    address: '서울시 강남구 역삼동',
    getAddress: function () {
        console.log(this.postcode + ' ' + this.address);
    }
};

//여러개의 기능을 내보낼경우 default를 적용하지 않는다.
export {name, property, say, home};

