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
    hideInputFields();  // Hide input and button after saving
  } else {
    alert('Please enter a valid birth date.');
  }
});

function hideInputFields() {
  birthdateInput.style.display = 'none';
  saveDateButton.style.display = 'none';
}

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
  ageLabel.textContent = `You are ${age} years old...`;
}

// On page load, check if birthdate exists
window.onload = () => {
  const savedBirthdate = localStorage.getItem('birthdate');
  if (savedBirthdate) {
    calculateAndDisplayAge(savedBirthdate);
    hideInputFields(); // Hide input fields if birthdate exists
  }
};
