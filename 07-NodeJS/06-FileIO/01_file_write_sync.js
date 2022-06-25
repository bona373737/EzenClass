import fs from 'fs';

//fs모듈 테스트를 위한 저장파일경로,저장할 내용 변수로 정의
//저장경로는 상대,절대 경로 둘다 가능하다.
//상대경로로 명시하는 경우_vscode에 설정된 작업 디렉토리가 기준이 된다.
//절대경로로 명시하는 경우 컴퓨터 전역에 대해 지정하가능하다. eg)c:/hello/world,  c:\\hello\\world
const target = './output_sync.txt';
const content = "Hello World \n Nice World";

//파일의 존재여부검사
const isExists = fs.existsSync(target);

//동일파일이 존재하지 않는 경우 새롭게 파일저장
if(!isExists){
    //
    fs.writeFileSync(target, content, 'utf8');
    
    //파일 접근권한(퍼미션) 설정
    fs.chmodSync(target,'0766');

    //파일저장이 완료된 후 메메세지 출력
    console.log(target + '파일에 데이터쓰기 및 퍼미션 설정 완료');
}else{
    //동일파일이 존재하는 경우 파일삭제
    fs.unlinkSync(target);
    console.log(target+'파일삭제완료');
}