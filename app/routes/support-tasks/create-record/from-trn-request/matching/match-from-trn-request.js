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

router.post('/support-tasks/create-record/from-trn-request/match-create-record/compare-request-with-existing/:recordId', (req, res) => {
  res.redirect('/support-tasks/create-record/from-trn-request/match-create-record/merge/:recordId')
})



router.get('/support-tasks/create-record/from-trn-request/match-create-record/merge/:recordId', (req, res) => {
  let record = req.session.data.trnreq.find(record => record.id === req.params.recordId)
  res.render('support-tasks/create-record/from-trn-request/match-create-record/merge', { record })
})


//////// Post from Merge to list wit Flash msg ////////
router.post('/support-tasks/create-record/from-trn-request/match-create-record/merge/:recordId', (req, res) => {
  const recordId = req.body.recordId
  req.flash('success', 'Records merged successfully')
  res.redirect('/support-tasks/create-record/from-trn-request/match-create-record/list')
})

//////// Post from Show to list wit Flash msg ////////
router.post('/support-tasks/create-record/from-trn-request/match-create-record/show/:recordId', (req, res) => {
  const recordId = req.body.recordId
  console.log("📩 recordId from body:", req.body.recordId)
  // Fix POST route flash message (use singular)
  req.flash('success', 'Record created successfully')
  res.redirect('/support-tasks/create-record/from-trn-request/match-create-record/list')
})

router.get('/support-tasks/create-record/from-trn-request/match-create-record/list', (req, res) => {
  const flashRaw = req.flash('success')[0] || ''
  const [flashMessage, recordId] = flashRaw.split('|||')

  res.render('support-tasks/create-record/from-trn-request/match-create-record/list', {
    flashMessage,
    recordId
  })
})



router.get('/support-tasks/create-record/from-trn-request/match-create-record/updated/:recordId', (req, res) => {
  const recordId = req.params.recordId
  const record = req.session.data.trnreq.find(r => r.id === recordId)

  res.render('support-tasks/create-record/from-trn-request/match-create-record/updated', {
  ///back up for testing data below
  record: {
    id: 'abc-123',
    fullName: 'Jane Test',
    dateOfBirth: '1 Jan 1990',
    gender: 'Female',
    trn: '1234567',
    nationalInsuranceNumber: 'QQ123456C',
    email: 'jane@example.com',
    mobile: '07700 900123'
  }
})
})

}

