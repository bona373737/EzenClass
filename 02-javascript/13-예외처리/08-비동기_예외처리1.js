/* 
비동기처리에 대한 예외 처리(1)


??? try-catch는 동기방식으로 동작하므로 비동기 방식으로 동작하는 timer처리와 ajax에는 대응하지 못한다. 
-->이걸 해결하려면 try-catch를 콜백함수속에 넣어야 한다.


promise에는 try-catch문 사용 못함 
async,await에는 try-catch문 사용가능  즉.. 개발자가 좀더 능동적으로 예외상황에 대응할수 있게 됬다.

*/