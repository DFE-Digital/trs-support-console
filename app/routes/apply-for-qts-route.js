module.exports = router => {


    router.post('/apply-for-qts/country', (req, res) => {
      res.redirect('/apply-for-qts/exemption')
    })

    router.post('/apply-for-qts/exemption', (req, res) => {
      res.redirect('/apply-for-qts/exemption-reason')
    })

    
}