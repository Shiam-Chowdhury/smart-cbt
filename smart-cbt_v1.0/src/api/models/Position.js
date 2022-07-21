const mongoose = require('mongoose');

const positionSchema = new mongoose.Schema({
    name: String,
    ranks: Array
});

const Position = mongoose.model("Position", positionSchema);
module.exports =  Position;