module.exports = router => {

    router.post('/itt/start-date', (req, res) => {
      res.redirect('/itt/check')
    })

    router.post('/itt/check-handler', (req, res) => {

      req.flash('success', 'QTS Route and professional status added')

      res.redirect('/route')
    })

}