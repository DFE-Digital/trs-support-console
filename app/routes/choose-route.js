module.exports = router => {

    router.post('/all-qts-routes', (req, res) => {

        if (req.body.chooseQtsRoute == 'Initial teacher training') {
          res.redirect('/itt/establishment')
        }

        if (req.body.chooseQtsRoute == 'Assessment only') {
          res.redirect('/assessment-only/establishment')
        }
        
        if (req.body.chooseQtsRoute == 'iqts') {
          res.redirect('/iqts/country')
        }
        
        if (req.body.chooseQtsRoute == 'Apply for qualified teacher status') {
          res.redirect('/apply-for-qts/country')
        }

        if (req.body.chooseQtsRoute == 'qtls and set') {
          res.redirect('/new-qtls-set/set-member-number')
        }
        
        if (req.body.chooseQtsRoute == 'Another route') {
          res.redirect('/legacy')
        }
        
    })

    router.get('/change-qts-route', (req, res) => {
        req.session.data.chooseQtsRoute = {}
        res.redirect('/all-qts-routes')
    })
}