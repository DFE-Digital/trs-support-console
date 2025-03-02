const _ = require('lodash')

module.exports = (router) => {


  ////////// SHOW a single task //////////
  router.get('/support-tasks/:taskId', (req, res) => {
		let task = req.session.data.tasks.find(task => task.id === req.params.taskId)
    res.render('/support-tasks/show', { task })
	})


  //// This route is triggered from the button on SHOW page
  router.get('/support-tasks/create-record/deactivate/:taskId/duplicates', (req, res) => {
    let task = req.session.data.tasks.find(task => task.id === req.params.taskId)
    res.render('support-tasks/create-record/deactivate/duplicates', { task })
  })



  //// This route is triggered from the button on DUPLICATE page
  router.post('/support-tasks/create-record/deactivate/:taskId/choose-primary', (req, res) => {
    let task = req.session.data.tasks.find(task => task.id === req.params.taskId)
    res.render('support-tasks/create-record/deactivate/choose-primary', { task }) 
  })

  //// This route is triggered from the button on DUPLICATE page
  router.post('/support-tasks/create-record/deactivate/:taskId/merge', (req, res) => {
    let task = req.session.data.tasks.find(task => task.id === req.params.taskId)
    res.render('support-tasks/create-record/deactivate/merge', { task }) 
  })

  //// THis route posts from the MERGE page
  router.post('/support-tasks/create-record/deactivate/:taskId/reason', (req, res) => {
    let task = req.session.data.tasks.find(task => task.id === req.params.taskId)
    res.render('support-tasks/create-record/deactivate/reason', { task }) 
  })

   //// THis route posts from the REASON page
   router.post('/support-tasks/create-record/deactivate/:taskId/check', (req, res) => {
    let task = req.session.data.tasks.find(task => task.id === req.params.taskId)
    res.render('support-tasks/create-record/deactivate/check', { task }) 
  })


  /////////////  FLASH //////////////
  router.post('/create-record/from-trn-request/match/check-handler', (req, res) => {
    req.flash('success', 'Merged with primary record TRN: ')
    
    let data = req.session.data || {}



    // Redirect to the next page
    res.redirect('/support-tasks')
  })   

}