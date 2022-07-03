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
import cookieParser from 'cookie-parser'; 
import expressSession from 'express-session'; 
import nodemailer from 'nodemailer';  //메일발송 -> app.use()로 등록과정 필요없음

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

app.use(expressSession({
    secret: process.env.SESSION_ENCRYPT_KEY,
    resave:false,
    saveUninitialized: false
}));

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

/**05-Session.js */
//insonmia로 테스트
router
    .post('/session', (req,res,next)=>{
        //POST로 전송된 변수값을 추출
        const username = req.body.username;
        const nickname = req.body.nickname;
        //세션 저장
        req.session.username=username;
        req.session.nickname=nickname;
        //결과응답
        const json = {rt:'ok'};
        res.status(200).send(json);
    })
    .get('/session', (req,res,next)=>{
        //저장되어 있는 모든 session값 탐색
        for(let key in req.session){
            const str = '[session]' + key + '=' + req.session[key];
            logger.debug(str);
        }
        const my_data={
            username: req.session.username,
            nickname: req.session.nickname
        }
        res.status(200).send(my_data);
    })
    .delete('/session', async(req,res,next)=>{
        let result='ok';
        let code = 200;
        // async~await으로 처리한 이유는????????
        try {
            await req.session.destroy();
        } catch (e) {
            logger.debug(e.message);
            result=e.message;
            code=500;
        }
        const json = {rt: result};
        res.status(code).send(json);
    })

//public/05_login.html
router
    .post('/session/login', (req,res,next)=>{
        const id = req.body.userid;
        const pw = req.body.userpw;

        logger.debug('id='+id);
        logger.debug('pw='+pw);

        let login_ok =false;
        //DB접속하여 로그인정보 가져오는코드는 현시점 생략
        if(id == 'node' && pw =='1234'){
            logger.debug('로그인성공');
            login_ok= true;
        }
        let result_code= null;
        let result_msg= null;

        if(login_ok){
            req.session.userid = id;
            req.session.userpw = pw;
            result_code = 200;
            result_msg = 'ok';
        }else{
            result_code=403;
            result_msg='fail';
        }
        const json = {rt: result_msg};
        res.status(result_code).send(json);
    })
    .delete('/session/login', async (req,res,next)=>{
        let result = 'ok';
        let code = 200;
        try {
            await req.session.destroy(0);
        } catch (e) {
            logger.error(e.message);
            result=e.message;
            code=500;
        }
        const json = {rt: result};
        res.status(code).send(json);
    })
    .get('/session/login',(req,res,next)=>{
        const id = req.session.userid;
        const pw = req.session.userpw;

        let result_code = null;
        let result_msg = null;

        if(id !== undefined && pw !== undefined){
            logger.debug('현재 로그인 상태입니다.');
            result_code = 200;
            result_msg='ok';
        }else{
            logger.debug('현재 로그인 상태가 아닙니다.');
            result_code=400;
            result_msg='fail';
        }
        const json = {rt: result_msg};
        res.status(result_code).send(json);
    })

/** 06_SendMail.js*/
//public/06_mail.html
router.post('/send_mail', async (req,res,next)=>{
    //프론트엔드에서 전달한 사용자 입력값
    const writer_name = req.body.writer_name;
    let writer_email = req.body.writer_email;
    const receiver_name = req.body.receiver_name;
    let receiver_email = req.body.receiver_email;
    const subject = req.body.subject;
    const content = req.body.content;

    //보내는사람의 이름과 주소
    //외부 SMTP연동시 주의사항 - 발신주소가 로그인 계정과 다를 경우 발송이 거부됨
    if(writer_name){
        //ex) 이광호 <leekh4234@gmail.com>
        writer_email = writer_name + '<'+ writer_email +'>';
    }
    //받는사람의 이름과 주소
    if(receiver_name){
        receiver_email = receiver_name + '<'+receiver_email + '>';
    }
    //메일발송정보구성_객체로 묶기
    const send_info ={
        from: writer_email,
        to: receiver_email,
        subject: subject,
        html: content
    }

    //메일발송에 필요한 서버정보를 사용하여 발송객체 생성
    const smtp = nodemailer.createTransport({
        host: process.env.SMTP_HOST,          //SMTP서버명: smtp.gmail.com
        port: process.env.SMTP_PORT,          //SMTP 포트 : 465
        secure :true,                         //보안연결(SSL)필요
        auth:{
            user: process.env.SMTP_USERNAME,  //Gmail 로그인에 사용하는 메일주소
            pass: process.env.SMTP_PASSWORD,  //앱 비밀번호
        }
    });

    /**메일발송 요청 */
    let rt = 200;
    let rtMsg='OK';

    try{
        await smtp.sendMail(send_info);
    }catch(err){
        rt=500;
        rtMsg=err.message;
    }

    res.status(rt).send(rtMsg);
});


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