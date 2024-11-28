module.exports = router => {

  // RESTRUCTURE LIKE ROUT BELOW WITH ELSEIF STATEMENT - DONE

  router.post('/induction/status', (req, res) => {
    let data = req.session.data
    if (req.query.returnUrl) {
      res.redirect(req.query.returnUrl)
    } else if (data.newInductionStatus == "Exempt") {
      res.redirect('/induction/reason')
    } else {
      res.redirect('/induction/start-date')
    }
      console.log(data.newInductionStatus)
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
      res.redirect('/induction/upload')  
    }      
  })

  /////////////  EVIDENCE   //////////////
  router.post('/induction/upload', (req, res) => {
   
      res.redirect('/induction/check')  
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
  let data = req.session.data
  newInductionStartDate = data.newInductionStatus
  newInductionCompletionDate =  data.newInductionCompletionDate

  res.redirect('/induction')
})    

}
