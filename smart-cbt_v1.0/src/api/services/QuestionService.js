const Question = require('../models/Question');
const Position = require('../models/Position');
const Technology = require('../models/Technology');

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

const getPositionsService = async (req, res) => {
    try{
        const positions = await Position.find({});
        return positions;
    }catch (error){
        res.status(500).json({
            error,
            message: 'server error!'
        });
    }
}

const getTechnologiesService = async (req, res) => {
    try{
        const technology = await Technology.find({});
        return technology;
    }catch (error){
        res.status(500).json({
            error,
            message: 'server error!'
        });
    }
}


module.exports = {
    getQuestionsService,
    saveQuestionService,
    getPositionsService,
    getTechnologiesService
}