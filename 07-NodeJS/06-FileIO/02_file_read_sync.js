import fs from 'fs';

//fs모듈 테스트를 위해 읽어들일 파일의 경로 변수생성
const target = './output_sync.txt';

//파일 읽기
//동기식으로 작동하므로 대용량 파일인경우 내용을 다 읽어들일때까지 프로그램이 대기상태에 놓인다.
//때문에 대용량 처리에는 적합하지 않다.
if(fs.existsSync(target)){
    const data = fs.readFileSync(target, 'utf8');
    console.log(data);
}else{
    console.log(target +'파일이 존재하지 않습니다');
}