import fs from 'fs';

const target = './docs';

if(!fs.existsSync(target)){
    console.log(target+ '경로가 존재하지 않기 때문에 생성합니다.');
    fs.mkdirSync(target);
    fs.chmodSync(target,'0755');
    console.log(target + '(이)가 생성되었습니다.');
}else{
    console.log(target + '경로가 존재하므로 삭제합니다.');
    fs.rmdirSync(target);
    console.log(target + '(이)가 삭제되었습니다.');
}