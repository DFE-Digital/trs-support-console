const teachers = require('./teachers.json')
const person = require('./person.json')
const duplicates = require('./duplicates.json')
const tasks = require('./tasks.json')
const deactivate = require('./deactivate.json')

module.exports = {
  // Insert values here
  teachers,
  person,
  duplicates,
  tasks,
  deactivate
}

// In JS use - req.session.data.tasks
// In template / Nunjucks use {{ data.tasks }}