module.exports = router => {


    router.post('/apply-for-qts/country', (req, res) => {
      if (req.query) {
        
      } else {
        
      }
      res.redirect('/apply-for-qts/exemption')
    })

    router.post('/apply-for-qts/exemption', (req, res) => {
      res.redirect('/apply-for-qts/check')
    })


    router.post('/apply-for-qts/check-handler', (req, res) => {

      req.flash('success', 'QTS Route and professional status added')

      res.redirect('/route')
    })
    
}