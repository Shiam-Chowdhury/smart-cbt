const mongoose = require('mongoose');

const technologySchema = new mongoose.Schema({
    name: String,
    tags: Array
});

const Technology = mongoose.model("Technology", technologySchema);
module.exports =  Technology;