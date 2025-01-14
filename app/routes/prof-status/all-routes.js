module.exports = (router) => {

	router.post('/all-qts-routes', (req, res) => {
		if (req.query.returnUrl) {
			res.redirect(req.query.returnUrl)
		} else {
			res.redirect('route-status')  
		}      
	})

	router.post('/route-status', (req, res) => {
    let data = req.session.data
    if (req.query.returnUrl) {
      res.redirect(req.query.returnUrl)
    } else if (data.routeStatus == 'Awarded' || data.routeStatus == 'Failed') {
      res.redirect('/route-complete/end-date')
    } else {
      res.redirect('/route-in-progress/start-date')
    }
      console.log(data.routeStatus)
  })

	///////// Route in progress //////////////

	router.post('/route-in-progress/start-date', (req, res) => {
		if (req.query.returnUrl) {
			res.redirect(req.query.returnUrl)
		} else {
			res.redirect('/route-information/training-provider')  
		}      
	})


	/////////// Route complete ///////////////
	
	router.post('/route-complete/end-date', (req, res) => {
		if (req.query.returnUrl) {
			res.redirect(req.query.returnUrl)
		} else {
			res.redirect('/route-complete/award-date')  
		}      
	})

	router.post('/route-complete/award-date', (req, res) => {
		if (req.query.returnUrl) {
			res.redirect(req.query.returnUrl)
		} else {
			res.redirect('/route-complete/has-exemption')  
		}      
	})

	// router.post('/route-complete/has-exemption', (req, res) => {
  //   let data = req.session.data
  //   if (req.query.returnUrl) {
  //     res.redirect(req.query.returnUrl)
  //   } else if (data.hasRouteExemption == 'Yes') {
  //     res.redirect('/route-complete/exemption-reason')
  //   } else {
  //     res.redirect('/route-information/training-provider')
  //   }
  //     console.log(data.hasRouteExemption)
  // })

	router.post('/route-complete/has-exemption', (req, res) => {
		if (req.query.returnUrl) {
			res.redirect(req.query.returnUrl)
		} else {
			res.redirect('/route-complete/check')  
		}      
	})


	/// Route Information
	router.post('/route-information/training-provider', (req, res) => {
		if (req.query.returnUrl) {
			res.redirect(req.query.returnUrl)
		} else {
			res.redirect('/route-information/degree-type')  
		}      
	})

	router.post('/route-information/degree-type', (req, res) => {
		if (req.query.returnUrl) {
			res.redirect(req.query.returnUrl)
		} else {
			res.redirect('/route-information/country')  
		}      
	})

	router.post('/route-information/country', (req, res) => {
		if (req.query.returnUrl) {
			res.redirect(req.query.returnUrl)
		} else {	
			res.redirect('/route-information/age-to-from')  
		}      
	})

	router.post('/route-information/age-to-from', (req, res) => {
		if (req.query.returnUrl) {
			res.redirect(req.query.returnUrl)
		} else {	
			res.redirect('/route-information/subjects')  
		}      
	})

	router.post('/route-information/subjects', (req, res) => {
		if (req.query.returnUrl) {
			res.redirect(req.query.returnUrl)
		} else {	
			res.redirect('/check')  
		}      
	})

	
	/////////////  FLASH //////////////
  router.post('/check-handler', (req, res) => {

	req.flash('success', 'Route to professional status added')

	res.redirect('/route')
	})
}