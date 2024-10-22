module.exports = router => {


    router.post('/assessment-only/qualification-type', (req, res) => {
      if (req.query.returnUrl) {
        res.redirect(req.query.returnUrl)
      } else {
        res.redirect('/assessment-only/exemption')  
      }
    })

    router.post('/assessment-only/exemption', (req, res) => {
      if (req.query.returnUrl) {
        res.redirect(req.query.returnUrl)
      } else {
        res.redirect('/assessment-only/check')  
      }
    })


    router.post('/assessment-only/check-handler', (req, res) => {

      req.flash('success', 'QTS Route and professional status added')

      res.redirect('/route')
    })
    
}