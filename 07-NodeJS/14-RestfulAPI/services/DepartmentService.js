import mybatisMapper from 'mybatis-mapper';
import DBPool from '../helper/DBPool.js';
import RuntimeException from '../exceptions/RuntimeException.js';

class DepartmentService{

    /**생성자함수 - Mapper파일을 로드한다. */
    constructor(){
        //mapper의 위치는 이 소스파일이 아닌 프로젝트 root 기준의 상대경로로 명시한다.
        mybatisMapper.createMapper([
            './mappers/DepartmentMapper.xml',
            './mappers/StudentMapper.xml',
            './mappers/ProfessorMapper.xml'
        ]);
    }
    

    /**목록 데이터 조회함수 정의 -> Controller에서 이 함수를 호출해서 사용 */
    async getList(params){
        let dbcon = null;
        let data = null;

        console.log(params)

        try {
            dbcon = await DBPool.getConnection();
            let sql = mybatisMapper.getStatement('DepartmentMapper','selectList',params)
            let [result] = await dbcon.query(sql);

            if(result.length === 0){
                throw new RuntimeException('조회된 데이터가 없습니다.')
            }
            data=result;
        } catch (error) {
            throw error;
        }finally{
            if(dbcon){dbcon.release()};
        }

        return data;
    }

    /**단일 데이터 조회함수 정의 -> Controller에서 이 함수를 호출해서 사용*/
    async getItem(params){
        let dbcon = null;
        let data = null;

        try {
            dbcon = await DBPool.getConnection();
            let sql = mybatisMapper.getStatement('DepartmentMapper','selectItem',params)
            let [result] = await dbcon.query(sql);

            if(result.length === 0){
                throw new RuntimeException('조회된 데이터가 없습니다.')
            }

            //목록데이터와 달리 단일데이터는 배열에 단한개의 값만 들어있는 상태로 결과값이 반환되기때문에 
            //데이터를 바로 받을 수 있도록 배열에서 첫번째 원소를 꺼내서 반환하기
            data = result[0];
        } catch (error) {
            throw error;
        }finally{
            if(dbcon){dbcon.release()};
        }

        return data;
    }

    /** 데이터추가하고 추가된 결과를 조회하여 반환하는 함수정의 -> Controller에서 이 함수를 호출해서 사용*/
    async addItem(params){
        let dbcon = null;
        let data = null;

        try {
            dbcon = await DBPool.getConnection();

            //데이터 추가
            let sql = mybatisMapper.getStatement('DepartmentMapper','insertItem',params)
            let [{insertId, affectedRows}] = await dbcon.query(sql);

            if(affectedRows === 0){
                throw new RuntimeException('저장된 데이터가 없습니다.')
            }

            //추가된 데이터 조회
            sql = mybatisMapper.getStatement('DepartmentMapper','selectItem',{deptno:insertId})
            let [result] = await dbcon.query(sql);


            if(result.length === 0){
                throw new RuntimeException('저장된 데이터를 조회할 수 없습니다.')
            }

            //목록데이터와 달리 단일데이터는 배열에 단한개의 값만 들어있는 상태로 결과값이 반환되기때문에 
            //데이터를 바로 받을 수 있도록 배열에서 첫번째 원소를 꺼내서 반환하기
            data = result[0];
        } catch (error) {
            throw error;
        }finally{
            if(dbcon){dbcon.release()};
        }

        return data;
    }

    /** 데이터수정하고 수정적용된 데이터를 조회하여 반환하는 함수정의 -> Controller에서 이 함수를 호출해서 사용*/
    async editItem(params){
        let dbcon = null;
        let data = null;

        try {
            dbcon = await DBPool.getConnection();

            //데이터 수정
            let sql = mybatisMapper.getStatement('DepartmentMapper','updateItem',params)
            let [{affectedRows}] = await dbcon.query(sql);

            if(affectedRows === 0){
                throw new RuntimeException('수정된 데이터가 없습니다.')
            }

            //수정된 데이터의 PK값을 활용하여 조회
            sql = mybatisMapper.getStatement('DepartmentMapper','selectItem',{deptno:params.deptno})
            let [result] = await dbcon.query(sql);

            if(result.length === 0){
                throw new RuntimeException('수정된 데이터를 조회할 수 없습니다.')
            }

            //목록데이터와 달리 단일데이터는 배열에 단한개의 값만 들어있는 상태로 결과값이 반환되기때문에 
            //데이터를 바로 받을 수 있도록 배열에서 첫번째 원소를 꺼내서 반환하기
            data = result[0];
        } catch (error) {
            throw error;
        }finally{
            if(dbcon){dbcon.release()};
        }

        return data;
    }

        /** 데이터삭제하는 함수정의 -> Contoller에서 이 함수를 호출해서 사용
         * 특정학과를 삭제하려는 경우 해당 학과데이터를 FK로 참조하고 있는 데이터가 있는 경우 
         * 참조관계의 데이터들을 먼저 다 삭제 해주고 나서야 학과데이터를 삭제할 수있다.
         * 
         * sql문 여러개를 순서에 맞게 실행시켜야 한다.
        */
        
        async deleteItem(params){
            let dbcon = null;
    
            try {
                dbcon = await DBPool.getConnection();
    
                let sql = mybatisMapper.getStatement('StudentMapper','deleteItemByDeptno',params)
                let [{affectedRows}] = await dbcon.query(sql);
                console.log('Student 데이터삭제 수 : '+affectedRows);
    
                sql = mybatisMapper.getStatement('ProfessorMapper','deleteItemByDeptno',params);
                // console.log(sql);
                [{affectedRows}] = await dbcon.query(sql);
                console.log('professor 데이터 삭제 수 : '+ affectedRows);

                sql =  mybatisMapper.getStatement('DepartmentMapper','deleteItem',params);
                // console.log(sql);
                [{affectedRows}] = await dbcon.query(sql);
                console.log('department 데이터 삭제 수 : '+ affectedRows);

    
                if(affectedRows === 0){
                    throw new RuntimeException('삭제된 데이터가 없습니다.')
                }
    
            } catch (error) {
                throw error;
            }finally{
                if(dbcon){dbcon.release()};
            }
        }

            /** 전체 데이터 수 조회 */
    async getCount(params) {
        let dbcon = null;
        let cnt = 0;

        try {
            dbcon = await DBPool.getConnection();

            let sql = mybatisMapper.getStatement('DepartmentMapper', 'selectCountAll', params);
            let [result] = await dbcon.query(sql);

            if (result.length > 0) {
                cnt = result[0].cnt;
            }
        } catch (err) {
            throw err;
        } finally {
            if (dbcon) { dbcon.release(); }
        }

        return cnt;
    }
}

export default new DepartmentService();