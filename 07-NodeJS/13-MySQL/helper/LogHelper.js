import dotenv from 'dotenv';
import winston  from 'winston';
import winstonDaily from 'winston-daily-rotate-file';
import {join, resolve} from 'path';
import {mkdirs} from './FileHelper.js';

/**1)설정파일 내용 가져오기 */
//설정파일은 현재작업파일 위치를 의미하는 resolve의 바깥쪽에 위치시켜야 한다. 
//소소코드가 노출되어도 설정내용이 노출되지 않도록!
dotenv.config({path: join(resolve(), "../config.env")})
// console.log(process.env.LOG_LEVEL);
// console.log(process.env.LOG_PATH);

/**2)로그가 저장될 폴더 생성 */
mkdirs(process.env.LOG_PATH);

/**3)로그가 출력될 형식 지정하기 위한 함수 추출 */
const {combine, timestamp, printf, splat, simple} = winston.format;

/**4)winston 객체만들기 */
const logger = winston.createLogger({
    //로그의 전반적인 형식
    format:combine(
        timestamp({
            //날짜 출력형식은 https://day.js.org/docs/en/display/format 참고
            format: 'YY/MM/DD HH:mm:ss SSS'
        }),
        printf((info)=>{
            return `${info.timestamp} [${info.level}]: ${info.message}`;
        }),
        splat()
    ),
    //일반 로그 규칙 정의
    transports:[
        //하루에 하나씩 파일 형태로 기록하기 위한 설정
        new winstonDaily({
            name: 'log',
            level: process.env.LOG_LEVEL, //출력할 로그의 수준
            datePattern: 'YYMMDD',
            dirname: process.env.LOG_PATH,
            filename: 'log_%DATE%.log',  //파일이름형식_%DATE%는 datePattern의 값
            maxsize: 50000000,
            maxFiles: 50,
            zippedArchive: true
        })
    ]
});

/**5)콘솔 설정 */
//프로덕션버전(상용화버전)이 아니라면?
if(process.env.NODE_ENV !== 'production'){
    logger.add(
        new winston.transports.Console({
            prettyPrint: true,
            showLevel: true,
            level: process.env.LOG_LEVEL,
            format: combine(
                winston.format.colorize(),
                printf((info)=>{
                    return `${info.timestamp} [${info.level}]: ${info.message}`;
                })
            )
        })
    )
}

/**6)생성한 로그 객체 내보내기 */
export default logger;