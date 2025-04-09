const _ = require('lodash')

module.exports = (router) => {

////////// Show a single teacher (John Doe) on deactivate journey //////////
//// Route passes {record} so must call that in the template
router.get('/support-tasks/create-record/from-trn-request/get-a-trn/show/:recordId', (req, res) => {
  let record = req.session.data.trnreq.find(record => record.id === req.params.recordId)
  
  res.render('support-tasks/create-record/from-trn-request/get-a-trn/show', { record })
})


router.get('/support-tasks/create-record/from-trn-request/get-a-trn/compare-request-with-existing/:recordId', (req, res) => {
  let record = req.session.data.trnreq.find(record => record.id === req.params.recordId)
  res.render('support-tasks/create-record/from-trn-request/get-a-trn/compare-request-with-existing', { record })
})

router.post('/support-tasks/create-record/from-trn-request/get-a-trn/compare-request-with-existing/:recordId', (req, res) => {
  res.redirect('/support-tasks/create-record/from-trn-request/get-a-trn/merge/:recordId')
})






//////// Post from MERGE to list wit Flash msg ////////
router.post('/support-tasks/create-record/from-trn-request/get-a-trn/merge/:recordId', (req, res) => {
  const recordId = req.body.recordId
  res.redirect(`/support-tasks/create-record/from-trn-request/get-a-trn/list?message=Records+merged+successfully&recordId=${recordId}`)
})

router.get('/support-tasks/create-record/from-trn-request/get-a-trn/merge/:recordId', (req, res) => {
  let record = req.session.data.trnreq.find(record => record.id === req.params.recordId)
  res.render('support-tasks/create-record/from-trn-request/get-a-trn/merge', { record })
})


//////// Post from SHOW to list wit Flash msg ////////
router.post('/support-tasks/create-record/from-trn-request/get-a-trn/show/:recordId', (req, res) => {
  const recordId = req.body.recordId
  res.redirect(`/support-tasks/create-record/from-trn-request/get-a-trn/list?message=Record+created+successfully&recordId=${recordId}`)
})


router.get('/support-tasks/create-record/from-trn-request/get-a-trn/list', (req, res) => {
  const { message, recordId } = req.query
  const trnRequests = req.session.data.trnreq || []

  // Find the record to be removed
  const recordIndex = trnRequests.findIndex(r => r.id === recordId)
  const record = trnRequests[recordIndex]

  // If found, remove it from the list
  if (recordIndex !== -1) {
    trnRequests.splice(recordIndex, 1)
    console.log(`✅ Removed record with ID ${recordId} from trnreq`)
  } else {
    console.warn(`⚠️ Could not find record with ID ${recordId} in trnreq`)
  }

  res.render('support-tasks/create-record/from-trn-request/get-a-trn/list', {
    flashMessage: message,
    recordId,
    fullName: record ? record.fullName : "Unknown",
    record,
    data: req.session.data
  })
})



router.get('/support-tasks/create-record/from-trn-request/get-a-trn/updated/:recordId', (req, res) => {
  const recordId = req.params.recordId
  const record = req.session.data.trnreq.find(r => r.id === recordId)

  res.render('support-tasks/create-record/from-trn-request/get-a-trn/updated', {
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

