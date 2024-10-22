module.exports = router => {

    

    router.post('/itt/start-date', (req, res) => {
      res.redirect('/itt/check')
    })

    router.post('/itt/check-handler', (req, res) => {

      req.flash('success', 'QTS Route and professional status added')

      res.redirect('/route')
    })

    /////////  QUALS //////////

    router.post('/itt/start-date', (req, res) => {
      res.redirect('/itt/check')
    })

    router.post('/itt/qualifications/qualification-type', (req, res) => {
      res.redirect('/itt/qualifications/award-date')
    })

    router.post('/itt/qualifications/award-date', (req, res) => {
      res.redirect('/itt/qualifications/end-date')
    })

    router.post('/itt/qualifications/end-date', (req, res) => {
      res.redirect('/itt/qualifications/check')
    })

    router.post('/itt/qualifications/check-handler', (req, res) => {

      req.flash('success', 'Professional status added')

      res.redirect('/itt/qualifications/index')
    })
}