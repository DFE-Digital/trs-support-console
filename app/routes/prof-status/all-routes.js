module.exports = router => {

    router.post('/all-qts-routes', (req, res) => {
          res.redirect('route-status')
    })

    router.post('/route-status', (req, res) => {
        if (req.session.data.routeStatus == 'Awarded') {
            res.redirect('/route-complete/end-date')
        } else {
            res.redirect('/route-add/start-date')
        }
  })

    router.get('/change-qts-route', (req, res) => {
        req.session.data.chooseQtsRoute = {}
        res.redirect('/all-qts-routes')
    })
}