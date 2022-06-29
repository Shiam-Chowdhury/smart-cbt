const Question = require('../models/Question');

const getQuestionsService = async (req, res) => {
    try{
        const questions = await Question.find({});
        return questions;
    }catch (error){
        res.status(500).json({
            error,
            message: 'server error!'
        });
    }
}

const saveQuestionService = async (req, res) => {
    try {
        console.log('ww',req.body)
        const newQuestion = new Question({
            ...req.body,
            count: 0,
        });

        const question = await newQuestion.save();

        return question;
        
    } catch (error) {
        res.status(500).json({
            error,
            message: 'server error!'
        });
    }
}

module.exports = {
    getQuestionsService,
    saveQuestionService
}