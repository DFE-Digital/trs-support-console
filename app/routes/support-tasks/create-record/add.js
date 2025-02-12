module.exports = (router) => {

  router.post('/create-record/add', (req, res) => {
		res.redirect('/create-record/add/details')  
	})

  router.post('/create-record/add/details', (req, res) => {
		res.redirect('/create-record/add/check')
	})


  router.post('/create-record/add/check', (req, res) => {
    let data = req.session.data
    if (data.createRecordEmail === "Susan.Arrowsmith@gmail.com" ) {
      res.redirect('/create-record/add/duplicates')
    }
    req.flash('success', 'New record created')
		res.redirect('/create-record')  
	})

  router.post('/create-record/add/duplicates', (req, res) => {
    let data = req.session.data
    if (data.samePerson == 'Yes') {
      // req.flash('success', 'Existing record merged/updated')
      res.redirect('/create-record/add/find-trn') 
    } else {
      req.flash('success', 'New record created')
      let data = {}
		  res.redirect('/create-record') 
    }
	})
  
	
}