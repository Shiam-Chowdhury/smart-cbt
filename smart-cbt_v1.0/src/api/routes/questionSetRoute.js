const express = require('express');
const router = express.Router();
const {getQuestionSets, saveQuestionSet} = require('../controllers/questionSetController');

router.get('/', (req, res) => {
    getQuestionSets(req, res);
});

router.post('/', async (req, res) => {
    try{
        saveQuestionSet(req, res);
    }catch(error){
        res.status(500).json({
            error: error
        })
    }
});

module.exports = router;