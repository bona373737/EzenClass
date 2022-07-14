/*----------------------------------------------------------
 | 1) 모듈참조
 -----------------------------------------------------------*/
/** 직접 구현한 모듈  */
import logger from './helper/LogHelper.js';
import { myip, urlFormat } from './helper/UtilHelper.js';
import WebHelper from './helper/WebHelper.js';

/** 내장모듈 */
import url from 'url';
import path, { resolve } from 'path';

/** 설치가 필요한 모듈 */
import dotenv from "dotenv";
import express from 'express'; // Express 본체
import useragent from 'express-useragent'; // 클라이언트의 정보를 조회할 수 있는 기능
import serveStatic from 'serve-static'; // 특정 폴더의 파일을 URL로 노출시킴
import serveFavicon from 'serve-favicon'; // favicon 처리
import bodyParser from 'body-parser'; // POST 파라미터 처리
import methodOverride from 'method-override'; // PUT 파라미터 처리
import cookieParser from 'cookie-parser'; // Cookie 처리
import expressSession from 'express-session'; // Session 처리

/** 예외처리 관련 클래스 */
import PageNotFoundException from './exceptions/PageNotFoundException.js';

/** URL을 라우팅하는 모듈 참조 */
// import SetupController from './controllers/SetupController.js';
// import GetParamsController from './controllers/GetParamsController.js';
// import PostPutDeleteController from './controllers/PostPutDeleteController.js';
// import CookieController from './controllers/CookieController.js';
// import SessionController from './controllers/SessionController.js';
// import SendMailController from './controllers/SendMailController.js';
// import FileUploadController from './controllers/FileUploadController.js';
import ApiTest from './controllers/ApiTest.js';

/*---------------------------------`-------------------------
 | 2) Express 객체 생성
 -----------------------------------------------------------*/
 dotenv.config({ path: path.join(resolve(), "../config.env") });

 const app = express();

/*-----------------------------------------------------------
 3) 클라이언트의 접속시 초기화
 ------------------------------------------------------------*/
app.use(useragent.express());

app.use((req, res, next) => {
    logger.debug('클라이언트가 접속했습니다.');
    const beginTime = Date.now();
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;

    logger.debug(`[client] ${ip} / ${req.useragent.os} / ${req.useragent.browser} / ${req.useragent.version} / ${req.useragent.platform}`);

    const current_url = urlFormat({
        protocol: req.protocol, 
        host: req.get('host'), 
        port: req.port, 
        pathname: req.originalUrl
    });
    logger.debug(`[${req.method}] ${decodeURIComponent(current_url)}`);

    res.on('finish', () => {
        const endTime = Date.now();

        const time = endTime - beginTime;
        logger.debug(`클라이언트의 접속이 종료되었습니다. ::: [runtime] ${time}ms`);
        logger.debug('--------------------------------------------------');
    });

    next();
});


/*----------------------------------------------------------
 | 4) Express 객체의 추가 설정
 -----------------------------------------------------------*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text()); 
app.use(bodyParser.json()); 

app.use(methodOverride('X-HTTP-Method')); 
app.use(methodOverride('X-HTTP-Method-Override')); 
app.use(methodOverride('X-Method-Override')); 
app.use(methodOverride('_method')); 

app.use(cookieParser(process.env.COOKIE_ENCRYPT_KEY));

app.use(expressSession({
    secret: process.env.SESSION_ENCRYPT_KEY,
    resave: false,
    saveUninitialized: false
}));

app.use(serveFavicon(process.env.FAVICON_PATH));
app.use('/', serveStatic(process.env.PUBLIC_PATH));
app.use(process.env.UPLOAD_URL, serveStatic(process.env.UPLOAD_DIR));
app.use(process.env.THUMB_URL, serveStatic(process.env.THUMB_DIR));


app.use(WebHelper());

/*----------------------------------------------------------
 | 5) 각 URL별 백엔드 기능 정의
 -----------------------------------------------------------*/
// app.use(SetupController());
// app.use(GetParamsController());
// app.use(PostPutDeleteController());
// app.use(CookieController());
// app.use(SessionController());
// app.use(SendMailController());
// app.use(FileUploadController());
app.use(ApiTest());

/*----------------------------------------------------------
 | 6) 설정한 내용을 기반으로 서버 구동 시작
 -----------------------------------------------------------*/
const ip = myip();

app.listen(process.env.PORT, () => {
    logger.debug('--------------------------------------------------');
    logger.debug('|              Start Express Server              |');
    logger.debug('--------------------------------------------------');

    ip.forEach((v, i) => {
        logger.debug(`server address => http://${v}:${process.env.PORT}`);
    });

    logger.debug('--------------------------------------------------');
});