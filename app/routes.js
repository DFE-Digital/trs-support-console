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

// Add your routes here
require('./routes/account')(router)
require('./routes/choose-route')(router)
require('./routes/itt-route')(router)
require('./routes/apply-for-qts-route')(router)
require('./routes/assessment-only')(router)
require('./routes/qtls-and-set')(router)
