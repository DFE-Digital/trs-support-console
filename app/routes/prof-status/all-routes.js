module.exports = router => {

    router.post('/all-qts-routes', (req, res) => {

          res.redirect('route-status')
          
    })

    router.get('/change-qts-route', (req, res) => {
        req.session.data.chooseQtsRoute = {}
        res.redirect('/all-qts-routes')
    })
}