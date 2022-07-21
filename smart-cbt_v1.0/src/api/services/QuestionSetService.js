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
            // name: req.body.name,
            // questions: req.body.questions,
            isUsed: false
        });

        const questionSet = await newQuestionSet.save();

        return questionSet;
        
    } catch (error) {
        // res.status(500).json({
        //     error,
        //     message: 'server error!'
        // });
        console.log(error);
    }
}

module.exports = {
    getQuestionSetsService,
    saveQuestionSetService
}