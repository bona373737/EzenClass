/**1)모듈 및 환경설정 불러오기 */
import {join, resolve} from 'path';
import dotenv from 'dotenv';
import mysql from 'mysql2';

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

/**2) mysql 접속객체 생성 */
const dbcon = mysql.createConnection(connectionInfo);

/**3) 데이터베이스 접속 */
dbcon.connect((error)=>{

    if(error){
        console.error('데이터베이스 접속에 실패했습니다.');
        console.error(error);
        return;
    }

    /**4) INSERT, UPDATE, DELETE 쿼리 생성하기 */
    //실행할 SQL구문
    //node의 변수로 치환될 부분(주로 저장,수정될값)은 ?으로 지정 
    //문자열이더라도 홑따옴표 사용안함
    const sql = "INSERT INTO department (dname,loc) VALUES (?,?)";
    //SQL문의 ?부분을 치환할 배열(순서대로 값을 지정한다.)
    const input_data = ['Node학과', '공학관'];

    /**5) SQL 실행하기 */
    dbcon.query(sql, input_data, (error,result)=>{
        //이 에러가 감지되는 경우는 sql문이 잘못 구성되어 Mysql에서 에러가 발생한 경우
        if(error){
            console.log('sql문 실행에 실패했습니다.');
            console.log(error);
            dbcon.end();  //동작완료 후 반드시 데이터베이스 접속 해제해줘야 함!!
            return;
        }

        //저장결과 확인
        console.log('반영된 데이터의 수 : ' + result.affectedRows);
        //update,delete 쿼리문의 경우 사용할수 없는 값임
        console.log('생생된 pk값' + result.insertId);
        //데이터베이스 접속해제(중요!!)
        dbcon.end();
    })
});

/**dbcon.connet() 함수 안에서 dbcon.query콜백 함수를 또 부르는 형태 
 * 이런식으로 코드작성하다보면 콜백 지옥을 경험하게 될것...
 * 
 * 이것 해결을 위해 async~await사용하는 방법이 있다.
 */

