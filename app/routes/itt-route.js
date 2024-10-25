module.exports = router => {

    router.post('/itt/establishment', (req, res) => {
      if (req.query.returnUrl) {
        res.redirect(req.query.returnUrl)
      } else {
        res.redirect('/itt/establishment-qualification')  
      }      
    })

    router.post('/itt/establishment-qualification', (req, res) => {
      if (req.query.returnUrl) {
        res.redirect(req.query.returnUrl)
      } else {
        res.redirect('/itt/start-date')  
      }      
    })

    router.post('/itt/start-date', (req, res) => {
      if (req.query.returnUrl) {
        res.redirect(req.query.returnUrl)
      } else {
        res.redirect('/itt/check')  
      }      
    })

    /////////////  FLASH //////////////
    router.post('/itt/check-handler', (req, res) => {

      req.flash('success', 'Route to professional status added')

      res.redirect('/route')
    })

}