var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    title: {type: String, required: true, index: true, trim: true},
    author: {type: String, required: true, trim: true},
    published_date: { type: Date, default: Date.now  }
});

module.exports = mongoose.model('book', bookSchema);
