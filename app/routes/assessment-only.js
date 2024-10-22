module.exports = router => {


    router.post('/assessment-only/country', (req, res) => {
      res.redirect('/assessment-only/qualification-type')
    })

    router.post('/assessment-only/exemption', (req, res) => {
      res.redirect('/assessment-only/exemption')
    })


    router.post('/assessment-only/check-handler', (req, res) => {

      req.flash('success', 'QTS Route and professional status added')

      res.redirect('/route')
    })
    
}