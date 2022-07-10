import DBPool from './helper/DBPool.js';
import mybatisMapper from 'mybatis-mapper';

mybatisMapper.createMapper([
    './mappers/DepartmentMapper.xml',
    './mappers/ProfessorDepartmentMapper.xml'
]);

(async()=>{
    const dbcon = await DBPool.getConnection();

    //SQL문 실행1
    //department테이블에서 deptno가 201번인 데이터를 조회하시오(결과데이터 1개) 
    let params = {deptno:201};
    let query = mybatisMapper.getStatement('DepartmentMapper', 'selectItem', params);
    let [result] =await dbcon.query(query);
    console.log(result);

    // SQL문 실행2
    //department테이블에서 학과명에 "풀스택"단어가 포함된 데이터를 조회하시오
    //단, 조회된 데이터중 첫번째데이터부터 3개 데이터만 보여줄것. 
    params = {dname:'풀스택', offset:0, listCount:3};
    query = mybatisMapper.getStatement('DepartmentMapper', 'selectList', params);
    [result] = await dbcon.query(query);
    console.log(result);

    //SQL문 실행3
    //학과이름 "풀스택", 위치 "1401"인 새 학과정보를 추가하시오
    params = {dname:'풀스택', loc:'1401호'};
    query = mybatisMapper.getStatement('DepartmentMapper', 'insertItem', params);
    [result] =await dbcon.query(query);
    console.log(`affectedRows = ${result.affectedRows},insertId = ${result.insertId}`);

    //SQL문 실행4
    //학과번호 300번인 학과데이터를 삭제하시오
    params = {deptno:300};
    query = mybatisMapper.getStatement('DepartmentMapper', 'deleteItem', params);
    [result] =await dbcon.query(query);
    console.log(`affectedRows = ${result.affectedRows}`);

    //SQL문 실행5
    //학과테이블에서 학과번호가 300번인 학과의 이름과 위치를 수정하시오
    params = {deptno:300, dname:'수정된 학과', loc:'수정된 위치'};
    query = mybatisMapper.getStatement('DepartmentMapper', 'updateItem', params);
    [result] =await dbcon.query(query);
    console.log(`affectedRows=${result.affectedRows}`);

    //SQL문 실행6
    //전체 학과수를 구하시오
    query = mybatisMapper.getStatement('DepartmentMapper', 'selectCountAll');
    [result] =await dbcon.query(query);
    console.log(`cnt=result[0].cnt`);

    //SQL문 실행7
    //교수정보와 학과정보를 함께 조회하시오
    query = mybatisMapper.getStatement('ProfessorDepartmentMapper', 'selectJoin');
    [result] = await dbcon.query(query);
    console.log(result);

    //DB커넥션풀 반납하기
    dbcon.release();
    DBPool.close();
})();