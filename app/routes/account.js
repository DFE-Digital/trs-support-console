module.exports = router => {

    router.post('/account/sign-in', (req, res) => {
      req.session.data.user = {}
      res.redirect('/general')
    })
  
    router.get('/account/sign-out', (req, res) => {
      req.session.data.user = null
      res.redirect('/account/sign-in')
    })


    router.post('/find-record', (req, res) => {
      res.redirect('/general')
    })
  
  
  } 