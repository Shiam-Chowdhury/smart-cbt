const Question = require('../models/Question');
const {getQuestionsService, saveQuestionService, getPositionsService,
    getTechnologiesService } = require('../services/QuestionService');

const getQuestions = async (req, res) => {
    try{
        const questions = await getQuestionsService(req, res);
        res.status(200).json({
            questions
        })
    }catch(err){
        res.status(500).json({
            error: 'internal server error!',
            err
        })
    }
}

const saveQuestion = async (req, res) => {
    try {
        const question = await saveQuestionService(req, res);

        res.status(200).json({
            message: 'question created successfully',
            question
        });
        
    } catch (error) {
        res.status(500).json({
            error,
            message: 'server error!'
        });
    }
}

const getPositions = async (req, res) => {
    try{
        const positions = await getPositionsService(req, res);
        res.status(200).json({
            positions
        })
    }catch(err){
        res.status(500).json({
            error: 'internal server error!',
            err
        })
    }
}

const getTechnologies = async (req, res) => {
    try{
        const technologies = await getTechnologiesService(req, res);
        res.status(200).json({
            technologies
        })
    }catch(err){
        res.status(500).json({
            error: 'internal server error!',
            err
        })
    }
}



module.exports = {
    getQuestions,
    saveQuestion,
    getPositions,
    getTechnologies
}