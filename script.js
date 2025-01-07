const inputContainers = document.querySelectorAll('.main-right-bottom-inner');
const inputs = document.querySelectorAll('.main-right-bottom-inner-input');
const inputsSvgs = document.querySelectorAll('.main-right-bottom-inner-svg');
const inputParagraphs = document.querySelectorAll('.main-right-bottom-input-paragraph');
const nameInput = document.getElementById('nameInput');
const lastNameInput = document.getElementById('lastNameInput');
const emailAddressInput = document.getElementById('emailAddressInput');
const passwordInput = document.getElementById('passwordInput');
const submitButton = document.getElementById('submitButton');
const emptyErrorMessagesData = ['First Name cannot be empty','Last Name cannot be empty','Email Address cannot be empty','Password cannot be empty'];

// SUBMIT THE FORM

function submitTheForm(e) {
    const errorMessages = [];

    for (let i = 0; i < inputContainers.length; i++) {
        if (inputs[i].value === '') {
            errorMessages.push(emptyErrorMessagesData[i]);
            inputContainers[i].style.border = '1px solid red';
            inputsSvgs[i].style.display = 'unset';
            inputParagraphs[i].textContent = emptyErrorMessagesData[i];
        } else {
            inputContainers[i].style.border = '1px solid hsl(0, 0%, 68%)';
            inputsSvgs[i].style.display = 'none';
            inputParagraphs[i].textContent = '';
        };
    };

    //
    if (errorMessages.length === 0) {

    } else {
        e.preventDefault();
    };
};

// INITIALIZE BUTTON
submitButton.addEventListener('click', submitTheForm);