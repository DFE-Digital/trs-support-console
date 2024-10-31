module.exports = router => {

  router.post('/assessment-only/establishment', (req, res) => {
    if (req.query.returnUrl) {
      res.redirect(req.query.returnUrl)
    } else {
      res.redirect('/assessment-only/start-date')  
    }      
  })

  // router.post('/assessment-only/qualification', (req, res) => {
  //   if (req.query.returnUrl) {
  //     res.redirect(req.query.returnUrl)
  //   } else {
  //     res.redirect('/assessment-only/start-date')  
  //   }      
  // })

  router.post('/assessment-only/start-date', (req, res) => {
    if (req.query.returnUrl) {
      res.redirect(req.query.returnUrl)
    } else {
      res.redirect('/assessment-only/age-restrictions')  
    }      
  })

  router.post('/assessment-only/age-restrictions', (req, res) => {
    if (req.query.returnUrl) {
      res.redirect(req.query.returnUrl)
    } else {
      res.redirect('/assessment-only/subject-restrictions')  
    }      
  })

  router.post('/assessment-only/subject-restrictions', (req, res) => {
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

    /////////////  ADD QUALS ROUTES //////////////
    router.post('/assessment-only/add-qualification/award-date', (req, res) => {

      if (req.query.returnUrl) {
        res.redirect(req.query.returnUrl)
      } else {
        res.redirect('/assessment-only/add-qualification/check')  
      }      
    })

    router.post('/assessment-only/add-qualification/check-handler', (req, res) => {

      req.flash('success', 'Professional status added')

      let data = req.session.data
      data['assOnlyAddQualDate'] = data['assOnlyAddQualDate-day'] + " " + data['assOnlyAddQualDate-month'] + " " + data['assOnlyAddQualDate-year']

      res.redirect('/route')
    })

}