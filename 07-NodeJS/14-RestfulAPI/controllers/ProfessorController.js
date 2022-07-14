import logger from '../helper/LogHelper.js';
import regexHelper from '../helper/RegexHelper.js';
import ProfessorService from '../services/ProfessorService.js';
import express from 'express';
import BadRequestException from '../exceptions/BadRequestException.js';

const ProfessorController = () => {
    const url = "/professor";
    const router = express.Router();

    //교수데이터 다중행조회
    router.get(url, async(req,res,next)=>{
        let json = null;
        try {
            json = await ProfessorService.getList();
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
            regexHelper.kor(name, '교수이름은 한글로만 입력가능합니다.');
            regexHelper.engNum(userid, "아이디는 영문과 숫자를 혼합하여 입력가능합니다.")
            if(position !== '교수'& position !== '조교수' & position !== '부교수' & position !== '전임강사'){
                throw new BadRequestException('없는 직급 입니다.');
            };
            regexHelper.num(sal,'숫자만 입력가능합니다.');
            regexHelper.date(hiredate,"YYYY-MM-DD형식으로만 입력가능합니다.");
            regexHelper.num(comm,'숫자만 입력가능합니다.')
            regexHelper.num(deptno,"숫자만 입력가능합니다.");
        } catch (error) {
            throw next(error);
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
        } catch (error) {
            return next(error);
        }
        res.sendResult({item:json});
    })//post요청 end

    router.put(`${url}/:profno`, async(req,res,next)=>{
        const name = req.post('name');
        const userid = req.post('userid');
        const position = req.post('position');
        const sal = req.post('sal');
        const hiredate = req.post('hiredate');
        const comm = req.post('comm');
        const deptno = req.post('deptno');

        try {
            regexHelper.kor(name, '교수이름은 한글로만 입력가능합니다.');
            regexHelper.engNum(userid, "아이디는 영문과 숫자를 혼합하여 입력가능합니다.")
            if(position !== '교수'& position !== '조교수' & position !== '부교수' & position !== '전임강사'){
                throw new BadRequestException('없는 직급 입니다.');
            };
            regexHelper.num(sal,'숫자만 입력가능합니다.');
            regexHelper.date(hiredate,"YYYY-MM-DD형식으로만 입력가능합니다.");
            regexHelper.num(comm,'숫자만 입력가능합니다.')
            regexHelper.num(deptno,"숫자만 입력가능합니다.");
        } catch (error) {
            throw next(error);
        }

        let json = null;
        try {
            json = await ProfessorService.editItem({
                name :name,
                userid : userid,
                position : position,
                sal : sal,
                hiredate : hiredate,
                comm : comm,
                deptno : deptno
            })
        } catch (error) {
            return next(error);
        }
        res.sendResult({item:json});
    })//put요청 end



    return router;
};//Controller 함수 end

export default ProfessorController;