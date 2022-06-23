import os from 'os';

//os모듈의 기능1_시스템 기본정보 확인
console.group('시스템 기본정보');
console.debug('홈 디렉토리 :' +os.homedir());
console.debug('시스템 아키텍쳐 :' +os.arch());
console.debug('os 플랫폼 :' +os.platform());
console.debug('시스템의 hostname :' +os.hostname());
console.debug();
console.groupEnd();

//os모듈의 기능2_사용자 계정정보 확인
const userInfo = os.userInfo();
console.group('사용자 계정정보');
console.debug('사용자계정명 :'+userInfo.username);
console.debug('사용자 홈디렉토리 :'+userInfo.homedir);
console.debug('사용자 쉘 환경 :'+userInfo.shell);
console.debug();
console.groupEnd();

//os모듈의 기능3_메모리용량 확인
//freemem() 시스템에서 현재 사용가능한 메모리용량
//totalmem() 시스템의 전체 메모리 용량
console.group('메모리용량 확인');
console.debug('%d(free)/%d(total)',os.freemem(),os.totalmem);
console.debug();
console.groupEnd();

//os모듈의 기능4_CPU정보 확인
//쿼드코어인 경우 4개, 듀얼코어인 경우 2개
const cpus = os.cpus();
console.group('메모리용량');
console.debug('CPU 코어수 :'+cpus.length);
//코어가 여러개인경우 반복문 사용하여 각 cpu의 사양 확인가능
cpus.map((v,i)=>{
    console.group('[ %d ]번째 CPU :',i + v.model);
    console.debug('처리속도:'+v.speed);
    console.debug('수행시간 정보:%j',v.times);
    console.groupEnd();
})
console.debug();
console.groupEnd('/n');


//os모듈의 기능5_네트워크 정보 확인
const nets = os.networkInterfaces();
for(const attr in nets){
    console.group('Network장치 이름 :'+attr);
    const item = nets[attr];
    item.map((v,i)=>{
        console.debug('주소형식: '+v.family);
        console.debug('IP주소: '+v.address);
        console.debug('맥주소: '+v.mac);
        console.debug('넷마스크: '+v.netmask);
    })
    console.debug();
    console.groupEnd();
    
}
