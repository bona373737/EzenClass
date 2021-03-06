/**
 * @FileName ProfessorService.js
 * @Author 구본아
 * @description 교수데이터 수정,삭제,추가,조회 비즈니스로직
 */

import MybatisMapper from "mybatis-mapper";
import DBPool from "../helper/DBPool.js";
import RuntimeException from "../exceptions/RuntimeException.js";
import BadRequestException from "../exceptions/BadRequestException.js";

class ProfessorServices{
    constructor(){
        MybatisMapper.createMapper([
            './mappers/DepartmentMapper.xml',
            './mappers/StudentMapper.xml',
            './mappers/ProfessorMapper.xml'
        ])
    };

    async getList(params){
        let dbcon = null;
        let data = null;

        console.log(params);

        try {
            dbcon = await DBPool.getConnection();
            let sql = MybatisMapper.getStatement('ProfessorMapper', 'selectList', params);
            // console.log(sql);
            let [result] = await dbcon.query(sql);

            if(result.length === 0){
                throw new RuntimeException('조회된 데이터가 없습니다.');
            }
            data = result;

        } catch (error) {
            throw error;
        } finally {
            if(dbcon){dbcon.release()};
        }

        return data;
    }//getList end

    async getItem(params){
        let dbcon = null;
        let data = null;

        try {
            dbcon = await DBPool.getConnection();
            let sql = MybatisMapper.getStatement('ProfessorMapper', 'selectItem',params)
            let [result] = await dbcon.query(sql);

            if(result.length === 0){
                throw new RuntimeException('입력하신 교수번호의 데이터가 없습니다.');
            }

            data=result[0]

        } catch (error) {
            throw error;
        }finally {
            if(dbcon){dbcon.release()};
        }

        return data;
    }//getItem end

    async addItem(params){
        let dbcon = null;
        let data = null;

        try {
            dbcon = await DBPool.getConnection();

            //입력한 deptno값이 실재 있는 값인지 확인 
            let sql = MybatisMapper.getStatement('DepartmentMapper', 'selectDeptnoList');
            let [deptnoList] = await dbcon.query(sql);

            let deptnoArr = [];
            for(const item of deptnoList){
                deptnoArr.push(item['deptno'])
            };

            //존재하는 deptno인경우에 데이터추가 진행
            if(deptnoArr.includes(Number(params.deptno))){   
                sql = MybatisMapper.getStatement('ProfessorMapper', 'insertItem', params);
                let [{insertId, affectedRows}] = await dbcon.query(sql);
                
                if(affectedRows === 0){
                    throw new RuntimeException('저장된 데이터가 없습니다.');
                }
                
                sql = MybatisMapper.getStatement('ProfessorMapper', 'selectItem', {profno:insertId});
                let [result] = await dbcon.query(sql);
                console.log(result);
                if(result.length === 0){
                    throw new RuntimeException('저장된 데이터를 조회할 수 없습니다.');
                }
                data = result[0];
            }else{
                throw new BadRequestException('존재하지 않는 학과번호 입니다.')
            }
        } catch (error) {
            throw error;
        } finally {
            if(dbcon){dbcon.release()};
        }

        return data;
    }//addItem end

    async editItem(params){
        let dbcon = null;
        let data = null;
                
        try {
            dbcon = await DBPool.getConnection();

            //입력한 deptno값이 실재 있는 값인지 확인 
            let sql = MybatisMapper.getStatement('DepartmentMapper', 'selectDeptnoList');
            let [deptnoList] = await dbcon.query(sql);

            let deptnoArr = [];
            for(const item of deptnoList){
                deptnoArr.push(item['deptno'])
            };

            //존재하는 deptno인경우에 데이터수정 진행
            if(deptnoArr.includes(Number(params.deptno))){   
                sql = MybatisMapper.getStatement('ProfessorMapper', 'updateItem', params);
                let [{affectedRows}] = await dbcon.query(sql);

                if(affectedRows === 0){
                    throw new RuntimeException('수정된 데이터가 없습니다.')
                }

                sql = MybatisMapper.getStatement('ProfessorMapper','selectItem',{profno:params.profno})
                let [result] = await dbcon.query(sql);

                if(result.length === 0){
                    throw new RuntimeException('수정된 데이터를 조회할 수 없습니다.')
                }
                data = result[0];
            }else{
                throw new BadRequestException('존재하지 않는 학과번호 입니다.')
            }
        } catch (error) {
            throw error;
        } finally {
            if(dbcon){dbcon.release()};
        }
        return data;
    }//updateItem end

    async deleteItem(params){
        let dbcon = null;
        //교수데이터와 참조관계인 학생데이터 먼저 삭제
        try {
            dbcon = await DBPool.getConnection();

            let sql = MybatisMapper.getStatement('StudentMapper','updateItemByProfno',params)
            let [{affectedRows}] = await dbcon.query(sql);
            console.log('수정된 student데이터 개수 :'+ affectedRows);

            sql = MybatisMapper.getStatement('ProfessorMapper', 'deleteItem',params);
            [{affectedRows}] = await dbcon.query(sql);
            console.log('삭제된 professor데이터 개수 :'+ affectedRows);

            if(affectedRows === 0){
                throw new RuntimeException('삭제된 데이터가 없습니다.')
            }
        
        } catch (error) {
            return error;
        } finally{
            if(dbcon){dbcon.release};
        }

    }//deleteItem end

    //페이지번호 구현에 필요한 전체데이터수 조회
    async getCount(params) {
        let dbcon = null;
        let cnt = 0;

        try {
            dbcon = await DBPool.getConnection();

            let sql = MybatisMapper.getStatement('ProfessorMapper', 'selectCountAll', params);
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






}//class end

export default new ProfessorServices();