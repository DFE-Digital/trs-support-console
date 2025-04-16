const _ = require('lodash')

module.exports = (router) => {

  router.post('/support-tasks/deactivate/index', (req, res) => {
    res.redirect('/support-tasks/deactivate/choose-primary-record')
  })

  router.post('/support-tasks/deactivate/choose-primary-record', (req, res) => {
    res.redirect('/support-tasks/deactivate/select-data')
  })


  
  ///POST for select-data template
  router.post('/support-tasks/deactivate/select-data', (req, res) => {
    const data = req.session.data
  
    data.retainFirstName = req.body.retainFirstName
    data.retainMiddleName = req.body.retainMiddleName
    data.retainDOB = req.body.retainDOB
    data.retainEmail = req.body.retainEmail
    data.retainnationalInsuranceNumber = req.body.retainnationalInsuranceNumber
    data.retainTRN = req.body.retainTRN
    data.makeMergeComment = req.body.makeMergeComment
    data.combineTheseSelections = req.body.combineTheseSelections
  
    console.log("📝 Form selections saved to session:", data)
  
    res.redirect('/support-tasks/deactivate/confirm-retain')
  })
  

  ///POST for confirm-retain template
  router.post('/support-tasks/deactivate/confirm-retain', (req, res) => {
    let data = req.session.data
  
    data.retainFirstName = req.body.retainFirstName
    data.retainMiddleName = req.body.retainMiddleName
    data.retainLastName = req.body.retainLastName
    data.retainDOB = req.body.retainDOB
    data.retainEmail = req.body.retainEmail
    data.retainnationalInsuranceNumber = req.body.retainnationalInsuranceNumber
    data.retainTRN = req.body.retainTRN
    data.makeMergeComment = req.body.makeMergeComment
  
    // Add full name for banner
    const fullName = `${data.retainFirstName} ${data.retainMiddleName || ''} ${data.retainLastName}`.replace(/\s+/g, ' ').trim()
    const recordId = data.retainTRN || 'merged-record'
  
    res.redirect(`/support-tasks/deactivate/new/${recordId}?flash=Primary+record+updated&fullName=${encodeURIComponent(fullName)}`)
  })
  

  ///GET for confirm-retian template
  router.get('/support-tasks/deactivate/new/:recordId', (req, res) => {
    const { flash, fullName } = req.query
    const data = req.session.data
  
    // Create a merged task object from retained values
    const person = {
      id: req.params.recordId,
      firstName: data.retainFirstName,
      middleName: data.retainMiddleName,
      lastName: data.retainLastName,
      fullName: data.retainFirstName + ' ' + (data.retainMiddleName || '') + ' ' + data.retainLastName,
      dateOfBirth: data.retainDOB,
      email: data.retainEmail,
      nationalInsuranceNumber: data.retainnationalInsuranceNumber,
      gender: data.retainSex || 'Not provided',
      trn: data.retainTRN
    }
  
  
    res.render('support-tasks/deactivate/new', {
      flashMessage: flash,
      fullName,
      recordId: req.params.recordId,
      person,
      data
    })
  })
  

  
  
}



// 439353