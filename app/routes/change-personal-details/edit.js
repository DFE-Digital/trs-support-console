const personData = require('../../data/person.json');

module.exports = (router) => {
  router.post('/personal-details/details', (req, res) => {
    // Merge form data with existing person data
    const updatedData = {
      ...personData[0],
      firstName: req.body.personalDetailsFirstName,
      middleName: req.body.personalDetailsMiddleName,
      lastName: req.body.personalDetailsLastName,
      dateOfBirthDay: req.body.personalDetailsDateOfBirth?.day,
      dateOfBirthMonth: req.body.personalDetailsDateOfBirth?.month,
      dateOfBirthYear: req.body.personalDetailsDateOfBirth?.year,
      email: req.body.personalDetailsEmail,
      mobile: req.body.personalDetailsPhoneNumber,
      nationalInsurance: req.body.personalDetailsNationalInsuranceNumber,
      gender: req.body.personalDetailsSex,
      createRecordReason: req.body.createRecordReason,
      evidenceFile: req.body.evidenceFile,
    };

    req.session.updatedPersonData = updatedData; // Store updated data in session
    res.redirect('/personal-details/check');
		console.log(updatedData)
  })

	
  router.post('/personal-details/check', (req, res) => {
		// Merge form data with existing person data
    const updatedData = {
      ...personData[0],
      firstName: req.body.personalDetailsFirstName,
      middleName: req.body.personalDetailsMiddleName,
      lastName: req.body.personalDetailsLastName,
      dateOfBirthDay: req.body.personalDetailsDateOfBirth?.day,
      dateOfBirthMonth: req.body.personalDetailsDateOfBirth?.month,
      dateOfBirthYear: req.body.personalDetailsDateOfBirth?.year,
      email: req.body.personalDetailsEmail,
      mobile: req.body.personalDetailsPhoneNumber,
      nationalInsurance: req.body.personalDetailsNationalInsuranceNumber,
      gender: req.body.personalDetailsSex,
      createRecordReason: req.body.createRecordReason,
      evidenceFile: req.body.evidenceFile,
    }
		req.session.updatedPersonData = updatedData; // Store updated data in session
    res.redirect('/personal-details/index')
  })

  
}