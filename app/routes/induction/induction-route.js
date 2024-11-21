module.exports = router => {

  router.post('/induction/status', (req, res) => {
    if (req.query.returnUrl) {
      res.redirect(req.query.returnUrl)
    } else {
      if (req.body.newInductionStatus == "Exempt") {
        res.redirect('/induction/reason')
      }
      res.redirect('/induction/start-date')
    }
    console.log(req.body.newInductionStatus)      
  })


  router.post('/induction/start-date', (req, res) => {
    let data = req.session.data
    if (req.query.returnUrl) {
      res.redirect(req.query.returnUrl)
    } else if (data.newInductionStatus == "In progress" || data.newInductionStatus == "Required to complete") {
      res.redirect('/induction/change-reason')
    } else {
      res.redirect('/induction/completion-date')
    }
      console.log(data.newInductionStatus)
  })




  router.post('/induction/completion-date', (req, res) => {
    if (req.query.returnUrl) {
      res.redirect(req.query.returnUrl)
    } else {
      res.redirect('/induction/change-reason')  
    }      
  })


  router.post('/induction/change-reason', (req, res) => {
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
