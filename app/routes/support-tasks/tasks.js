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

}