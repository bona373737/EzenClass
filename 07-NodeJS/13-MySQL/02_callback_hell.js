/**
 * @description  callback hell 경험해보기.
 * 참조관계에 있는 데이터를 삭제해야 할 경우 참조관계의 데이터를 먼저 삭제 해야 하므로
 * 순차적으로 동작시키기 위해 콜백함수가 중첩된다.
 */

/**1)모듈 및 환경설정 불러오기 */
import {join, resolve} from 'path';
import dotenv from 'dotenv';
import mysql from 'mysql2';

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

/**2) mysql 접속객체 생성 */
const dbcon = mysql.createConnection(connectionInfo);

/**3) 데이터베이스 접속 */
dbcon.connect((error)=>{

    if(error){
        console.error('데이터베이스 접속에 실패했습니다.');
        console.error(error);
        return;
    }

    const targetDeptno = 102;

    //첫번째로 참조관계의 데이터 삭제하고
    dbcon.query("DELETE FROM student WHERE deptno=?",[targetDeptno], (error,result)=>{
        if(error){
            console.log('sql문 실행에 실패했습니다.');
            console.log(error);
            dbcon.end();  
            return;
        }

        //두번째로 참조관계의 데이터 또 삭제하고
        dbcon.query("DELETE FROM professor WHERE deptno=?", [targetDeptno], (error,result)=>{
            if(error){
                console.log('sql문 실행에 실패했습니다.');
                console.log(error);
                dbcon.end();  
                return;
            }

            //세번째로 드디어 내가 원래 삭제하고자 했던 데이터 삭제
            dbcon.query("DELETE FROM department WHERE deptno=?", [targetDeptno], (error,result)=>{
                if(error){
                    console.log('sql문 실행에 실패했습니다.');
                    console.log(error);
                    dbcon.end();  
                    return;
                }

                //저장결과 확인
                console.log('반영된 데이터의 수 : ' + result.affectedRows);
                console.log('생생된 pk값 : ' + result.insertId);
                dbcon.end();


            })//세번째 콜백함수
        })//두번째 콜백함수
    })//첫번째 콜백함수
});//DB접속 콜배함수


