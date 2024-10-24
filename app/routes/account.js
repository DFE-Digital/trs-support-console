module.exports = router => {

    router.post('/account/sign-in', (req, res) => {
      req.session.data.user = {}
      res.redirect('/find-teacher')
    })
  
    router.get('/account/sign-out', (req, res) => {
      req.session.data.user = null
      res.redirect('/account/sign-in')
    })
  
  } 