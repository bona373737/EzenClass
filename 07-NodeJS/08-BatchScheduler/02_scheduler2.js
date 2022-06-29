/**
 * @description 스케쥴에 따른 자동실행
 */

/**1)필요한 패키기 참조하기 */
import logger from './helper/LogHelper.js';
import schedule from 'node-schedule';

/**2)매분의 초마다 수행 -> 1분 30초, 2분 30초, 3분 30초...*/
const rule1 = new schedule.RecurrenceRule();
rule1.second=10;
schedule.scheduleJob(rule1, ()=>{logger.debug(`[rule1] 매분 ${rule1.second}초 마다 수행!!`)});

/**3)매시간의 분,초마다 수행--> 1시 30분 30초, 2시 30분 30초, 3시 30분 30초..... */
const rule2 = new schedule.RecurrenceRule();
rule2.minute=2;
rule2.second=30;
schedule.scheduleJob(rule2, ()=>{logger.debug(`[rule2] 매시간 ${rule2.minute}분 ${rule2.second}초 마다 수행!!`)});

/**4)매일 특정 시,분,초마다 수행--> 1일 14시 55분 30초, 2일 14시 55분 30초....... */
const rule3 = new schedule.RecurrenceRule();
rule3.hour = 15;
rule3.minute = 2;
rule3.second =50;
schedule.scheduleJob(rule3, ()=>logger.debug(`[rule3] 매일 ${rule3.hour}시 ${rule3.minute}분 ${rule3.second}초 마다 수행!!`));

/**5)일주일중 0요일을 기준으로 1번째~6번째 요일까지 수행(0:sun, 6=sat) */
const rule4 = new schedule.RecurrenceRule();
rule4.dayOfWeek = [0, new schedule.Range(1)];
rule4.second = 40;
schedule.scheduleJob(rule4, ()=>{logger.debug(`[rule4] 매주 월~토 매분 ${rule4.second}초마다 수행!!`)})

logger.info("예약작업이 설정되었습니다.");