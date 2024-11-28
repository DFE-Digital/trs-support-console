const _ = require('lodash')
const { v4: uuidv4 } = require('uuid')

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

      //// Create list of files
      let files = [
        'evidence-1.txt',
        'more-evidence-2.jpg',
        'even-more-evidence-3.csv'
      ]

      if(!req.session.data.evidence.files) {
        req.session.data.evidence.files = {}
      }

      // Get the next file
      let filesCount = _.size(req.session.data.evidence.files)
      let nextFile = files[filesCount]

      // storing that file in memory so we can present it in the view
      if(nextFile) {
        req.session.data.evidence.files[uuidv4()] = {
          filename: nextFile
        }
      }
      res.redirect('/induction/check-files')  
  })

  // Dynamic delete evidence route 
  router.get('/induction/:fileId/delete', (req, res) => {
    let file = req.session.data.evidence.files[req.params.fileId]
    res.render('induction/delete', {
      file
    })
  }) 

  router.post('/induction/:fileId/delete', (req, res) => {
    delete req.session.data.evidence.files[req.params.fileId]
    let filesCount = _.size(req.session.data.evidence.files)

      if (filesCount > 0) {
        res.redirect('/induction/check-files')
      }
      else {
        res.redirect('/induction/upload')
      }
  })

  
  router.post('/induction/check-files', (req, res) => {
    if (req.session.data.addMoreEvidence == "Yes") {
      res.redirect('/induction/upload')   
    } else {
      res.redirect('/induction/check')  
    }
  })

  /////////////  EXEMPTION   //////////////    
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
