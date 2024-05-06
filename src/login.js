import './style.css';
import { getDropDownOptions } from './drop-down';
import { initDropdown } from 'drop-down-init';

const dropDownOptions = getDropDownOptions();
initDropdown(dropDownOptions);

const loginForm = document.getElementById('login-form');

const emailInput = document.getElementById('mail');
const passwordInput = document.getElementById('password');
const passwordConfirmInput = document.getElementById('confirm-password');
const countryInput = document.getElementById('country');
const zipInput = document.getElementById('zip');

const inputList = [
  emailInput,
  passwordInput,
  passwordConfirmInput,
  countryInput,
  zipInput,
];

const loginButton = document.getElementById('login-button');

// error message
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const passwordConfirmError = document.getElementById('confirm-error');
const countryError = document.getElementById('country-error');
const zipError = document.getElementById('zip-error');

loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (!validateForm()) {
    console.log('Invalid inputs detected, please try again.');
  } else {
    console.log('Nice job!');
    loginForm.reset();
  }
});

emailInput.addEventListener('input', () => {
  if (!emailInput.checkValidity()) {
    emailError.textContent = 'Please enter a valid email.';
  } else {
    emailError.textContent = '';
  }
});

passwordInput.addEventListener('input', () => {
  if (!passwordInput.checkValidity()) {
    passwordError.textContent = 'Please enter a valid password.';
  } else {
    passwordError.textContent = '';
  }
});

passwordConfirmInput.addEventListener('input', () => {
  if (passwordConfirmInput.value !== passwordInput.value) {
    passwordConfirmError.textContent = 'Passwords must match.';
  } else {
    passwordConfirmError.textContent = '';
  }
});

zipInput.addEventListener('input', () => {
  if (!zipInput.checkValidity()) {
    zipError.textContent = 'Please enter a valid 5-digit zip code.';
  } else {
    zipError.textContent = '';
  }
});

// check validity of all inputs
function validateForm() {
  for (let input of inputList) {
    if (!input.checkValidity() && input.value === '') {
      countryError.textContent = 'Must select a country';
      return false;
    } else {
      countryError.textContent = '';
    }
    if (!input.checkValidity()) {
      return false;
    }
  }
  alert('Nice job!');
  return true;
}
