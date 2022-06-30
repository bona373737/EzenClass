/************************
 1) 모듈참조
 ************************/
//직접 구현한 모듈
import logger from "./helper/LogHelper.js";
import { myip,urlFormat } from "./helper/UtilHelper.js";
//내장모듈
import url from 'url';
import path from 'path';
//설치가 필요한 모듈
import dotenv from 'dotenv';
import express from 'express';
import useragent from "express-useragent";
import serveStatic from "serve-static";
import serveFavicon from "serve-favicon";
//기본적으로 GET,POST요청에 대한 파라미터처리만 내장되어 있다.
import bodyParser from 'body-parser';    //Post요청의 파라미터 처리
import methodOverride from 'method-override';  //Put요청의 파라미터처리

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

/************************
 4) Express 객체의 추가설정
 ************************/
//Post파라미터 수신모듈설정(추가되는 미들웨어들 중 가장 먼저 설정해야 한다.)
//body-parser를 이용해 application/x-www-form-urlencoded 파싱
//extended:true (지속적사용)
//extended false (한번만사용)
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());  //text형식의 파라미터 수신가능
app.use(bodyParser.json());  //json형식의 파라미터 수신가능

//HTTT PUT, DELETE 전송방식 확장
//브라우저마다 PUT,DELETE방식으로 전송시의 HTTTP header이름이 다르다.
app.use(methodOverride('X-HTTP-Method')); //MS
app.use(methodOverride('X-HTTP-Method-Override')); //Google,GDate
app.use(methodOverride('X-Method-Override')); //IBM
//HTML FORM에서 PUT,DELETE로 전송할 경우 POST방식을 사용하되 action주소 끝에 "?_method"라고 추가한다.
//form은 기본적으로 GET,POST방식만 지원하기때문이다. 
//PUT,DELETE는 방식이름만 다를뿐 내부동작은 POST와 동일하기때문에 post방식으로 대체적용가능하다.
app.use(methodOverride('_method'));

//정적파일 url에 노출시킬 폴더연결
app.use("/", serveStatic(process.env.PUBLIC_PATH));
//favicon 설정
app.use(serveFavicon(process.env.FAVICON_PATH));
//라우터(URL분배기)객체 설정-->맨마지막에 설정
const router = express.Router();
//라우터를 express에 등록
app.use('/',router);


/************************
 5) 각 url별 백엔드 기능 정의
 ************************/
/**POST,PUT,DELTE */
//POST파라미터를 처리하기 위한 라우터 등록
router.post('/send_post',(req,res,next)=>{
    //url파라미터들은 req.body 객체의 하위데이터로 저장된다.
    logger.debug('[프론트엔드로부터 전달받은 Post파라미터]')
    for(let key in req.body){
        const str = '\t>>'+key+req.body[key];
        logger.debug(str);
    }
    const html = "<h1><span style='color:#0066ff>"
                + req.body.username
                + "</span>님의 주소는 <span style='color:#ff6600'>"
                + req.body.email
                + "</span>입니다.</h1>";

    res.status(200).send(html);        
});

//PUT파라미터를 처리하기 위한 라우터 등록
router.post('/send_PUT',(req,res,next)=>{
    //url파라미터들은 req.body 객체의 하위데이터로 저장된다.
    logger.debug('[프론트엔드로부터 전달받은 PUT파라미터]')
    for(let key in req.body){
        const str = '\t>>'+key+req.body[key];
        logger.debug(str);
    }
    const html = "<h1><span style='color:#0066ff>"
                + req.body.username
                + "</span>님의 주소는 <span style='color:#ff6600'>"
                + req.body.email
                + "</span>입니다.</h1>";
                
    res.status(200).send(html);        
})

//DELETE파라미터를 처리하기 위한 라우터 등록
router.post('/send_delete',(req,res,next)=>{
    //url파라미터들은 req.body 객체의 하위데이터로 저장된다.
    logger.debug('[프론트엔드로부터 전달받은 DELTE파라미터]')
    for(let key in req.body){
        const str = '\t>>'+key+req.body[key];
        logger.debug(str);
    }
    const html = "<h1><span style='color:#0066ff>"
                + req.body.username
                + "</span>님의 주소는 <span style='color:#ff6600'>"
                + req.body.email
                + "</span>입니다.</h1>";
                
    res.status(200).send(html);        
})


/**상품에 대한 Restful API 정의하기 */
//위의 형태처럼 개별적인 함수로 구현가능하지만 
//대부분 하나의 URL에 메서드 체인을 사용해서 4가지 전송방식을 한번에 구현한다.
router
    .get('product/:productNumber', (req,res,next)=>{
        //URL Params형식으로 조회할 상품의 일련번호를 전달받아야 한다.
        const html= "<h1><span style='color:#0066ff'>"
                    + req.params.productNumber
                    + "<span style='color:#ff6600'>조회</span>하기</h1>"
        res.status(200).send(html);
    })
    .post('product', (req,res,next)=>{
        //<form>상에 저장할 상품정보를 입력 후 전송한다(주로 관리자기능)
        //저장시에는 일련번호는 전송하지 않으며 저장 후 자동으로 발급된 일련번호를 프론트에 돌려줘야한다.
        //DB에 auto_increment로 설정된 것
        const html= "<h1><span style='color:#0066ff'>"
                    + req.params.productNumber
                    + "<span style='color:#ff6600'>등록</span>하기</h1>"
        res.status(200).send(html);
    })
    .put('product/:productNumber', (req,res,next)=>{
        //<form>상에 수정상품 정보를 입력 후 전송한다(주로 관리자기능)
        //몇번상품을 수정할지 식별하기 위해 상품 일련번호가 함께 전송된다.
        const html= "<h1><span style='color:#0066ff'>"
                    + req.params.productNumber
                    + "<span style='color:#ff6600'>수정</span>하기</h1>"
        res.status(200).send(html);
    })
    .delete('product/:productNumber', (req,res,next)=>{
        //삭제할 상품의 일련번호 전송
        const html= "<h1><span style='color:#0066ff'>"
                    + req.params.productNumber
                    + "<span style='color:#ff6600'>삭제</span>하기</h1>"
        res.status(200).send(html);
    });
//추후 실 사용기능은 get,post,put,delet요청건을 처리하기 위한 sql문을 날리고
//db로부터 전달받은 데이터를 html또는 json형태로 프론트에 보내주는 것이다.
//프론트에서 input값 
//-> url에 path파라미터,쿼리파라미터로 담아 백엔드에 전송
//->백엔드에서 path파라미터,query파라미터값을 데이터index값또는 where절에 조건값으로사용하여 sql문 작성


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