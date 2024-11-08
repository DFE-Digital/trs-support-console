module.exports = router => {

  router.post('/induction/status', (req, res) => {
     req.body.newInductionStatus = null
    if (req.query.returnUrl) {
      res.redirect(req.query.returnUrl)
    } else {
      if (req.body.newInductionStatus == "Exempt") {
        res.redirect('/induction/reason')
      } else {
        res.redirect('/induction/check')
      }
    }      
  })

  router.post('/induction/reason', (req, res) => {
    if (req.query.returnUrl) {
      res.redirect(req.query.returnUrl)
    } else {
      res.redirect('/induction/check')  
    }      
  })


  /////////////  FLASH //////////////
  router.post('/induction/check-handler', (req, res) => {

  req.flash('success', 'Induction status changed')

  res.redirect('/induction')
})    

}
