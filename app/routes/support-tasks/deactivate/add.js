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

  ///GET for select-data template
  router.get('/support-tasks/deactivate/confirm-retain', (req, res) => {
    res.render('support-tasks/deactivate/confirm-retain', {
      data: req.session.data
    })
  })

  router.post('/support-tasks/deactivate/confirm-retain', (req, res) => {
    const data = req.session.data
  
    data.retainFirstName = req.body.retainFirstName || data.retainFirstName
    data.retainMiddleName = req.body.retainMiddleName || data.retainMiddleName
  
    console.log("✅ Confirm-retain POST — updated session data:", data)
  
    if (data.combineTheseSelections === 'Yes') {
      req.flash(
        'success',
        'Primary record updated for ' +
          data.deactivate?.[0]?.firstName + ' ' +
          data.deactivate?.[1]?.middleName + ' ' +
          data.deactivate?.[0]?.lastName +
          ' with TRN: ' + data.deactivate?.[0]?.trn
      )
  
      res.redirect('/support-tasks/deactivate/primary-new')
    } else {
      res.redirect('/support-tasks/deactivate/select-data')
    }
  })  
  
}



// 439353