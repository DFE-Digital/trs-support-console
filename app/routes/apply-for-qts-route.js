module.exports = router => {


    router.post('/apply-for-qts/country', (req, res) => {
      if (req.query.returnUrl) {
        res.redirect(req.query.returnUrl)
      } else {
        res.redirect('/apply-for-qts/exemption')  
      }
    })

    router.post('/apply-for-qts/exemption', (req, res) => {
      if (req.query.returnUrl) {
        res.redirect(req.query.returnUrl)
      } else {
        res.redirect('/apply-for-qts/award-date')  
      }     
    })

    router.post('/apply-for-qts/award-date', (req, res) => {
      if (req.query.returnUrl) {
        res.redirect(req.query.returnUrl)     
      } else {
        res.redirect('/apply-for-qts/age-restrictions') 
      }
    })
    router.post('/apply-for-qts/age-restrictions', (req, res) => {
      if (req.query.returnUrl) {
        res.redirect(req.query.returnUrl)     
      } else {
        res.redirect('/apply-for-qts/subjects') 
      }
    })

    router.post('/apply-for-qts/subjects', (req, res) => {
      if (req.query.returnUrl) {
        res.redirect(req.query.returnUrl)     
      } else {
        res.redirect('/apply-for-qts/check') 
      }
    })

    /////////////  FLASH //////////////
    router.post('/apply-for-qts/check-handler', (req, res) => {

      req.flash('success', 'Route and Professional status added')

      res.redirect('/route')
    })
    
}