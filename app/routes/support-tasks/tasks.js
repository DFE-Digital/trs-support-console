const _ = require('lodash')

module.exports = (router) => {

  router.get('/tasks/:taskId', (req, res) => {
		let task = req.session.data.tasks.find(task => task.id === req.params.taskId)
    res.render('create-record/from-trn-request/show', { task })
	})

  router.get('/create-record/from-trn-request/reason/:taskId', (req, res) => {
		let task = req.session.data.tasks.find(task => task.id === req.params.taskId)
    res.render('create-record/from-trn-request/reason', { task })
	})

  router.post('/create-record/from-trn-request/reason/:taskId', (req, res) => {
    const tasks = req.session.data.tasks
    const taskId = req.params.taskId
    res.locals.task = tasks.find(task => task.id == taskId)
    res.render('create-record/from-trn-request/check')
	})

  ///////////// Filters   //////////
  router.get('create-record/from-trn-request/tasks', (req, res) => {
  let tasks = req.session.data.tasks
  
  let selectedTaskFilter  = _.get(req.session.data.filters, 'taskType')
    if(_.get(selectedTaskFilter, 'length')){
      tasks = tasks.filter(task => {
      let matchesTaskType = true

      matchesTaskType = selectedTaskFilter.includes(task.taskType)

      return matchesTaskType
      })
    }
    res.render('create-record/from-trn-request/tasks',{ tasks })
	})

}