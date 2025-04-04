module.exports = (router) => {


  router.post('/personal-details/details', (req, res) => {
		res.redirect('/personal-details/check')
	})

	router.post('/personal-details/check', (req, res) => {
		res.redirect('/personal-details')
	})


	
}