const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
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
        // matching_options: Array,
        // is_multiple_answer: Boolean,
        correct_answer: String,
        correct_option: String,
    },
    count: Number,
    comments: String,
    // related_files: String,
});

const Question = mongoose.model("Question", questionSchema);
module.exports =  Question;