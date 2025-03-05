const _ = require('lodash')

module.exports = (router) => {
  ////////// get a single task //////////
  router.get('/create-record/from-trn-request/:taskId', (req, res) => {
		let task = req.session.data.tasks.find(task => task.id === req.params.taskId)
    res.render('/create-record/from-trn-request/show', { task })
	})

  
  //// THis route is from the button on 'show' page
  router.get('/create-record/from-trn-request/:taskId/reason', (req, res) => {
    let task = req.session.data.tasks.find(task => task.id === req.params.taskId)
    res.render('create-record/from-trn-request/reason', { task })
  })

  router.post('/create-record/from-trn-request/:taskId/reason', (req, res) => {
    const tasks = req.session.data.tasks
    const taskId = req.params.taskId
    res.locals.task = tasks.find(task => task.id == taskId)
    res.render('create-record/from-trn-request/check', { task: res.locals.task })
  })

  router.post('/create-record/from-trn-request/:taskId/success', (req, res) => {
    const tasks = req.session.data.tasks
    const taskId = req.params.taskId
    res.locals.task = tasks.find(task => task.id == taskId)
    res.redirect('create-record/from-trn-request/success')
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