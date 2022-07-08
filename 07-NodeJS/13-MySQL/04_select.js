/**1)모듈 및 환경설정 불러오기 */
import {join, resolve} from 'path';
import dotenv from 'dotenv';
import mysql2 from 'mysql2/promise';

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
        dbcon = await mysql2.createConnection(connectionInfo);
        await dbcon.connect();

        /**3) sql 실행하기 */
        const sql = "SELECT name,position,sal, date_format(hiredate, '%Y-%m-%d') AS hiredate FROM professor";
        const [result1] = await dbcon.query(sql);
        //console.log(result1);

        result1.map((v,i)=>{
            console.log("%s%s\t 급여:%d만원\t 입사일:%s",v.name, v.position, v.sal, v.hiredate);
        })

        // 실제 restfull api를 구현할 경우에는 json을 응답결과로 전달하면 되므로
        // sql조회 결과에 대해서 별도의 반복문을 처리하지는 않고 리턴받은 result1을 통째로 응답결과로 사용하면 된다.
    } catch (error) {
        console.log(error);
        return;
    } finally {
        console.log("~~~~~ db 접속 해제 ~~~~~~~~")
        if(dbcon){
            dbcon.end();
        }
    }
})(); //async 즉시실행