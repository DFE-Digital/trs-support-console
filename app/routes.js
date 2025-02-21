const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

const flash = require('connect-flash')
router.use(flash())

router.all('*', (req, res, next) => {
    res.locals.flash = req.flash('success')
    next()
})

// ADD QUALS & ROUTES 
require('./routes/prof-status/all-routes')(router)
require('./routes/prof-status/edit/edit-routes')(router)
require('./routes/prof-status/delete/delete-route')(router)


require('./routes/account')(router)
require('./routes/choose-route')(router)
require('./routes/itt-route')(router)
require('./routes/apply-for-qts-route')(router)
require('./routes/assessment-only')(router)
require('./routes/iqts-route')(router)
require('./routes/new-qtls-set')(router)
require('./routes/legacy')(router)


//// CREATE RECORD ROUTES
require('./routes/support-tasks/create-record/add')(router)



// GENERAL ROUTES
router.get('/cancel-and-return', (req, res) => {
    req.session.data = {}
    res.redirect('/general')
})

router.post('/find-teacher', (req, res) => {
    res.redirect('/general')
})


////// INDUCTION ROUTES
require('./routes/induction/induction-route')(router)

