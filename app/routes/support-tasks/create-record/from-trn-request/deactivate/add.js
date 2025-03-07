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
    res.redirect('/support-tasks/deactivate/confirm-deactivate')
  })


  router.post('/support-tasks/deactivate/confirm-deactivate', (req, res) => {
    req.flash('success', 'Primary record updated for ')
		  res.redirect('/find-teacher')
      let data = req.session.data || {} 
    }
	)

}



// 439353