
/***************************************************
1)모듈참조
****************************************************/
//직접구현한 모듈
import logger from './helper/LogHelper.js';
import { myip,urlFormat } from './helper/UtilHelper.js';
//내장모듈
import url from 'url';
import path from 'path';
//설치가 필요한 모듈
import dotenv from 'dotenv';
import express from 'express';                //express본체
import useragent from 'express-useragent';   //클라이언트의 정보를 조회할수 있는 기능
import serveStatic from 'serve-static';      //특정폴더의 파일을 URL로 노출시킴
import serveFavicon from 'serve-favicon';    //favicon처리


/***************************************************
2)Express 객체생성
****************************************************/
//여기서 생성한 app객체의 use()함수를 사용해서 
//각종 외부기능,설정내용,URL을 계속해서 확장하는 형태로 구현이 진행된다.
//Express객체(app)에 추가되는 확장기능들을 Express에서는 미들웨어라고 부른다.
const app = express();
console.dir(app);
//프로젝트 폴더위치
const __dirname = path.resolve();
//설정파일 내용 가져오기
dotenv.config({path:path.join(__dirname,"../config.env")});


/***************************************************
3)클라이언트의 접속시 초기화
****************************************************/
//app객체에 UserAgent 모듈을 탑재
//Express객체(app)에 추가되는 확장기능들을 Express에서는 미들웨어라고 부른다.
//UserAgent 모듈은 초기화 콜백함수에 전달되는 req,res객체를 확장하기 때문에 다른 모듈들 보다 먼저 설정되어야 한다.
app.use(useragent.express());

//클라이언트의 접속감지
app.use((req,res,next)=>{
    logger.debug('클라이언트가 접속했습니다.');
    //클라이언트가 접속한 시간
    const beginTime = Date.now();
    //클라이언트의 IP주소
    //클라이언트에 따라 IP주소를 가져오는 함수를 달리 사용해야해서 or함수로 IP조소를 가져오는 모든 기능을 다 묶어서 사용함
    const ip= req.headers['x-forwarded-for']||req.connection.remoteAddress||req.socket.remoteAddress||req.connection.socket.remoteAddress;
    //클라이언트의 디바이스정보(UserAgent사용)
    logger.debug(`[client] ${ip}/${req.useragent.os}/${req.useragent.browser}/${req.useragent.version}/${req.useragent.platform}`);
    //클라이언트가 요청한 페이지URL
    //콜백함수에 전달되는 req파라미터는 클라이언트가 요청한 URL의 각 부분을 변수로 담고 있다.
    const current_url = urlFormat({
        protocol:req.protocol,
        host:req.get('host'),
        port:req.port,
        pathname: req.originalUrl
    });
    //url에 한글이 포함된 경우 자동으로 암호화되기때문에 log를 출력할때는 복호화하여 사용한다.
    logger.debug(`[${req.method}] ${decodeURIComponent(current_url)}`);

    //클라이언트의 접속이 종료된 경우의 이벤트(즉, 클라이언트의 요청에 대한 모든 응답의 전송이 완료된 경우)
    //웹의 통신방식은 요청-응답이 완료되면 접속을 종료하는 일회성통신방식을 사용한다.
    res.on('finish', ()=>{
        //접속종료시간
        const endTime = Date.now();

        //이번 접속에서 클라이언트가 머문시간 = 백엔드가 실행하는데 걸린시간
        const time = endTime - beginTime;
        logger.debug(`클라이언트의 접속이 종료되었습니다:::[runtime] ${time}ms`);
        logger.debug('--------------------------------------------------------------')
    });

    //이 콜백함수를 종료하고 요청URL에 연결된 기능으로 제어를 넘김
    next();
});

/***************************************************
4) Express 객체의 추가 설정
****************************************************/
//HTML,CSS,IMG,JS 등의 정적파일을 URL에 노출시킬 폴더연결
//"http://아이피(혹은 도메인):포트번호" 이후의 경로가 router에 등록되지않은 경로라면
//static모듈에 연결된 폴더안에서 해당경로를 탐색한다.
app.use('/', serveStatic(process.env.PUBLIC_PATH));

//favicon 설정
app.use(serveFavicon(process.env.FAVICON_PATH));

//라우터(URL분배기)객체 설정-->맨마지막에 설정
const router = express.Router();
//라우터를 express에 등록
app.use('/',router);


/***************************************************
5)각 URL별 백엔드 기능 정의
****************************************************/
//01-setup.js
//router.route(path).get|post|put|delete((req,res,next)=>{})
router.get('/page1', (req,res,next)=>{
    //브라우더에게 전달할 응답내용
    let html = '<h1>Page1</h1>';
    html += '<h2>Express로 구현한 Node.js 백엔드 페이지</h2>';

    //응답보내기(Node순정방법)
    //res.writeHead(200);
    //res.write(html);
    //res.end();

    //응답보내기(Express의 간결화된 방법)
    //res.status(200);
    //res.send(html);
    
    //Express에서는 메서드 체인가능
    res.status(200).send(html);
});

router.get('/page2', (req,res,next)=>{
    //브라우저에게 전달할 응답 내용
    let html = '<h1>Page2</h1>';
    html += '<h2>Node.js Backend Page</h2>'
    res.status(200).send(html);
});

router.get('/page3', (req,res,next)=>{
    //페이지 강제이동
    res.redirect('https://www.naver.com');
})

/***************************************************
6)설정한 내용을 기반으로 서버구동 시작
****************************************************/
const ip = myip();

app.listen(process.env.PORT, ()=>{
    logger.debug('----------------------------------------------------')
    logger.debug('|          Start Express Server                     |')
    logger.debug('----------------------------------------------------')

    ip.forEach((v,i)=>{
        logger.debug(`server address => http://${v}:${process.env.PORT}`);
    });

    logger.debug('----------------------------------------------------------------')
})