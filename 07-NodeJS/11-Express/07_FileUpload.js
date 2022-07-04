/*********************************************************
 1) 모듈참조
 *********************************************************/
//직접 구현한 모듈
import logger from "./helper/LogHelper.js";
import { myip,urlFormat } from "./helper/UtilHelper.js";
import {mkdirs} from "./helper/FileHelper.js"  //파일업로드 폴더 생성에 사용
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
import nodemailer from 'nodemailer';  
import multer, { diskStorage } from 'multer';              //파일 업로드 모듈
import thumbnail from 'node-thumbnail';   //썸네일 이미지 생성 모듈

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

//업로드된 파일이 저장 될 폴더를 URL에 노출함
app.use(process.env.UPLOAD_URL, serveStatic(process.env.UPLOAD_DIR));
//썸네일 이미지가 저장될 폴더를 URL에 노출함
app.use(process.env.THUMB_URL, serveStatic(process.env.THUMB_DIR));

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
    const writer_name = req.body.writer_name;
    let writer_email = req.body.writer_email;
    const receiver_name = req.body.receiver_name;
    let receiver_email = req.body.receiver_email;
    const subject = req.body.subject;
    const content = req.body.content;

    if(writer_name){
        writer_email = writer_name + '<'+ writer_email +'>';
    }
    if(receiver_name){
        receiver_email = receiver_name + '<'+receiver_email + '>';
    }
    const send_info ={
        from: writer_email,
        to: receiver_email,
        subject: subject,
        html: content
    }

    const smtp = nodemailer.createTransport({
        host: process.env.SMTP_HOST,          
        port: process.env.SMTP_PORT,          
        secure :true,                         
        auth:{
            user: process.env.SMTP_USERNAME,  
            pass: process.env.SMTP_PASSWORD,  
        }
    });

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

/**07_FileUpload.js */
//multer함수사용하여 파일업로드관련 환경설정내용이 정의된 multer 객체 생성(반환받기)
const multipart = multer({
    //업로드된 파일들이 저장될 디렉토리 경로 및 파일이름
    storage: multer.diskStorage({
        //req는 요청정보, file은 최종적으로 업로드된 결과 데이터가 저장되어 있을 객체
        destination:(req, file, callback)=>{
            /* file파라미터의 형식은 다음과 같다
             * file={
                    fieldname:'myphoto',
                    originalname: '원본파일명.jpg',
                    encoding: '7bit',
                    mimetype: 'image/jpeg'
                }
             */
            console.group('destination');
            console.debug(file);
            console.groupEnd();

            //업로드 될 폴더를 생성
            mkdirs(process.env.UPLOAD_DIR);
            mkdirs(process.env.THUMB_DIR);

            //업로드 정보에 백엔드의 업로드 파일 저장 폴더위치를 추가한다.
            //윈도우 환경을 고려하여 역슬래시를 슬래시로 변경하는 처리 추가
            file.upload_dir = process.env.UPLOAD_DIR.replace(/\\/gi, '/');
            file.thumb_dir = process.env.THUMB_DIR.replace(/\\/gi, '/');
            
            //multer객체에 업로드 경로를 전달
            callback(null, file.upload_dir);
        },
        //업로드 된 파일이 저장될 파일 이름을 결정함
        filename: (req, file, callback)=>{
            /*
             *file 파라미터는 앞 과정을 통해 정보가 확장된 상태 
             *file={
                    fieldname: 'myphoto',
                    originalname: '원본파일명.jpg',
                    encoding: '7bit',
                    minetype: 'image/jpeg',
                    upload_dir : '업로드 된 파일이 저장될 경로',
                    thumb_dir: '썸네일 이미지가 생성될 경로'
                }
             */
            console.group('filename');
            console.debug(file);
            console.groupEnd();

            //파일의 원본 이름에서 확장자만 추출->> ".확장자" 
            const extName = path.extname(file.originalname).toLocaleLowerCase();
            //파일이 저장될 이름(현재시간의 "timestamp.확장자")
            const saveName = new Date().getTime().toString()+extName;

            //업로드 정보에 백엔드에 업로드 되어 저장된 파일이름을 추가한다.
            file.saveName = saveName;
            //업로드 된 파일이 저장된 최종  경로를 추가한다.
            file.path = path.join(file.upload_dir, saveName);
            //업로드 정보에 파일에 접근할 수 있는 URL값 추가
            file.url = path.join(process.env.UPLOAD_URL, saveName).replace(/\\/gi,'/');
            //구성된 최종 업로드 정보를 클라이언트에게 응답결과로 돌려주기 위해 req객체에 추가
            req.file = file;

            //다음 단계로 백엔드상에 저장할 파일 이름을 전달
            callback(null, saveName);
        }
    }),//storage end
    limits:{
        files: parseInt(process.env.UPLOAD_MAX_COUNT),
        fileSize: parseInt(eval(process.env.UPLOAD_MAX_SIZE))
    },
    fileFilter:(req,file,callback)=>{
        console.log('~~~~~~~~~~~~~~~~~~~~~~');
        //파일의 확장자를 얻어서 .없애고 소문자로 변환 
        const extName = path.extname(file.originalname).substring(1).toLocaleLowerCase();

        //확장자 제한이 있을 경우 필터링
        if(process.env.UPLOAD_FILE_FILTER !== undefined){
            //"pgn|jpg|gif".indexOf('png')의 처리결과가 찾지 못했다면?
            if(process.env.UPLOAD_FILE_FILTER.indexOf(extName) == -1){
                const err = new Error();
                err.result_code =500;
                err.result_msg = process.env.UPLOAD_FILE_FILTER.replaceAll("|",",") + "형식만 업로드 가능합니다.";
                return callback(err);
            }
        }
        
        callback(null, true);
    }
});

//테스트URL : public/07_upload_single.html
// router.post('/upload/single', (req,res,next)=>{
router.route('/upload/single').post((req,res,next)=>{
    //name속성이 myphoto인 경우에 대한 업로드를 수행
    //-->multer객체가 생성되고 설정 내용이 실행됨
    //<input type="file" name="myphoto"/>
    const upload = multipart.single('myphoto');

    upload(req,res,(err)=>{
        console.group('request')
        console.log(req.file);
        console.groupEnd();

        let result_code = 200;
        let result_msg = 'ok';

        //에러 객체가 존재한다면? 
        if(err){
            if(err instanceof multer.MulterError){
                switch(err.code){
                    case 'LIMIT_FILE_COUNT':
                        err.result_code=500;
                        err.result_msg='업로드 가능한 파일 수를 초과했습니다.'
                        break;
                    case 'LIMIT_FILE_SIZE':
                        err.result_code=500;
                        err.result_msg='업로드 가능한 파일 용량을 초과했습니다.'
                        break;
                    default:
                        err.result_code=500;
                        err.result_msg='업로드 가능한 파일 수를 초과했습니다.'
                        break;
                }
            }
            logger.error(err);
            result_code = err.result_code;
            result_msg = err.result_msg;
        }

        //업로드된 파일의 정보와 결과 코드 및 결과 메세지를 조합하여 응답정보를 구성한다.
        const result={
            rt: result_code,
            rtmsg : result_msg,
            item : req.file,
        }

        //준비한 결과값 변수를 활용하여 클라이언트에게 응답을 보냄
        res.status(result_code).send(result);
    })//upload end
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