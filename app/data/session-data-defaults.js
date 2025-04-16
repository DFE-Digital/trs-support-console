const teachers = require('./teachers.json')
const person = require('./person.json')
const duplicates = require('./duplicates.json')
const trnreq = require('./trnreq.json')
const deactivate = require('./deactivate.json')

module.exports = {
  // Insert values here
  teachers,
  person,
  duplicates,
  trnreq,
  deactivate
}

// In JS use - req.session.data.tasks
// In template / Nunjucks use {{ data.tasks }}