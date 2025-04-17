const _ = require('lodash')

module.exports = (router) => {


//// Route passes {record} so must call that in the template
router.get('/support-tasks/create-record/from-trn-request/match-create-record/show/:recordId', (req, res) => {
  let record = req.session.data.trnreq.find(record => record.id === req.params.recordId)
  
  res.render('support-tasks/create-record/from-trn-request/match-create-record/show', { record })
})


// POST data from select-data to merge
router.post('/support-tasks/create-record/from-trn-request/match-create-record/compare-request-with-existing/:recordId', (req, res) => {
  const recordId = req.params.recordId
  const body = req.body
  const data = req.session.data

  const trnRequests = req.session.data.trnreq || []
  const record = trnRequests.find(r => r.id === req.params.recordId)

  // Store selected values from the form, including sourceOfMatch from original record
  data.mergedRecord = {
    id: recordId,
    firstName: body.retainFirstName,
    middleName: body.retainMiddleName,
    lastName: body.retainLastName,
    dateOfBirth: body.retainDateOfBirth,
    email: body.retainEmail,
    nationalInsuranceNumber: body.retainNationalInsuranceNumber,
    trn: body.retainTrn,
    comment: body.makeMergeComment,
    sourceOfMatch: record?.sourceOfMatch || "Get a TRN" // fallback just in case
  }

  res.redirect(`/support-tasks/create-record/from-trn-request/match-create-record/merge/${recordId}`)
})

///Interrogate the record to see if it is a duplicate in trnreq.json & duplivcates.json
router.get('/support-tasks/create-record/from-trn-request/match-create-record/compare-request-with-existing/:recordId', (req, res) => {
  const trnRequests = req.session.data.trnreq || []
  const duplicates = req.session.data.duplicates || []

  const record = trnRequests.find(r => r.id === req.params.recordId)

  if (!record) {
    return res.status(404).send('Record not found in trnreq.json')
  }

  // Try to find a match in duplicates.json
  const match = duplicates.find(d =>
    d.id === record.id &&
    d.firstName?.toLowerCase() === record.firstName?.toLowerCase() &&
    d.lastName?.toLowerCase() === record.lastName?.toLowerCase()
  )

  res.render('support-tasks/create-record/from-trn-request//match-create-record/compare-request-with-existing', {
    record,         // from trnreq
    match,          // from duplicates (may be undefined)
    data: req.session.data
  })
})



/// GET data from compare-request-with-existing to select-data
router.get('/support-tasks/create-record/from-trn-request/match-create-record/select-data/:recordId', (req, res) => {
  const recordId = req.params.recordId
  const trnRequests = req.session.data.trnreq || []
  const duplicates = req.session.data.duplicates || []

  const record = trnRequests.find(r => r.id === recordId)
  const match = duplicates.find(d =>
    d.id === recordId &&
    d.firstName?.toLowerCase() === record.firstName?.toLowerCase() &&
    d.lastName?.toLowerCase() === record.lastName?.toLowerCase()
  )

  res.render('support-tasks/create-record/from-trn-request/match-create-record/select-data', {
    record,
    match,
    data: req.session.data
  })
})






//////// Post from SHOW to list wit Flash msg ////////
router.post('/support-tasks/create-record/from-trn-request/match-create-record/show/:recordId', (req, res) => {
  const recordId = req.body.recordId
  res.redirect(`/support-tasks/create-record/from-trn-request/match-create-record/list?message=Record+created+successfully&recordId=${recordId}`)
})


//////// Post from MERGE to list with Flash msg ////////
router.post('/support-tasks/create-record/from-trn-request/match-create-record/merge/:recordId', (req, res) => {
  const recordId = req.body.recordId
  res.redirect(`/support-tasks/create-record/from-trn-request/match-create-record/list?message=Records+merged+successfully&recordId=${recordId}`)
})
//// Get data from MERGE to list 
router.get('/support-tasks/create-record/from-trn-request/match-create-record/merge/:recordId', (req, res) => {
  const mergedRecord = req.session.data.mergedRecord || {}

  res.render('support-tasks/create-record/from-trn-request/match-create-record/merge', {
    record: mergedRecord,
    data: req.session.data
  })
})





router.post('/support-tasks/create-record/from-trn-request/match-create-record/list', (req, res) => {
  const recordId = req.body.recordId
  res.redirect(`/support-tasks/create-record/from-trn-request/match-create-record/list?recordId=${recordId}`)
})


//// Render list and remove merged item from array
router.get('/support-tasks/create-record/from-trn-request/match-create-record/list', (req, res) => {
  const { message, recordId } = req.query
  const trnRequests = req.session.data.trnreq || []

  // Find and remove the merged record from the list
  const recordIndex = trnRequests.findIndex(r => r.id === recordId)
  const record = trnRequests[recordIndex]

  if (recordIndex !== -1) {
    trnRequests.splice(recordIndex, 1)
    console.log(`✅ Removed record with ID ${recordId} from trnreq`)
  } else {
    console.warn(`⚠️ Could not find record with ID ${recordId} in trnreq`)
  }

  res.render('support-tasks/create-record/from-trn-request/match-create-record/list', {
    flashMessage: message,
    recordId,
    fullName: record ? record.fullName : "Unknown",
    record,
    data: req.session.data
  })
})







}

