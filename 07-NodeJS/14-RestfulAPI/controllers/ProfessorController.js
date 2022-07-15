/**
 * @FileName ProfessorController.js
 * @Author 구본아
 * @description 교수데이터 수정,삭제,추가,조회 요청 Controller
 */

import logger from '../helper/LogHelper.js';
import regexHelper from '../helper/RegexHelper.js';
import ProfessorService from '../services/ProfessorService.js';
import express from 'express';
import BadRequestException from '../exceptions/BadRequestException.js';
import { pagenation } from '../helper/UtilHelper.js';

const ProfessorController = () => {
    const url = "/professor";
    const router = express.Router();

    //교수데이터 다중행조회
    router.get(url, async(req,res,next)=>{
        const query = req.get('query');
        const page = req.get('page',1);
        const rows = req.get('rows',10);

        const params = {};
        if(query){
            params.name = query,
            params.userid = query,
            params.position = query,
            params.sal = query,
            params.hiredate = query,
            params.comm = query,
            params.deptno = query
        }

        let json = null;
        let pageInfo = null;

        try {
            const totalCount = await ProfessorService.getCount(params);
            pageInfo = pagenation(totalCount, page, rows);

            params.offset = pageInfo.offset;
            params.listCount = pageInfo.listCount;
            json = await ProfessorService.getList(params);
        } catch (error) {
            return next(error);            
        }

        res.sendResult({item:json});
    })

    //교수데이터 단일행조회
    router.get(`${url}/:profno`, async (req, res, next)=>{
        const profno = req.get('profno');

        try {
            regexHelper.value(profno,'교수번호가 없습니다.');
            regexHelper.num(profno, '교수번호가 잘못되었습니다.')
        } catch (error) {
            return next(error);
        }

        let json = null;
        try {
            json = await ProfessorService.getItem({
                profno:profno
            });
        } catch (error) {
            return next(error);            
        }

        res.sendResult({item:json});
    })//get요청 end

    router.post(url, async(req,res,next)=>{
        const name = req.post('name');
        const userid = req.post('userid');
        const position = req.post('position');
        const sal = req.post('sal');
        const hiredate = req.post('hiredate');
        const comm = req.post('comm');
        const deptno = req.post('deptno');

        try {
            regexHelper.value(name, '교수이름이 없습니다.')
            regexHelper.kor(name, '교수이름은 한글로만 입력가능합니다.');
            regexHelper.value(userid, '아이디가 없습니다.')
            regexHelper.engNum(userid, "아이디는 영문과 숫자를 혼합하여 입력가능합니다.")
            regexHelper.value(position, '직급이 없습니다.');
            if(position !== '교수'& position !== '조교수' & position !== '부교수' & position !== '전임강사'){
                throw new BadRequestException('없는 직급 입니다.');
            };
            regexHelper.value(sal, '급여가 없습니다.');
            regexHelper.num(sal,'숫자만 입력가능합니다.');
            regexHelper.value(hiredate, '입사일이 없습니다.')
            regexHelper.date(hiredate,"YYYY-MM-DD형식으로만 입력가능합니다.");
            //comm값은 null 허용
            regexHelper.num(comm,'숫자만 입력가능합니다.')
            regexHelper.value(deptno, '학과번호가 없습니다.')
            regexHelper.num(deptno,"숫자만 입력가능합니다.");
        } catch (err) {
            return next(err);
        }

        let json = null;
        try {
            json = await ProfessorService.addItem({
                name :name,
                userid : userid,
                position : position,
                sal : sal,
                hiredate : hiredate,
                comm : comm,
                deptno : deptno
            })
        } catch (err) {
            return next(err);
        }
        res.sendResult({item:json});
    })//post요청 end

    router.put(`${url}/:profno`, async(req,res,next)=>{
        const profno = req.get('profno');
        const name = req.put('name');
        const userid = req.put('userid');
        const position = req.put('position');
        const sal = req.put('sal');
        const hiredate = req.put('hiredate');
        const comm = req.put('comm');
        const deptno = req.put('deptno');

        try {
            regexHelper.value(profno, '교수번호가 없습니다.');
            regexHelper.num(profno, '교수번호가 잘못되었습니다.');
            regexHelper.value(name, '교수이름이 없습니다.');
            regexHelper.kor(name, '교수이름은 한글로만 입력가능합니다.');
            regexHelper.value(userid, '아이디가 없습니다.')
            regexHelper.engNum(userid, "아이디는 영문과 숫자를 혼합하여 입력가능합니다.")
            regexHelper.value(position, '직급이 없습니다.');
            if(position !== '교수'& position !== '조교수' & position !== '부교수' & position !== '전임강사'){
                throw new BadRequestException('없는 직급 입니다.');
            };
            regexHelper.value(sal, '급여가 없습니다.');
            regexHelper.num(sal,'급여는 입력이 잘못되었습니다.');
            regexHelper.value(hiredate, '입사일이 없습니다.');
            regexHelper.date(hiredate,"YYYY-MM-DD형식으로만 입력가능합니다.");
            //comm값은 null 허용
            regexHelper.num(comm,'숫자만 입력가능합니다.');
            regexHelper.value(deptno, '학과번호가 없습니다.');
            regexHelper.num(deptno,"숫자만 입력가능합니다.");
        } catch (err) {
            return next(err);
        }

        let json = null;
        try {
            json = await ProfessorService.editItem({
                profno: profno,
                name :name,
                userid : userid,
                position : position,
                sal : sal,
                hiredate : hiredate,
                comm : comm,
                deptno : deptno
            })
        } catch (err) {
            return next(err);
        }
        res.sendResult({item:json});
    })//put요청 end


    router.delete(`${url}/:profno`, async (req,res,next)=>{
        const profno = req.get('profno');

        try {
            regexHelper.value(profno, '교수번호가 없습니다.');
            regexHelper.num(profno,'교수번호가 잘못되었습니다.');
        } catch (error) {
            return next(error)
        }

        try {
            await ProfessorService.deleteItem({
                profno:profno
            })
        } catch (error) {
            return next(error);
        }

        res.sendResult();

    })//delete요청 end

    return router;
};//Controller 함수 end

export default ProfessorController;