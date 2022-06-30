/**
 * @description 
 * 백엔드에 링크로 GET파라미터 전송하기
 * 장점:사용이 넘나 간편하다.
 * 단점:링크니까 무조건 페이지이동이 되야 작동한다.
 * 
 */
/***************************************************
1)모듈참조
****************************************************/
//직접구현한 모듈
import logger from './helper/LogHelper.js';
import {myip, urlFormat} from './helper/UtilHelper.js';
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
const app = express();
//프로젝트 폴더위치
const __dirname = path.resolve();
//설정파일 내용 가져오기
dotenv.config({path:path.join(__dirname,"../config.env")});


/***************************************************
3)클라이언트의 접속시 초기화
****************************************************/
app.use(useragent.express());

//클라이언트의 접속감지
app.use((req,res,next)=>{
    logger.debug('클라이언트가 접속했습니다.');
    //클라이언트가 접속한 시간
    const beginTime = Date.now();
    //클라이언트의 IP주소
    //클라이언트에 따라 IP주소를 가져오는 함수를 달리 사용해야해서 or함수로 IP조소를 가져오는 모든 기능을 다 묶어서 사용함
    const ip= req.header['x-forwarded-for']||req.connection.remoteAddress||req.socket.remoteAddress||req.connection.socket.remoteAddress;
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
app.use("/", serveStatic(process.env.PUBLIC_PATH));
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
    html += '<h2>Express로 구현한 Node.js 백엔드 페이지</h2>'

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


/*******Get Params********** */
//  public/02_get_params_by_link.html
//  public/02_get_params_by_form.html
//  public/02_get_params_by_js.html
router.get('/send_get', (req,res,next)=>{
    //ex) ?answer=400&age=10&height=175&weight=80
    //GET파라미터들은 req.query 객체의 하위 데이터로 저장된다.
    logger.debug('[프론트엔드로부터 전달받은 GET 파라미터]')
    for(let key in req.query){
        const str = '\t>>'+key+'='+req.query[key];
        logger.debug(str);
    }

    // "/send_get?answer=0000"형태로 접근한 경우 answer파라미터 값 추출
    // const answer=req.query['answer'];
    const answer = req.query.answer;
    let html = null;

    if(parseInt(answer)==300){
        html="<h1 style='color:#0066ff'>정답입니다.</h1>";
    }else{
        html="<h1 style='color:#ff6600'>틀렸습니다.</h1>";
    }
    res.status(200).send(html);
});

//직접 URL로 테스트
router.get('/send_url/:username/:age', (req,res,next)=>{
    //URL파라미터들은 req.params객체의 하위 데이터로 저장된다.
    //전달받은 URL 파라미터는 GET파라미터와 같은 방법으로 사용가능하다.
    logger.debug('[프론트엔드로부터 전달받은 GET 파라미터]')
    for(let key in req.params){
        const str = '\t>>'+key+'='+req.params[key];
        logger.debug(str);
    }

    const html="<h1><span style='color:#0066ff>"
                +req.params.username
                +"</span>님은 <span style='color:#ff6600>"
                +req.params.age
                +"</span>세 입니다. </h1>";

    res.status(200).send(html);
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