module.exports = router => {

  router.post('/assessment-only/establishment', (req, res) => {
    if (req.query.returnUrl) {
      res.redirect(req.query.returnUrl)
    } else {
      res.redirect('/assessment-only/establishment-qualification')  
    }      
  })

  router.post('/assessment-only/establishment-qualification', (req, res) => {
    if (req.query.returnUrl) {
      res.redirect(req.query.returnUrl)
    } else {
      res.redirect('/assessment-only/start-date')  
    }      
  })

  router.post('/assessment-only/start-date', (req, res) => {
    if (req.query.returnUrl) {
      res.redirect(req.query.returnUrl)
    } else {
      res.redirect('/assessment-only/check')  
    }      
  })

  /////////////  FLASH //////////////
  router.post('/assessment-only/check-handler', (req, res) => {

    req.flash('success', 'Route to professional status added')

    res.redirect('/route')
  })

}