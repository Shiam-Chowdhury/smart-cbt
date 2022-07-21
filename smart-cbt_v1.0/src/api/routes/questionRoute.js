const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
// const checkLogin = require('../middlewares/checkLogin');
const {getQuestions, saveQuestion, getPositions,
    getTechnologies } = require('../controllers/questionController');

router.get('/', (req, res) => {
    getQuestions(req, res);
});

// router.get('/questions-with-author', (req, res) => {
//     getQuestions(req, res);
// });

router.post('/', async (req, res) => {
    try{
        saveQuestion(req, res);
    }catch(error){
        res.status(500).json({
            error: error
        })
    }
});

router.get('/positions', (req, res) => {
    getPositions(req, res);
});

router.get('/technologies', (req, res) => {
    getTechnologies(req, res);
});

module.exports = router;