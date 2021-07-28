const Task = require('../models/Task.js');
module.exports = {
  list: function (req, res) {
    Task.find({})
      .then(list => {
        res.json(list)
      })
  },
  add:  function (req, res) {
    let task = new Task(req.body)
    task.save()
      .then(item => {
        res.json(item)
      })
  }
}
