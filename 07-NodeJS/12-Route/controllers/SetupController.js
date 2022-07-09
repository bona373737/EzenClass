import logger from '../helper/LogHelper.js';
import express from 'express';

export default () => {
    const router = express.Router();

    router.get('/page1', (req, res, next) => {
        let html = '<h1>Page1</h1>';
        html += '<h2>Express로 구현한 Node.js 백엔드 페이지</h2>';
        res.status(200).send(html);
    });

    router.get('/page2', (req, res, next) => {
        let html = '<h1>Page2</h1>';
        html += '<h2>Node.js Backend Page</h2>';
        res.status(200).send(html);
    });

    router.get('/page3', (req, res, next) => {
        res.redirect('https://www.naver.com');
    });

    return router;
};