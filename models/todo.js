var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    description: String,
    createdDate: { type: Date, default: Date.now },
    completedDate: { type: Date }
})

var Todo = mongoose.model('Todo', todoSchema);
module.exports = { Todo: Todo }