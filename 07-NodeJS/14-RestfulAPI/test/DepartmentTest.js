/**
 * @description 단위테스트
 * 
 * 완성한 serviceLayer의 파일을 바로 컨트롤러와 연결해 버리면
 * 에러가 발생했을때 에러가 컨트롤러에서 발생한 에러인지
 * service파일에서 발생한 에러인지 구분이 어렵다. 
 * 
 * 프론트에서 화면을 연결하기 전에 리덕스 slice를 정상작동하는지 테스트를 먼저 했던것 처럼
 * service파일또한 컨트롤러에 연결하기전에 정상작동여부를 테스트 해야 한다.
 */
import DBPool from '../helper/DBPool.js';
import departmentService from '../services/DepartmentService.js';


(async()=>{

    try {
        /** getList()함수 테스트 : 목록데이터조회기능 */
        let result = await departmentService.getList();
        console.log(result)

        /** getItem()함수 테스트 : 단일데이터조회기능 */
        result = await departmentService.getItem({deptno:102});
        console.log(result);
        
        /** addItem()함수 테스트 : 데이터 삽입기능 */
        result = await departmentService.addItem({dname:'000학과', loc:'6호관?'});
        console.log(result);

        const testInsertId = result.deptno;
        
        /** editItem()함수 테스트 : 데이터 수정기능 */
        //위에서 addItem함수로 추가했던 데이터 수정하기
        result = await departmentService.editItem({deptno:testInsertId, dname:'MVC학과', loc:'4호관이지!'});
        console.log(result);
        
        /** deleteItem()함수 테스트 : 데이터 삭제기능 */
        //위에서 addItem함수로 추가했던 데이터 삭제하기
        await departmentService.deleteItem({deptno:testInsertId});

    } catch (error) {
        console.error(error);
    }finally{
        DBPool.close();
    }
})();


