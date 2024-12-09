module.exports = router => {

    router.post('/legacy/route-type', (req, res) => {
        if (req.query.returnUrl) {
          res.redirect(req.query.returnUrl)
        } else {
          res.redirect('/legacy/country')  
        }      
      })

      router.post('/legacy/country', (req, res) => {
        if (req.query.returnUrl) {
          res.redirect(req.query.returnUrl)
        } else {
          res.redirect('/legacy/establishment')  
        }      
      })

      router.post('/legacy/establishment', (req, res) => {
        if (req.query.returnUrl) {
          res.redirect(req.query.returnUrl)
        } else {
          res.redirect('/legacy/start-date')  
        }      
      })

      router.post('/legacy/start-date', (req, res) => {
        if (req.query.returnUrl) {
          res.redirect(req.query.returnUrl)
        } else {
          res.redirect('/legacy/end-date')  
        }      
      })

      router.post('/legacy/end-date', (req, res) => {
        if (req.query.returnUrl) {
          res.redirect(req.query.returnUrl)
        } else {
          res.redirect('/legacy/induction')  
        }      
      })

      router.post('/legacy/induction', (req, res) => {
        if (req.query.returnUrl) {
          res.redirect(req.query.returnUrl)
        } else {
          res.redirect('/legacy/age-restrictions')  
        }      
      })

      router.post('/legacy/age-restrictions', (req, res) => {
        if (req.query.returnUrl) {
          res.redirect(req.query.returnUrl)
        } else {
          res.redirect('/legacy/subjects')  
        }      
      })

      router.post('/legacy/subjects', (req, res) => {
        if (req.query.returnUrl) {
          res.redirect(req.query.returnUrl)
        } else {
          res.redirect('/legacy/provider')  
        }      
      })


      router.post('/legacy/provider', (req, res) => {
        if (req.query.returnUrl) {
          res.redirect(req.query.returnUrl)
        } else {
          res.redirect('/legacy/check')  
        }      
      })

      /////////////  FLASH //////////////
    router.post('/legacy/check-handler', (req, res) => {

      req.flash('success', 'Route to professional status added')

      res.redirect('/route')
    })


    /////////////  ADD QUALS ROUTES //////////////
    router.post('/legacy/add-qualification/award-date', (req, res) => {

      if (req.query.returnUrl) {
        res.redirect(req.query.returnUrl)
      } else {
        res.redirect('/legacy/add-qualification/check')  
      }      
    })

    router.post('/legacy/add-qualification/check-handler', (req, res) => {

      req.flash('success', 'Professional status added')

      let data = req.session.data
      data['legacyAddQualDate'] = data['legacyAddQualDate-day'] + " " + data['legacyAddQualDate-month'] + " " + data['legacyAddQualDate-year']

      res.redirect('/route')
    })
}