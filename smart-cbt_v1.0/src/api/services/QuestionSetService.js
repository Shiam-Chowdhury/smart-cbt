const QuestionSet = require('../models/QuestionSet');

const getQuestionSetsService = async (req, res) => {
    try{
        const questionSets = await QuestionSet.find({});
        return questionSets;
    }catch (error){
        res.status(500).json({
            error,
            message: 'server error!'
        });
    }
}

const saveQuestionSetService = async (req, res) => {
    try {
        const newQuestionSet = new QuestionSet({
            ...req.body,
            count: 0,
        });

        const questionSet = await newQuestionSet.save();

        return questionSet;
        
    } catch (error) {
        res.status(500).json({
            error,
            message: 'server error!'
        });
    }
}

module.exports = {
    getQuestionSetsService,
    saveQuestionSetService
}