module.exports = router => {

    router.post('/all-qts-routes', (req, res) => {

        if (req.body.chooseQtsRoute == 'Initial teacher training (postgraduate or undergraduate)') {
          res.redirect('/itt/start-date')

        } else if (req.body.chooseQtsRoute == 'Assessment only') {
          res.redirect('/assessment')

        } else if (req.body.chooseQtsRoute == 'IQTS') {
          res.redirect('iqts')

        } else if (req.body.chooseQtsRoute == 'Apply for qualified teacher status') {
          res.redirect('/apply-for-qts/country')

        } else if (req.body.chooseQtsRoute == 'Legacy from migration') {
          res.redirect('legacy')

        } else {
          res.redirect('qtls-set')
        }
        
    })

    router.get('/change-qts-route', (req, res) => {
        req.session.data = {}
        res.redirect('/all-qts-routes')
    })
}