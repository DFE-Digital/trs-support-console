const _ = require('lodash')

module.exports = (router) => {

  router.post('/support-tasks/deactivate/index', (req, res) => {
    res.redirect('/support-tasks/deactivate/choose-primary-record')
  })

  router.post('/support-tasks/deactivate/choose-primary-record', (req, res) => {
    res.redirect('/support-tasks/deactivate/select-data')
  })


  router.post('/support-tasks/deactivate/select-data', (req, res) => {
    // Save all form field values to session
    const data = req.session.data
  
    data.retainMiddleName = req.body.retainMiddleName
    data.retainDOB = req.body.retainDOB
    data.retainEmail = req.body.retainEmail
    data.retainnationalInsuranceNumber = req.body.retainnationalInsuranceNumber
    data.retainTRN = req.body.retainTRN
    data.makeMergeComment = req.body.makeMergeComment
    data.combineTheseSelections = req.body.combineTheseSelections
  
    // Log to confirm it's coming through
    console.log("Form selections saved to session:", {
      middleName: data.retainMiddleName,
      dob: data.retainDOB,
      email: data.retainEmail,
      ni: data.retainnationalInsuranceNumber,
      trn: data.retainTRN,
      comment: data.makeMergeComment,
      combine: data.combineTheseSelections
    })
  
    // Redirect to confirmation page
    res.redirect('/support-tasks/deactivate/confirm-retain')
  })

  router.post('/support-tasks/deactivate/confirm-retain', (req, res) => {
    let data = req.session.data
  
    // ✅ STEP 1: Grab middle name from form POST body
    const selectedMiddleName = req.body.retainMiddleName
  
    // ✅ STEP 2: Save the selected middle name to session (for reuse on next page)
    data.retainMiddleName = selectedMiddleName
  
    // ✅ STEP 3: Log the value to confirm it's saving
    console.log("👀 retainMiddleName in session:", data.retainMiddleName)
  
    // ✅ Handle decision logic
    if (data.combineTheseSelections === 'Yes') {
      req.flash(
        'success',
        'Primary record updated for ' +
          data.deactivate[0].firstName + ' ' +
          data.deactivate[1].middleName + ' ' +
          data.deactivate[0].lastName +
          ' with TRN: ' + data.deactivate[0].trn
      )
  
      // ✅ Go to the summary page
      res.redirect('/support-tasks/deactivate/primary-new')
    } else {
      res.redirect('/support-tasks/deactivate/select-data')
    }
  })
  
  

}



// 439353