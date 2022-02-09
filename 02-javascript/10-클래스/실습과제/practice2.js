/* 
## 문제2.
가로(`width`), 세로(`height`)정보를 getter, setter로 관리하는 Rectangle 클래스를 정의하시오.   
이 클래스는 생성자의 파라미터가 없으며 둘레의 길이를 구해 리턴하는 getAround() 메서드와   
넓이를 구해 리턴하는 gerArea() 메서드를 제공합니다.   

#### 출력결과
가로가 10이고 세로가 5인 경우
```
둘레의 길이는 30이고 넓이는 50입니다.
```
*/

class Rectangle {
    constructor(){
        this._width = null;
        this._height = null;
    };
    //getter,setter
    get width(){
        return this._width;
    };
    set width(value){
        if(!value){
            console.log("width를 입력하세요.");
            return;
        }
        this._width = value;
    };
    get height(){
        return this._height;
    };
    set height(value){
        if(!value){
            console.log("height를 입력하세요.");
            return;
        }
        this._height = value;
    };
    //메서드
    getAround(){
        return (this.width+this.height) * 2;
    };
    getArea(){
        return this.width * this.height;
    };
};

//객체생성
const rectang1 = new Rectangle();
rectang1.width =10;
rectang1.height = 5;
console.log("둘레의 길이는 %d이고 넓이는 %d입니다.",rectang1.getAround(), rectang1.getArea());