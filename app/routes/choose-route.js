module.exports = router => {

    router.post('/all-qts-routes', (req, res) => {

        if (req.body.chooseQtsRoute == 'Initial teacher training') {
          res.redirect('/itt/establishment')

        } else if (req.body.chooseQtsRoute == 'Assessment only') {
          res.redirect('/assessment-only/establishment')

        } else if (req.body.chooseQtsRoute == 'IQTS') {
          res.redirect('iqts')

        } else if (req.body.chooseQtsRoute == 'Apply for qualified teacher status') {
          res.redirect('/apply-for-qts/country')

        } else if (req.body.chooseQtsRoute == 'QTLS and SET') {
          res.redirect('/qtls-and-set/set-member-number')

        } else {
          res.redirect('legacy')
        }
        
    })

    router.get('/change-qts-route', (req, res) => {
        req.session.data.chooseQtsRoute = {}
        res.redirect('/all-qts-routes')
    })
}