module.exports = (router) => {

	router.post('/route/delete/delete-reason', (req, res) => {
		res.redirect('/route/delete/check')  
	})

	
	

	
	/////////////  FLASH //////////////
  router.post('/check-handler', (req, res) => {

	req.flash('success', 'Route to professional status added')

	res.redirect('/route')
	})
}