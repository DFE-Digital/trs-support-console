const _ = require('lodash')

module.exports = (router) => {

  ////////// SHOW a single task //////////
  router.get('/support-tasks/:taskId', (req, res) => {
		let task = req.session.data.tasks.find(task => task.id === req.params.taskId)
    res.render('/support-tasks/show', { task })
	})


  //// This route is triggered from the button on SHOW page
  router.get('/support-tasks/create-record/from-trn-request/match/:taskId/duplicates', (req, res) => {
    let task = req.session.data.tasks.find(task => task.id === req.params.taskId)
    res.render('support-tasks/create-record/from-trn-request/match/duplicates', { task })
  })

  //// This route is triggered from the button on DUPLICATE page
  router.post('/support-tasks/create-record/from-trn-request/match/:taskId/merge', (req, res) => {
    let task = req.session.data.tasks.find(task => task.id === req.params.taskId)
    res.render('support-tasks/create-record/from-trn-request/match/merge', { task }) 
  })

  //// THis route posts from the MERGE page
  // router.post('/support-tasks/create-record/from-trn-request/match/:taskId/reason', (req, res) => {
  //   let task = req.session.data.tasks.find(task => task.id === req.params.taskId)
  //   res.render('support-tasks/create-record/from-trn-request/match/reason', { task }) 
  // })

   //// THis route posts from the REASON page
  //  router.post('/support-tasks/create-record/from-trn-request/match/:taskId/check', (req, res) => {
  //   let task = req.session.data.tasks.find(task => task.id === req.params.taskId)
  //   res.render('support-tasks/create-record/from-trn-request/match/check', { task }) 
  // })


////////// Show a single teacher (John Doe) on deactivate journey //////////
//// Route passes {record} so must call that in the template
router.get('/support-tasks/create-record/from-trn-request/match-create-record/show/:recordId', (req, res) => {
  let record = req.session.data.trnreq.find(record => record.id === req.params.recordId)
  res.render('support-tasks/create-record/from-trn-request/match-create-record/show', { record })
})


router.get('/support-tasks/create-record/from-trn-request/match-create-record/compare-request-with-existing/:recordId', (req, res) => {
  let record = req.session.data.trnreq.find(record => record.id === req.params.recordId)
  res.render('support-tasks/create-record/from-trn-request/match-create-record/compare-request-with-existing', { record })
})


  /////////////  FLASH //////////////
  //router.get('/support-tasks/create-record/from-trn-request/match/:taskId/new', (req, res) => {
    
    
    //let data = req.session.data || {}

    // Generate TRN
    //const generateTRN = () => Math.floor(100000 + Math.random() * 900000).toString()

    // Store the generated TRN in session data
    //data.trn = generateTRN()
    //req.session.data = data

    // Pass new record details
    //let task = req.session.data.tasks.find(task => task.id === req.params.taskId)

    // Redirect to the next page
    //res.render('support-tasks/create-record/from-trn-request/match/new', {task})
    
  //})   

}

