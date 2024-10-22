module.exports = router => {

    router.post('/itt/start-date', (req, res) => {
      if (req.query.returnUrl) {

      } else {
        res.redirect('/itt/check')  
      }      
    })

    router.post('/itt/check-handler', (req, res) => {

      req.flash('success', 'QTS Route and professional status added')

      res.redirect('/route')
    })

}