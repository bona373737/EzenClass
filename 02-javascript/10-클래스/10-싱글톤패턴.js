class Foo{
	static current = null;

	static getInstance(){
		if(Foo.current == null){
			Foo.current == new Foo();
		}
		return Foo.current;
	}
}

//f1,f2,f3은 모두 Foo.currnet라는 단 하나의 객체를 공유해서 참조한다.
const f1 = Foo.getInstance();   //인스턴스 최초 생성
const f2 = Foo.getInstance();   //만들어진 인스턴스 재사용
const f3 = Foo.getInstance();   //만들어진 인스턴스 재사용



class Calc{
	static current =null;

	static getInstance(){
		if(Calc.current === null){
			Calc.current = new Calc();
		}
		return Calc.current;
	};
	//이 클래스의 일반 생성자함수와 메서드 정의
		constructor(){
			
    }
		plus(x,y){ return x*y}
		minus(x,y){ return x-y}
		times(x,y){ return x*y}
		div(x,y){ return x/y}
};

//인스턴스 생성하여 사용하기
const c1 = Calc.getInstance();
console.log(c1.plus(10,20))
const c2 = Calc.getInstance();
console.log(c2.minus(10,20))
//인스턴스 변수만드는 것 생략하고 한번에 작성하기도 한다.
Calc.getInstance().times(10,20);