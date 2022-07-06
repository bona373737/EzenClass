/**01_simple.js에서 처럼 dbcon.connet() 함수 안에서 dbcon.query콜백 함수를 또 부르는 형태 
 * 이런식으로 코드작성하다보면 콜백 지옥을 경험하게 될것...
 * 
 * 이것 해결을 위해 async~await사용하는 방법이 있다.
 */


/**1)모듈 및 환경설정 불러오기 */
import {join, resolve} from 'path';
import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

//설정파일 내용 가져오기
dotenv.config({path: join(resolve(), "../config.env")});

//접속정보 설정
const connectionInfo = {
    host : process.env.DATABASE_HOST,         //mysql 서버주소(다른 pc인 경우 IT주소)
    port : process.env.DATABASE_PORT,         //mysql 포트번호
    user : process.env.DATABASE_USERNAME,     //mysql의 로그인 할 수 있는 계정이름
    password : process.env.DATABASE_PASSWORD, //비밀번호
    database: process.env.DATABASE_SCHEMA     //사용하고자하는 데이터베이스 이름
}

console.info(connectionInfo);

(async()=>{
    let dbcon = null;
    
    try {
        /**2) mysql접속 객체 생성 */
        dbcon = await mysql.createConnection(connectionInfo);

        /**3) DB접속 */
        await dbcon.connect();

        /**4) sql문 작성 */
        let sql = "INSERT INTO department (dname,loc) VALUES (?,?)";
        
        /** sql문 실행 1_insert문*/
        //insert의 결과로 반환되는 객체는 원소가 1개인 배열이다.
        let input_data = ['Node학과', '공학관'];
        const result1 = await dbcon.query(sql, input_data);
        // console.dir({result1});
        console.log(result1[0].affectedRows);
        console.log(result1[0].insertId);
        const firstId = result1[0].insertId;

        /** sql문 실행 2_ insert문*/
        //비구조 문법 적용해 데이터객체 바로 받기 가능하다.
        input_data = ['sql학과', '공학관'];
        const [result2] = await dbcon.query(sql, input_data);
        console.group('INSERT 처리 결과');
        console.log("저장된 데이터의 수" + result2.affectedRows);
        console.log("생성된 pk값: "+ result2.insertId);
        console.groupEnd();

        /** sql문 실행 3_ insert문 */
        //비구조 문법을 중첩해서 적용할 수도 있다.
        input_data = ['백엔드학과', '공학관'];
        const [{affectedRows,insertId}] = await dbcon.query(sql, input_data);
        console.group('INSERT 처리 결과');
        console.log("저장된 데이터의 수" + result2.affectedRows);
        console.log("생성된 pk값: "+ result2.insertId);
        console.groupEnd();

        /** sql문 실행 4_update문 */
        //UPDATE절 수행 -> WHERE절의 지정이 중요하다.
        const [result3] = await dbcon.query('UPDATE department SET dname=? WHERE deptno >= ?',["수정학과", firstId]);
        console.group("UPDATE 처리결과");
        console.log('수정된 데이터의 수 : '+ result3.affectedRows);
        console.groupEnd();

        /** sql문 실행 5_update문 */
        //UPDATE절 수행 -> WHERE절의 지정이 중요하다.
        const [result4] = await dbcon.query('DELETE FROM department WHERE deptno >= ?',[firstId]);
        console.group("UPDATE 처리결과");
        console.log('삭제된 데이터의 수 : '+ result4.affectedRows);
        console.groupEnd();

    } catch (error) {
        console.log(error);
        return;
    } finally {
        console.log("~~~~~~ db접속 해제 ~~~~~~~")
        if(dbcon){
            dbcon.end();
        }
    }

})(); //async 즉시실행





