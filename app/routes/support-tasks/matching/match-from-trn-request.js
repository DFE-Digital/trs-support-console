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
    firstName: "Olivia",
    middleName: "Not given",
    lastName: "Johnson",
    dateOfBirth: "8 August 1988",
    nationalInsuranceNumber: "TR 78 56 12 C",
    dateOfTrnRequest: "25 January 2024",
    supportTaskType: "Get a TRN",
    reference: "TRN-QW45HGY6",
    potentialRecordMatch: "No",
    sourceOfMatch: "Get a TRN",
    id: "6474500c-9604-476a-b4d8-a4cd2d915b80",
    email: "Olivia.Johnson@gmail.com",
    gender: "Female",
    hasAlerts: "None",
    trn: "None",
    completed: "no",
    providedEvidence: "passport.jpg",
    caseStatus: "Open",
    fullName: "Olivia Johnson",
    trainingProviderAddress: "20 High Street",
    town: "Southampton",
    postcode: "LS1 1UR",
    country: "United Kingdom",
    workingAlready: "No",
    workEmail: "olivia.johnson@oakgrove.sch.uk",
    npqApplicationId: "27431268",
    npqName: "Leading teacher development",
    trainingProvider: "Teach First"
  }
})
})

}

