const _ = require('lodash')

module.exports = (router) => {

  /////////////  Filters   //////////
  router.get('/support-tasks', (req, res) => {
      
    let tasks = req.session.data.tasks 

    let selectedTaskFilters = _.get(req.session.data.filters, 'taskType')
    
    //User has selected a task type filter
    if (_.get(selectedTaskFilters, 'length')) {

      tasks = tasks.filter(task => {
        let matchesTaskType = true

        matchesTaskType = selectedTaskFilters.includes(task.taskType)
        
        return matchesTaskType
      }) 
    }

    res.render('support-tasks/index', {
      tasks
    })
  })


  ////////// get a single task //////////
  router.get('/support-tasks/:taskId', (req, res) => {
		let task = req.session.data.tasks.find(task => task.id === req.params.taskId)
    res.render('/support-tasks/show', { task })
	})

  //// This route is triggered from the button on 'show' page
  router.get('/support-tasks/create-record/from-trn-request/no-match/:taskId/reason', (req, res) => {
    let task = req.session.data.tasks.find(task => task.id === req.params.taskId)
    res.render('support-tasks/create-record/from-trn-request/no-match/reason', { task })
  })

  

  //// THis route posts from the reason page
  router.post('/create-record/from-trn-request/no-match/check', (req, res) => {
    res.redirect('create-record/from-trn-request/no-match/check')
  })


  /////////////  FLASH //////////////
  router.post('/create-record/from-trn-request/no-match/check-handler', (req, res) => {
    req.flash('success', 'New record created with TRN: ')
    
    let data = req.session.data || {}

    // Generate TRN
    const generateTRN = () => Math.floor(100000 + Math.random() * 900000).toString()

    // Store the generated TRN in session data
    data.trn = generateTRN()
    req.session.data = data

    // Redirect to the next page
    res.redirect('/support-tasks')
  })   

}