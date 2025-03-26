document.addEventListener('DOMContentLoaded', () => {
  const labels = document.querySelectorAll('.govuk-radios__label');
  labels.forEach((label) => {
    const labelWidth = label.offsetWidth; // Get the width of the label
    label.style.setProperty('--label-width', `${labelWidth}px`);
  });
});