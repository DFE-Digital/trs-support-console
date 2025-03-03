module.exports = (router) => {

  // router.post('/create-record/manual', (req, res) => {
	// 	res.redirect('/create-record/manual/details')  
	// })

  router.post('/support-tasks/create-record/manual/details', (req, res) => {
		res.redirect('/support-tasks/create-record/manual/check')
	})


  router.post('/support-tasks/create-record/manual/check', (req, res) => {
    let data = req.session.data || {}

    if (data.createRecordEmail === "Susan.Arrowsmith@gmail.com" || data.createRecordFirstName === "Susan" || data.createRecordLastName === "Arrowsmith") {
      res.redirect('/support-tasks/create-record/manual/duplicates')
    }

    // Generate TRN
    const generateTRN = () => Math.floor(100000 + Math.random() * 900000).toString()

    // Store the generated TRN in session data
    data.trn = generateTRN()
    req.session.data = data

    req.flash('success', 'Record created with TRN: ')
		res.redirect('/support-tasks/create-record/manual/new')  
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