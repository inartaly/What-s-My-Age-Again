// Get references to the elements
const birthdateInput = document.getElementById('birthdate');
const saveDateButton = document.getElementById('saveDate');
const ageLabel = document.getElementById('ageLabel');

// Save birth date to localStorage
saveDateButton.addEventListener('click', () => {
  const birthdate = birthdateInput.value;
  if (birthdate) {
    localStorage.setItem('birthdate', birthdate);
    calculateAndDisplayAge(birthdate);
  } else {
    alert('Please enter a valid birth date.');
  }
});

// Calculate and display age
function calculateAndDisplayAge(birthdate) {
  const birthDate = new Date(birthdate);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const isBirthdayPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
  if (!isBirthdayPassed) {
    age -= 1;
  }
  ageLabel.textContent = `Your age: ${age} years`;
}

// On page load, check if birthdate exists
window.onload = () => {
  const savedBirthdate = localStorage.getItem('birthdate');
  if (savedBirthdate) {
    calculateAndDisplayAge(savedBirthdate);
  }
};
