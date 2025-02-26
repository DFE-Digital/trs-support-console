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
    res.render('create-record/from-trn-request/check')
	})

  
}