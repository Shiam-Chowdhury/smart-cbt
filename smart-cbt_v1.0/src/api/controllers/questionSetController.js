const {getQuestionSetsService, saveQuestionSetService} = require('../services/QuestionService');

const getQuestionSets = async (req, res) => {
    try{
        const questionSets = await getQuestionSetsService(req, res);
        res.status(200).json({
            questionSets
        })
    }catch(err){
        res.status(500).json({
            error: 'internal server error!',
            err
        })
    }
}

const saveQuestionSet = async (req, res) => {
    try {
        const questionSet = await saveQuestionSetService(req, res);

        res.status(200).json({
            message: 'question set created successfully',
            questionSet
        });
        
    } catch (error) {
        res.status(500).json({
            error,
            message: 'server error!'
        });
    }
}

module.exports = {
    getQuestionSets,
    saveQuestionSet
}