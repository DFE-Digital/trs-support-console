module.exports = router => {


    router.post('/qtls-and-set/set-member', (req, res) => {
      if (req.query.returnUrl) {
        res.redirect(req.query.returnUrl)
      } else {
        res.redirect('/qtls-and-set/set-member-number')  
      }
    })

    router.post('/qtls-and-set/set-member-number', (req, res) => {
      if (req.query.returnUrl) {
        res.redirect(req.query.returnUrl)
      } else {
        res.redirect('/qtls-and-set/check') 
      }
    })


    router.post('/qtls-and-set/check-handler', (req, res) => {

      req.flash('success', 'QTS Route and professional status added')

      res.redirect('/route')
    })
    
}