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


     /////////////  ADD QUALS ROUTES //////////////
    router.post('/itt/add-qualification/award-date', (req, res) => {
      if (req.query.returnUrl) {
        res.redirect(req.query.returnUrl)
      } else {
        res.redirect('/itt/add-qualification/qualification-type')  
      }      
    })

     
     router.post('/itt/add-qualification/qualification-type', (req, res) => {
      if (req.query.returnUrl) {
        res.redirect(req.query.returnUrl)
      } else {
        res.redirect('/itt/add-qualification/age-restrictions')  
      }      
    })

    router.post('/itt/add-qualification/age-restrictions', (req, res) => {
      if (req.query.returnUrl) {
        res.redirect(req.query.returnUrl)
      } else {
        res.redirect('/itt/add-qualification/subject-restrictions')  
      }      
    })

    router.post('/itt/add-qualification/subject-restrictions', (req, res) => {
      if (req.query.returnUrl) {
        res.redirect(req.query.returnUrl)
      } else {
        res.redirect('/itt/add-qualification/check')  
      }      
    })

}