const mongoose = require('mongoose');

const Question = new Schema(
    {
        details: {
            type: String,
            // required: true
        },
        tag: {
            type: String,
            // required: true
        },
        type: {
            type: String,
            // required: true
        },
        rank: {
            type: String,
            // required: true
        },
        difficulty: {
            type: String,
            // required: true
        },
        remarks: String,
        answer: {
            options: Array,
            // matching_options: Array,
            // is_multiple_answer: Boolean,
            correct_answer: String,
            correct_option: String,
        },
        count: Number,
        comments: String,
        // related_files: String,
    }
);

const questionSetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    questions: [{
        is_from_bank: Boolean,
        is_from_partial: Boolean,
        mark: String,
        question: Question
    }],
    // questions: {
    //     is_from_question_bank: Boolean,
    //     is_from_partial: Boolean,
    //     // question: [Question],
    //     question: {},
    //     mark: String
    // },
    isUsed: Boolean,
    // partial_question_sets: [
    //     {
    //         type: mongoose.Types.ObjectId,
    //         ref: 'PartialQuestionSet'
    //     }
    // ],
    // created_by: {},
    // question_set_requisition: {},
    // count: Number,
});

const QuestionSet = mongoose.model("QuestionSet", questionSetSchema);
module.exports =  QuestionSet;