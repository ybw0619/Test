var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var boardSchema = new Schema({
    title: {type: String, required: true, index: true, trim: true},
    writer: {type: String, required: true, trim: true},
    date: { type: Date, default: Date.now  },
    content: {type: String, required: true, trim: true},
});

module.exports = mongoose.model('board', boardSchema);
