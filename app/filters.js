//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

// Add your filters here

addFilter("find", function (id, arr) {
    return arr.find((element) => element.trn == id);
  });


addFilter('statusColour', potentialRecordMatch => {
  switch(potentialRecordMatch) {
    case 'Yes':
      return 'govuk-tag--red'
    case 'No':
      return 'govuk-tag--blue'
    case 'Not Applicable':
      return 'govuk-tag--yellow'
  }
})