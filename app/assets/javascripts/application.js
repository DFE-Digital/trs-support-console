//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here
    
})

import accessibleAutocomplete from 'accessible-autocomplete';

// Sample data (e.g., list of countries)
const countries = ['United Kingdom', 'United States', 'Canada', 'Australia']

// Initialize the autocomplete on the specified container
accessibleAutocomplete({
  element: document.querySelector('#autocomplete-container'),
  id: 'autocomplete-input',  // Sets the id of the generated input element
  source: countries
})

document.addEventListener('DOMContentLoaded', () => {
  const labels = document.querySelectorAll('.govuk-radios__label');
  labels.forEach((label) => {
    const labelWidth = label.offsetWidth; // Get the width of the label
    label.style.setProperty('--label-width', `${labelWidth}px`);
  });
});