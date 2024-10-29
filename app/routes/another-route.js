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
          res.redirect('/legacy/exemption')  
        }      
      })

      router.post('/legacy/exemption', (req, res) => {
        if (req.query.returnUrl) {
          res.redirect(req.query.returnUrl)
        } else {
          res.redirect('/legacy/age-range')  
        }      
      })

      router.post('/legacy/age-range', (req, res) => {
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
}