module.exports = (router) => {

  // router.post('/create-record/manual', (req, res) => {
	// 	res.redirect('/create-record/manual/details')  
	// })

  router.post('/support-tasks/create-record/manual/details', (req, res) => {
		res.redirect('/support-tasks/create-record/manual/check')
	})


  //// POST from check page
  router.post('/support-tasks/create-record/manual/check', (req, res) => {
    let data = req.session.data || {}
  
    // Redirect to duplicates if matching a known duplicate name/email
    if (
      data.createRecordEmail === "Susan.Arrowsmith@gmail.com" ||
      data.createRecordFirstName === "Susan" ||
      data.createRecordLastName === "Arrowsmith"
    ) {
      return res.redirect('/support-tasks/create-record/manual/duplicates')
    }
  
    // Generate TRN and store it
    const generateTRN = () => Math.floor(100000 + Math.random() * 900000).toString()
    data.trn = generateTRN()
  
    // Set full name in session (optional, makes it easy to reuse)
    data.createRecordFullName = `${data.createRecordFirstName} ${data.createRecordLastName}`
  
    req.session.data = data
  
    // Redirect to list with flash message in query string
    res.redirect(`/support-tasks/create-record/manual/new?flash=Record+created+successfully+for+${encodeURIComponent(data.createRecordFullName)}`)
  })


  router.get('/support-tasks/create-record/manual/new', (req, res) => {
    const flash = req.query.flash || ''
    res.render('support-tasks/create-record/manual/new', {
      flash,
      data: req.session.data
    })
  })
  

  router.post('/support-tasks/create-record/manual/duplicates', (req, res) => {
    let data = req.session.data
    let fullName = data.createRecordFirstName + ' ' + data.createRecordMiddleName + ' ' + data.createRecordLastName 
    if (data.samePerson == 'Yes') {
      // req.flash('success', 'Existing record merged/updated')
      res.redirect('/support-tasks/create-record/manual/find-trn') 
    } else {
      req.flash('success', 'New record created for ')
      let data = {}
		  res.redirect('/support-tasks/create-record/manual') 
    }
	})
  
	
}