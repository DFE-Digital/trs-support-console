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


//////// Post from MERGE to list wit Flash msg ////////
router.post('/support-tasks/create-record/from-trn-request/match-create-record/merge/:recordId', (req, res) => {
  const recordId = req.body.recordId
  res.redirect(`/support-tasks/create-record/from-trn-request/match-create-record/list?message=Records+merged+successfully&recordId=${recordId}`)
})


//////// Post from SHOW to list wit Flash msg ////////
router.post('/support-tasks/create-record/from-trn-request/match-create-record/show/:recordId', (req, res) => {
  const recordId = req.body.recordId
  res.redirect(`/support-tasks/create-record/from-trn-request/match-create-record/list?message=Record+created+successfully&recordId=${recordId}`)
})


router.get('/support-tasks/create-record/from-trn-request/match-create-record/list', (req, res) => {
  const flashMessage = req.query.message || ''
  const recordId = req.query.recordId || ''

  const record = req.session.data.trnreq?.find(r => r.id === recordId)

  res.render('support-tasks/create-record/from-trn-request/match-create-record/list', {
    flashMessage,
    recordId,
    fullName: record?.fullName || '' // fallback just in case
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

