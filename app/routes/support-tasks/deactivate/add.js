const _ = require('lodash')

module.exports = (router) => {

  router.post('/support-tasks/deactivate/index', (req, res) => {
    res.redirect('/support-tasks/deactivate/choose-primary-record')
  })

  router.post('/support-tasks/deactivate/choose-primary-record', (req, res) => {
    res.redirect('/support-tasks/deactivate/select-data')
  })


  router.post('/support-tasks/deactivate/select-data', (req, res) => {
    res.redirect('/support-tasks/deactivate/confirm-retain')
  })

  router.post('/support-tasks/deactivate/confirm-retain', (req, res) => {
    let data = req.session.data
    if (data.keepTheseSelections == 'Yes') {
      req.flash('success', 'Primary record updated for ' + data.deactivate[0].firstName +  " " + data.retainMiddleName + " " + data.deactivate[0].lastName)
      res.redirect('/support-tasks/deactivate/primary-new')  
    } else {
      res.redirect('/support-tasks/deactivate/select-data')  
    }
  })

}



// 439353