/**
 * 파일저장하기 비동기로 처리
 */

import fs from 'fs';

//저장할 파일경로_절대경로로 지정
const target = './output_async.txt';
//저장할 내용
const content = 'hello world';
//동일 파일 존재여부는 금방처리되는 건이므로 동기적으로 처리
const isExists = fs.existsSync(target);


//비동기식으로 파일쓰기,삭제 
if(!isExists){
    fs.writeFile(target, content, 'utf8', (err)=>{
        if(err){
            console.error(err);
            return;
        }
        console.debug(target + '에 데이터 쓰기 완료');

        //퍼미션 설정
        //writeFile비동기처리식 안에 또다른 비동기처리 chmod
        fs.chmod(target, '0766', (err)=>{
            if(err){
                console.error(err);
                return;
            }
            console.debug(target +'의 퍼미션설정을 요청했습니다.')
        })//비동기식 처리 내용_chmod

    })//비동기식 처리 내용_writeFile

    console.debug(target +'의 파일 저장을 요청했습니다.')
}else{
    fs.unlink(target,(err)=>{
        if(err){
            console.error(err);
            return;
        }
        console.debug(target + '의 파일 삭제완료');
    })//비동기처리 내용

    console.debug(target +'의 파일 삭제를 요청했습니다.');
}
