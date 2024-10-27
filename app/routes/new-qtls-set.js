module.exports = router => {


    router.post('/new-qtls-set/set-member-number', (req, res) => {
      if (req.query.returnUrl) {
        res.redirect(req.query.returnUrl)
      } else {
        res.redirect('/new-qtls-set/member-start-award-date')  
      }
    })

    router.post('/new-qtls-set/member-start-award-date', (req, res) => {
      if (req.query.returnUrl) {
        res.redirect(req.query.returnUrl)
      } else {
        res.redirect('/new-qtls-set/check') 
      }
    })


    router.post('/new-qtls-set/check-handler', (req, res) => {

      req.flash('success', 'Route to professional status added')

      res.redirect('/route')
    })
    
}