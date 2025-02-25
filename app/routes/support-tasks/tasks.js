module.exports = (router) => {

  router.get('/create-record/from-trn-request/tasks:taskId', (req, res) => {
		let task = req.session.data.tasks.find(task => task.id === req.params.taskId)
    res.render('create-record/tasks/show', { task })
	})

}