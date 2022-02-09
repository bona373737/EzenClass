/* 
## 문제2.
가로(`width`), 세로(`height`)정보를 getter, setter로 관리하는 Rectangle 클래스를 정의하시오.   
이 클래스는 생성자의 파라미터가 없으며 둘레의 길이를 구해 리턴하는 getAround() 메서드와   
넓이를 구해 리턴하는 gerArea() 메서드를 제공합니다.   
클래스는 JSON 형식으로 작성되어야 합니다.   


#### 출력결과
가로가 10이고 세로가 5인 경우
```
둘레의 길이는 30이고 넓이는 50입니다.
```
*/

//클래스 정의
function Rectangle(){
    this._width = null;
    this._height = null;
}

//json을 활용한 getter,setter,메서드 일괄정의
Rectangle.prototype = {
    get width(){
        return this._width;
    },
    set width(param){
        this._width = param;
    },
    get height(){
        return this._height;
    },
    set height(param){
        this._height = param;
    },
    //메서드에서 멤버변수 아닌 getter,setter를 사용하여 값사용하기
    getAround : function(){
        return (this.height + this.width)*2;
    },
    getArea : function(){
        return this.height * this.width;
    }
};

let rectang = new Rectangle();
rectang.width=10;
rectang.height=5;
console.log("둘레의 길이는 %d이고 넓이는 %d입니다.",rectang.getAround(),rectang.getArea());
