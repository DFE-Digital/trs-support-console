module.exports = (router) => {

  router.get('/tasks/:taskId', (req, res) => {
		let task = req.session.data.tasks.find(task => task.id === req.params.taskId)
    res.render('create-record/from-trn-request/show', { task })
	})

  router.post('/create-record/from-trn-request/show', (req, res) => {
		let fullName = req.session.data.task.firstName + ' ' + req.session.data.task.lastName
    res.render('create-record/from-trn-request/reason', { fullName })
	})

}