import fs from 'fs';

//경로에서 중간폴더가 존재하지 않은 경우 에러발생
const target = './docs/docs/docs';

if(!fs.existsSync(target)){
    //async~await즉시실행함수 내부에 try~catch문 작성
    (async()=>{
        try{
            //경로상에서 존재하지 않는 중간폴더를 함께 생성해주진않는다.
            await fs.promises.mkdir(target);
            await fs.promises.chmod(target, '0777');
            console.debug('디렉토리 생성완료');
        }catch(e){
            console.error('디렉토리 생성 에러');
            console.error(e);
        }
    })();

    console.log('%s 폴더의 생성을 요청했습니다.', target);
}else{
    (async()=>{
        try {
            await fs.promises.rmdir(target);
            console.debug('디렉토리 삭제완료');
        } catch (e) {
            console.error('디렉토리 삭제 에러');
            console.error(e);
        }
    })();

    console.log('%s 폴더의 삭제를 요청했습니다.',target);
}