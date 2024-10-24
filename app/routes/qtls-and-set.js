module.exports = router => {


    router.post('/qtls-and-set/set-member-number', (req, res) => {
      if (req.query.returnUrl) {
        res.redirect(req.query.returnUrl)
      } else {
        res.redirect('/qtls-and-set/start-date')  
      }
    })

    router.post('/qtls-and-set/start-date', (req, res) => {
      if (req.query.returnUrl) {
        res.redirect(req.query.returnUrl)
      } else {
        res.redirect('/qtls-and-set/check') 
      }
    })


    router.post('/qtls-and-set/check-handler', (req, res) => {

      req.flash('success', 'Route to professional status added')

      res.redirect('/route')
    })
    
}