module.exports = (router) => {

	router.post('/route/edit/check', (req, res) => {
		if (req.query.returnUrl) {
			res.redirect(req.query.returnUrl)
		} else {
			res.redirect('/route/edit/change-reason')  
		}      
	})

	router.post('/route/edit/change-reason', (req, res) => {
			res.redirect(req.query.returnUrl)
	})


	
	/////////////  FLASH //////////////
  router.post('/check-handler', (req, res) => {

	req.flash('success', 'Route to professional status added')

	res.redirect('/route')
	})
}