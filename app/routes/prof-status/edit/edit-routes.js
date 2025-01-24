module.exports = (router) => {

	router.post('/route/edit/check', (req, res) => {
		res.redirect('/route/edit/change-reason')  
	})

	router.post('/route/edit/change-reason', (req, res) => {
		if (req.query.returnUrl) {
			res.redirect(req.query.returnUrl)
		} else {
			res.redirect('/route/edit/check')  
		}  
	})

	router.post('/route/edit/all-qts-routes', (req, res) => {
		if (req.query.returnUrl) {
			res.redirect(req.query.returnUrl)
		} else {
			res.redirect('/route/edit/check')  
		}    
		
  })

	router.post('/route/edit/route-status', (req, res) => {
		if (req.query.returnUrl) {
			res.redirect(req.query.returnUrl)
		} else {
			res.redirect('/route/edit/check')  
		}    
		
  })

	router.post('/route/edit/start-date', (req, res) => {
		if (req.query.returnUrl) {
			res.redirect(req.query.returnUrl)
		} else {
			res.redirect('/route/edit/check')  
		}    	
  })

	router.post('/route/edit/end-date', (req, res) => {
		if (req.query.returnUrl) {
			res.redirect(req.query.returnUrl)
		} else {
			res.redirect('/route/edit/check')  
		}    
  })

	router.post('/route/edit/training-provider', (req, res) => {
		if (req.query.returnUrl) {
			res.redirect(req.query.returnUrl)
		} else {
			res.redirect('/route/edit/check')  
		}    
  })

	router.post('/route/edit/degree-type', (req, res) => {
		if (req.query.returnUrl) {
			res.redirect(req.query.returnUrl)
		} else {
			res.redirect('/route/edit/check')  
		}    
  })

	router.post('/route/edit/country', (req, res) => {
		if (req.query.returnUrl) {
			res.redirect(req.query.returnUrl)
		} else {
			res.redirect('/route/edit/check')  
		}    
  })

	router.post('/route/edit/end-date', (req, res) => {
		if (req.query.returnUrl) {
			res.redirect(req.query.returnUrl)
		} else {
			res.redirect('/route/edit/check')  
		}    
  })

	router.post('/route/edit/key-stages', (req, res) => {
		if (req.query.returnUrl) {
			res.redirect(req.query.returnUrl)
		} else {
			res.redirect('/route/edit/check')  
		}    
  })

	router.post('/route/edit/subjects', (req, res) => {
		if (req.query.returnUrl) {
			res.redirect(req.query.returnUrl)
		} else {
			res.redirect('/route/edit/check')  
		}    
  })

	

	
	/////////////  FLASH //////////////
  router.post('/check-handler', (req, res) => {

	req.flash('success', 'Route to professional status added')

	res.redirect('/route')
	})
}