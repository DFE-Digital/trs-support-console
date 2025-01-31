module.exports = (router) => {


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

	
	/// Route change reason
	router.post('/route/edit/check', (req, res) => {
		if (req.query.returnUrl) {
			res.redirect(req.query.returnUrl)
		} else {
			res.redirect('/route/edit/change-reason')  
		}      
	})

	router.post('/route/edit/change-reason', (req, res) => {
		if (req.query.returnUrl) {
			res.redirect(req.query.returnUrl)
		} else {
			res.redirect('/route/edit/check-confirm')  
		}  
	})

	router.post('/route/edit/check-confirm', (req, res) => {
		let data = req.session.data
		if (data.routeStatus == "Awarded" || data.routeStatus === 'Failed') {
			req.flash('success', 'Route to professional status complete')
		} else {
			req.flash('success', 'Route to professional status updated')
		}
	res.redirect('/route')
	})
}