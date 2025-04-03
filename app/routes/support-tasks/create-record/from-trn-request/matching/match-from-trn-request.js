const _ = require('lodash')

module.exports = (router) => {

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

router.get('/support-tasks/create-record/from-trn-request/match-create-record/merge/:recordId', (req, res) => {
  let record = req.session.data.trnreq.find(record => record.id === req.params.recordId)
  res.render('support-tasks/create-record/from-trn-request/match-create-record/merge', { record })
})




router.post('/support-tasks/create-record/from-trn-request/match-create-record/compare-request-with-existing/:recordId', (req, res) => {
  res.redirect('/support-tasks/create-record/from-trn-request/match-create-record/merge')
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

