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
        res.redirect('/itt/age-restrictions')  
      }      
    })

    router.post('/itt/age-restrictions', (req, res) => {
      if (req.query.returnUrl) {
        res.redirect(req.query.returnUrl)
      } else {
        res.redirect('/itt/subject-restrictions')  
      }      
    })

    router.post('/itt/subject-restrictions', (req, res) => {
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
        res.redirect('/itt/add-qualification/check')  
      }      
    })

    router.post('/itt/add-qualification/check-handler', (req, res) => {

      req.flash('success', 'Professional status added')

      let data = req.session.data
      data['ittAddQualDate'] = data['ittAddQualDate-day'] + " " + data['ittAddQualDate-month'] + " " + data['ittAddQualDate-year']

      res.redirect('/route')
    })

    

}
