module.exports = router => {

  router.post('/iqts/country', (req, res) => {
    if (req.query.returnUrl) {
      res.redirect(req.query.returnUrl)
    } else {
      res.redirect('/iqts/establishment')  
    }      
  })

    router.post('/iqts/establishment', (req, res) => {
      if (req.query.returnUrl) {
        res.redirect(req.query.returnUrl)
      } else {
        res.redirect('/iqts/establishment-qualification')  
      }      
    })

    router.post('/iqts/establishment-qualification', (req, res) => {
      if (req.query.returnUrl) {
        res.redirect(req.query.returnUrl)
      } else {
        res.redirect('/iqts/start-date')  
      }      
    })

    router.post('/iqts/start-date', (req, res) => {
      if (req.query.returnUrl) {
        res.redirect(req.query.returnUrl)
      } else {
        res.redirect('/iqts/provider')  
      }      
    })

    router.post('/iqts/provider', (req, res) => {
      if (req.query.returnUrl) {
        res.redirect(req.query.returnUrl)
      } else {
        res.redirect('/iqts/check')  
      }      
    })

    /////////////  FLASH //////////////
    router.post('/iqts/check-handler', (req, res) => {

      req.flash('success', 'Route to professional status added')

      res.redirect('/route')
    })

}