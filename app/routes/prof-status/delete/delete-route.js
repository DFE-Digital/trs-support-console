module.exports = (router) => {

	router.post('/route/delete/delete-reason', (req, res) => {
		res.redirect('/route/delete/check')  
	})

	router.post('/route/delete/check', (req, res) => {
			delete req.session.data.activeRouteType
			delete req.session.data.legacyRouteType
      delete req.session.data.routeStatus
			delete req.session.routeCompleteEndDate
			delete req.session.routeAwardDate
			delete req.session.data.hasRouteExemption
			delete req.session.data.trainingProvider
			delete req.session.data.degreeTypes
			delete req.session.data.routeCountryOfTraining
			delete req.session.data.ages
			delete req.session.data.subjectChoices
			// req.session.data.user = {}
		req.flash('success', 'Route to professional status deleted')
		res.redirect('/route')  
	})


}