/*********************************************************
 1) 모듈참조
 *********************************************************/
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
import bodyParser from 'body-parser';   
import methodOverride from 'method-override';  
import cookieParser from 'cookie-parser'; // Cookie 처리 모듈 추가

/***************************************************
2)Express 객체생성
****************************************************/
const app = express();
const __dirname = path.resolve();
dotenv.config({path:path.join(__dirname,"../config.env")});

/***************************************************
3)클라이언트의 접속시 초기화
****************************************************/
app.use(useragent.express());

app.use((req,res,next)=>{
    logger.debug('클라이언트가 접속했습니다.');

    const beginTime = Date.now();
    const ip= req.header['x-forwarded-for']||req.connection.remoteAddress||req.socket.remoteAddress||req.connection.socket.remoteAddress;
    logger.debug(`[client] ${ip}/${req.useragent.os}/${req.useragent.browser}/${req.useragent.version}/${req.useragent.platform}`);

    const current_url = urlFormat({
        protocol:req.protocol,
        host:req.get('host'),
        port:req.port,
        pathname: req.originalUrl
    });

    logger.debug(`[${req.method}] ${decodeURIComponent(current_url)}`);

    res.on('finish', ()=>{
        const endTime = Date.now();

        const time = endTime - beginTime;
        logger.debug(`클라이언트의 접속이 종료되었습니다:::[runtime] ${time}ms`);
        logger.debug('--------------------------------------------------------------')
    });

    next();
});

/***************************************************
 4) Express 객체의 추가설정
 ***************************************************/
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());  
app.use(bodyParser.json());  

app.use(methodOverride('X-HTTP-Method')); 
app.use(methodOverride('X-HTTP-Method-Override')); 
app.use(methodOverride('X-Method-Override')); 
app.use(methodOverride('_method'));

//*쿠키를 처리할 수 있는 객체 연결 */
//cookie-parser는 데이터를 저장,조회 할때 암호화 처리를 동반한다.
//이때 암호화에 사용되는 key문자열은 개발자가 정해야 한다.
//아래코드에서는 key문자열을 외부 환경변수 파일에 저장해 놓았다.
app.use(cookieParser(process.env.COOKIE_ENCRYPT_KEY));

app.use("/", serveStatic(process.env.PUBLIC_PATH));

app.use(serveFavicon(process.env.FAVICON_PATH));

const router = express.Router();
app.use('/',router);


/*******************************************************
 5) 각 url별 백엔드 기능 정의
 *******************************************************/
router.post('/send_post',(req,res,next)=>{
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

router.post('/send_PUT',(req,res,next)=>{
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

router.post('/send_delete',(req,res,next)=>{
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

/**04-Cookie.js */
// public/04_cookie.html
router
    .post('/cookie', (req,res,next)=>{
        //POST로 전달된 파라미터 받기
        const msg = req.body.msg;
        //일반쿠키 저장하기-> 유효시간을 30초로 설정
        res.cookie('my_msg', msg, {
            maxAge:30*1000,
            path:'/'
        });
        //암호화된 쿠키저장하기->유효시간을 30초로 설정
        res.cookie('my_msg_signed',msg,{
            maxAge:30*1000,
            path:'/',
            signed:true
        });
        res.status(200).send('ok');
    })
    .get('/cookie', (req,res,next)=>{
        //일반 쿠키값들은 req.cookies객체의 하위 데이터로 저장된다(일반데이터)
        for(let key in req.cookies){
            const str='[cookies]'+key+'='+req.cookies[key];
            logger.debug(str);
        }
        //암호화된 쿠키값들은 req.signedCookies객체의 하위 데이터로 저장된다.
        for(let key in req.signedCookies){
            const str = '[signedCookies]'+key+'='+req.signedCookies[key];
            logger.debug(str);
        }
        //원하는 쿠키값을 가져온다.
        const my_msg= req.cookies.my_msg;
        const my_msg_signed= req.signedCookies.my_msg_signed;

        const result_data={
            my_msg: my_msg,
            my_msg_signed:my_msg_signed
        }
        res.status(200).send(result_data);
    })
    .delete('/cookie',(req,res,next)=>{
        //저장시 domain,path를 설정했다면 삭제시에도 동일한 값을 지정해야함
        res.clearCookie('my_msg',{path:'/'});
        res.clearCookie('my_msg_signed',{path:'/'});
        res.status(200).send('clear');
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