const _ = require('lodash')

module.exports = (router) => {

  ////////// get a single task //////////
  router.get('/support-tasks/:taskId', (req, res) => {
		let task = req.session.data.tasks.find(task => task.id === req.params.taskId)
    res.render('/support-tasks/show', { task })
	})

    //// This route is triggered from the button on 'show' page
    // router.get('/support-tasks/create-record/from-trn-request/no-match/:taskId/new', (req, res) => {
    //   let task = req.session.data.tasks.find(task => task.id === req.params.taskId)
    //   res.render('support-tasks/create-record/from-trn-request/no-match/new', { task })
    // }) 

  //// This route is triggered from the button on 'show' page
  // router.get('/support-tasks/create-record/from-trn-request/no-match/:taskId/reason', (req, res) => {
  //   let task = req.session.data.tasks.find(task => task.id === req.params.taskId)
  //   res.render('support-tasks/create-record/from-trn-request/no-match/reason', { task })
  // })  

  //// THis route posts from the reason page
  // router.get('/support-tasks/create-record/from-trn-request/no-match/:taskId/check', (req, res) => {
  //   let task = req.session.data.tasks.find(task => task.id === req.params.taskId)
  //   res.render('support-tasks/create-record/from-trn-request/no-match/check', {task})
  // })


  /////////////  FLASH //////////////
  router.get('/support-tasks/create-record/from-trn-request/no-match/:taskId/new', (req, res) => {
    
   
    
    let data = req.session.data || {}

    // Generate TRN
    const generateTRN = () => Math.floor(100000 + Math.random() * 900000).toString()

    // Store the generated TRN in session data
    data.trn = generateTRN()
    req.session.data = data

    // Pass new record details
    let task = req.session.data.tasks.find(task => task.id === req.params.taskId)

    // Redirect to the next page
    res.render('support-tasks/create-record/from-trn-request/no-match/new', {task})
    
  })   

}