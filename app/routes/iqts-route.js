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
        res.redirect('/iqts/qualification')  
      }      
    })

    router.post('/iqts/qualification', (req, res) => {
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
        res.redirect('/iqts/age-restrictions')  
      }      
    })

    router.post('/iqts/age-restrictions', (req, res) => {
      if (req.query.returnUrl) {
        res.redirect(req.query.returnUrl)
      } else {
        res.redirect('/iqts/subjects')  
      }      
    })

    router.post('/iqts/subjects', (req, res) => {
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


     /////////////  ADD QUALS ROUTES //////////////
     router.post('/iqts/add-qualification/award-date', (req, res) => {

      if (req.query.returnUrl) {
        res.redirect(req.query.returnUrl)
      } else {
        res.redirect('/iqts/add-qualification/check')  
      }      
    })

    router.post('/iqts/add-qualification/check-handler', (req, res) => {

      req.flash('success', 'Professional status added')

      let data = req.session.data
      data['iqtsAddQualDate'] = data['iqtsAddQualDate-day'] + " " + data['iqtsAddQualDate-month'] + " " + data['iqtsAddQualDate-year']

      res.redirect('/route')
    })

}