module.exports = (router) => {

  router.post('/create-record/add', (req, res) => {
		res.redirect('/create-record/add/check')  
	})

  router.post('/create-record/add/check', (req, res) => {
    let data = req.session.data
    if (data.createRecordFullName === data.teachers[0].fullName || data.createRecordEmail === data.teachers[0].email || data.createRecordNationalInsuranceNumber === data.teachers[0].nationalInsurance) {
      res.redirect('/create-record/add/duplicates')
    }
		res.redirect('/create-record/add/success')  
	})
  
	
}