const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  name: 'string',
  isDone: 'boolean'
});
const Task = mongoose.model('Task', schema);

module.exports = Task
