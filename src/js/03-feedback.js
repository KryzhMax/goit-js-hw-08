// Refs

const formRef = document.querySelector('.feedback-form');
const throttle = require('lodash.throttle');

const KEY = 'feedback-form-state';

let storage = {
  email: '',
  message: '',
};

// Functions

getLocalStorageData(KEY);
function getLocalStorageData(KEY) {
  const jsonData = JSON.parse(localStorage.getItem(KEY));
  if (!jsonData) return;
  for (let key in jsonData) {
    formRef.elements[key].value = jsonData[key];
  }
}

function onFormInput(event) {
  storage[event.target.name] = event.target.value.trim();
  localStorage.setItem(KEY, JSON.stringify(storage));
}

function onFormSubmit(event) {
  const { email, message } = event.currentTarget.elements;
  const formData = {
    email: email.value,
    message: message.value,
  };
  event.preventDefault();
  formRef.reset();
  localStorage.removeItem(KEY);

  console.log('This is form: ', formData);
}
// Listeners

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);

// mango@mail.com
