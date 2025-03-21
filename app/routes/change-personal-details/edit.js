const personData = require('../../data/person.json');

module.exports = (router) => {
  router.post('/personal-details/details', (req, res) => {
    // Merge form data with existing person data
    const updatedData = {
      ...personData[0],
      firstName: req.body.personalDetailsFirstName || personData[0].firstName,
      middleName: req.body.personalDetailsMiddleName || personData[0].middleName,
      lastName: req.body.personalDetailsLastName || personData[0].lastName,
      dateOfBirthDay: req.body.personalDetailsDateOfBirth?.day || personData[0].dateOfBirthDay,
      dateOfBirthMonth: req.body.personalDetailsDateOfBirth?.month || personData[0].dateOfBirthMonth,
      dateOfBirthYear: req.body.personalDetailsDateOfBirth?.year || personData[0].dateOfBirthYear,
      email: req.body.personalDetailsEmail || personData[0].email,
      mobile: req.body.personalDetailsPhoneNumber || personData[0].mobile,
      nationalInsurance: req.body.personalDetailsNationalInsuranceNumber || personData[0].nationalInsurance,
      gender: req.body.personalDetailsSex || personData[0].gender,
      createRecordReason: req.body.createRecordReason || null,
      evidenceFile: req.body.evidenceFile || null,
    };

    req.session.updatedPersonData = updatedData; // Store updated data in session
    res.redirect('/personal-details/check');
  });

  router.get('/personal-details/check', (req, res) => {
    const updatedData = req.session.updatedPersonData || personData[0]
    res.render('personal-details/index', { updatedData })
  })

  router.get('/personal-details/check', (req, res) => {
    const data = req.session.updatedPersonData || personData[0]
    res.render('personal-details/check', { data })
  })
}