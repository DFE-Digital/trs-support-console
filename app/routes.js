//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

const flash = require('connect-flash')
router.use(flash())

router.all('*', (req, res, next) => {
    res.locals.flash = req.flash('success')
    next()
})

// ADD QUALS & ROUTES 
require('./routes/account')(router)
require('./routes/choose-route')(router)
require('./routes/itt-route')(router)
require('./routes/apply-for-qts-route')(router)
require('./routes/assessment-only')(router)
require('./routes/iqts-route')(router)
require('./routes/new-qtls-set')(router)
require('./routes/legacy')(router)


router.get('/cancel-and-return', (req, res) => {
    req.session.data = {}
    res.redirect('/general')
})

router.post('/find-teacher', (req, res) => {
    res.redirect('/general')
})


////// INDUCTION ROUTES
require('./routes/induction/induction-route')(router)


// router.get('/find-new-record', (req, res) => {
//     req.session.data = {}
//     res.redirect('/find-teacher')
// })
  