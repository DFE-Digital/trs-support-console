module.exports = router => {

  router.post('/induction/status', (req, res) => {
    //  req.body.newInductionStatus = null
    if (req.query.returnUrl) {
      res.redirect(req.query.returnUrl)
    } else {
      if (req.body.newInductionStatus == "Exempt") {
        res.redirect('/induction/reason')
      } else if (req.body.newInductionStatus == "In progress" || req.body.newInductionStatus == "Passed" || req.body.newInductionStatus == "Failed" || req.body.newInductionStatus == "Passed in Wales" || req.body.newInductionStatus == "Failed in Wales") {
        res.redirect('/induction/start-date')
      } else {
        res.redirect('/induction/check')
      }
    }      
  })


  router.post('/induction/start-date', (req, res) => {
    if (req.query.returnUrl) {
      res.redirect(req.query.returnUrl)
    } else {
      res.redirect('/induction/completion-date')  
    }      
  })

  router.post('/induction/start-date', (req, res) => {
    
    if (req.query.returnUrl) {
      res.redirect(req.query.returnUrl)
    } else {
      res.redirect('/induction/completion-date')  
    }      
  })

  router.post('/induction/completion-date', (req, res) => {
    if (req.query.returnUrl) {
      res.redirect(req.query.returnUrl)
    } else {
      res.redirect('/induction/check')  
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
