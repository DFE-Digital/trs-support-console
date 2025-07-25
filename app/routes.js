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

require('./routes/support-tasks/matching/match-from-trn-request')(router)
require('./routes/support-tasks/apis/match-from-api')(router)
require('./routes/support-tasks/non-matching/add')(router)
require('./routes/support-tasks/deactivate/add')(router)
require('./routes/support-tasks/create-record/manual/add')(router)



require('./routes/support-tasks/tasks')(router)

require('./routes/change-personal-details/edit')(router)



// GENERAL ROUTES
router.get('/cancel-and-return', (req, res) => {
    req.session.data = {}
    res.redirect('/general')
})

router.post('/find-teacher', (req, res) => {
  let data = req.session.data
  console.log('findRecord:', data.findRecord) // Log the value of findRecord

  if (data.findRecord == "John Doe") {
      res.redirect('/find-teacher')
  }
	else if (data.findRecord == "439353" || data.findRecord == "339353") {
		res.redirect('/general')
	}		
  else if (data.findRecord == "494612" || data.findRecord == "553092" || data.findRecord == "571028" ||data.findRecord == "752394") {
      res.redirect('/induction')
  }	
  else if (data.findRecord == "987654") {
    res.redirect('/personal-details')
 	}
  else {
      res.redirect('/record-not-found')
  }
})



////// INDUCTION ROUTES
require('./routes/induction/induction-route')(router)


////////// Show a single teacher (John Doe) on deactivate journey //////////

router.get('/deactivate/show/:recordId', (req, res) => {
  let record = req.session.data.deactivate.find(record => record.id === req.params.recordId)
  res.render('support-tasks/deactivate/show', { record })
})


router.post('/select-role', function (req, res) {
  req.session.data.roleSelect = req.body.roleSelect
  res.redirect('navigation/support-tasks-index')
}
)

router.post('/check', (req, res) => {
  const data = {
    changeRecordReason: req.body.changeRecordReason,
    moreDetails: req.body.moreDetails,
    evidenceChangeReasons: req.body.evidenceChangeReasons,
    evidenceChangeReasonsFile: req.file ? req.file.originalname : null,
  };

  res.render('pii/check', { data });
});


/// get a TRN design revisions: reject/accept route
router.post('/accept-reject', (req, res) => {
  const userChoice = req.body.acceptRejectRequest;

  if (userChoice === 'reject') {
    // Redirect to the TRN request list page
    res.redirect('/support-tasks/create-record/from-trn-request/get-a-trn/reject-reasons');
  } 
  else if (userChoice === 'accept') {
    res.redirect('/support-tasks/create-record/from-trn-request/get-a-trn/compare');
  } else {
    res.redirect('/support-tasks/create-record/from-trn-request/get-a-trn/accept-reject'); // fallback
  }
});

/// navigation search results top bar

router.get('/navigation/search-results', function (req, res) {
  const searchQuery = req.query.q // This gets the "q" from the form
  res.render('navigation/search-results', { searchQuery })
})


router.get('/navigation/support-tasks-index', function (req, res) {
  res.render('/navigation/support-tasks-index')
})

router.get('/navigation/permissions-overview', function (req, res) {
  res.render('/navigation/permissions-overview')
})
