const _ = require('lodash')

module.exports = (router) => {



//// Route passes {record} so must call that in the template
router.get('/support-tasks/create-record/from-trn-request/get-a-trn/show/:recordId', (req, res) => {
  let record = req.session.data.trnreq.find(record => record.id === req.params.recordId)
  
  res.render('support-tasks/create-record/from-trn-request/get-a-trn/show', { record })
})

///Interrogate the record to see if it is a duplicate in trnreq.json & duplivcates.json
router.get('/support-tasks/create-record/from-trn-request/get-a-trn/compare-request-with-existing/:recordId', (req, res) => {
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

  res.render('support-tasks/create-record/from-trn-request/get-a-trn/compare-request-with-existing', {
    record,         // from trnreq
    match,          // from duplicates (may be undefined)
    data: req.session.data
  })
})


/// GET data from compare-request-with-existing to select-data
router.get('/support-tasks/create-record/from-trn-request/get-a-trn/select-data/:recordId', (req, res) => {
  const recordId = req.params.recordId
  const trnRequests = req.session.data.trnreq || []
  const duplicates = req.session.data.duplicates || []

  const record = trnRequests.find(r => r.id === recordId)
  const match = duplicates.find(d =>
    d.id === recordId &&
    d.firstName?.toLowerCase() === record.firstName?.toLowerCase() &&
    d.lastName?.toLowerCase() === record.lastName?.toLowerCase()
  )

  res.render('support-tasks/create-record/from-trn-request/get-a-trn/select-data', {
    record,
    match,
    data: req.session.data
  })
})


// POST data from select-data to merge
router.post('/support-tasks/create-record/from-trn-request/get-a-trn/compare-request-with-existing/:recordId', (req, res) => {
  const recordId = req.params.recordId
  const body = req.body
  const data = req.session.data

  const trnRequests = data.trnreq || []
  const record = trnRequests.find(r => r.id === recordId)

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

  res.redirect(`/support-tasks/create-record/from-trn-request/get-a-trn/merge/${recordId}`)
})








//////// Post from MERGE to list wit Flash msg ////////
router.post('/support-tasks/create-record/from-trn-request/get-a-trn/merge/:recordId', (req, res) => {
  const recordId = req.body.recordId
  res.redirect(`/support-tasks/create-record/from-trn-request/get-a-trn/list?message=Records+merged+successfully&recordId=${recordId}`)
})

router.get('/support-tasks/create-record/from-trn-request/get-a-trn/merge/:recordId', (req, res) => {
  const mergedRecord = req.session.data.mergedRecord || {}

  res.render('support-tasks/create-record/from-trn-request/get-a-trn/merge', {
    record: mergedRecord,
    data: req.session.data
  })
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

}

