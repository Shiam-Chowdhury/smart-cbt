const mongoose = require('mongoose');

const Question = new Schema(
    {
        details: {
            type: String,
            required: true
        },
        tag: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        rank: {
            type: String,
            required: true
        },
        difficulty: {
            type: String,
            required: true
        },
        remarks: String,
        answer: {
            options: Array,
            matching_options: Array,
            is_multiple_answer: Boolean,
            correct_answer: String,
        },
        count: Number,
        comments: String,
        related_files: String,
    }
);

const questionSetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    questions: {
        is_from_question_bank: Boolean,
        question: [Question],
        mark: String
    },
    is_used: Boolean,
    partial_question_sets: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'PartialQuestionSet'
        }
    ],
    created_by: {},
    question_set_requisition: {}
});

const QuestionSet = mongoose.model("QuestionSet", questionSetSchema);
module.exports =  QuestionSet;