module.exports = (router) => {
	router.post('/all-qts-routes', (req, res) => {
			res.redirect('route-status')
	})

	router.post('/route-status', (req, res) => {
			if (req.session.data.routeStatus == 'Awarded' || req.session.data.routeStatus == 'Failed') {
				res.redirect('/route-complete/end-date')
			} else {
				res.redirect('/route-in-progress/start-date')
			}
	})

	/// Route in progress
	router.post('/route-in-progress/start-date', (req, res) => {
			res.redirect('/route-information/training-provider')
	})



	/// Route complete
	router.post('/route-complete/end-date', (req, res) => {
			res.redirect('/route-complete/award-date')
	})

	router.post('/route-complete/award-date', (req, res) => {
		res.redirect('/route-complete/has-exemption')
	})

	router.post('/route-complete/award-date', (req, res) => {
		res.redirect('/route-complete/has-exemption')
	})

	router.post('/route-complete/has-exemption', (req, res) => {
		if (req.session.data.hasExemption == 'Yes') {
			res.redirect('/route-complete/exemption-reason')
		} else {
			res.redirect('/route-information/training-provider')
		}
	})

	router.post('/route-complete/exemption-reason', (req, res) => {
		res.redirect('/route-information/training-provider')
	})

	/// Route Information
	router.post('/route-information/training-provider', (req, res) => {
			res.redirect('/route-information/degree-type')
	})

	router.post('/route-information/degree-type', (req, res) => {
			res.redirect('/route-information/country')
	})

	router.post('/route-information/country', (req, res) => {
			res.redirect('/route-information/age-range')
	})

	router.post('/route-information/age-range', (req, res) => {
			res.redirect('/route-information/subjects')
	})

	router.post('/route-information/subjects', (req, res) => {
			res.redirect('/check')
	})




	router.get('/change-qts-route', (req, res) => {
			req.session.data.chooseQtsRoute = {}
			res.redirect('/all-qts-routes')
	})
}