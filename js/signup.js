let firstName = document.getElementById("first_name");
let lastName = document.getElementById("last_name");
let email = document.getElementById("user_email");
let phoneNumber = document.getElementById("phone_num");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm_password");

const createAccountButton = document.querySelector(".button");

createAccountButton.addEventListener('click', () => {
    clearErrorMessage();
    checkPassword(); // Checks if password are matching
    checkInputs(); // Checks if inputs are empty
});

function checkInputs() {
    let firstNameValue = firstName.value;
    let lastNameValue = lastName.value;
    let emailValue = email.value;
    let phoneNumberValue = phoneNumber.value;
    let passwordValue = password.value;
    let confirmPasswordValue = confirmPassword.value;
    
    if (firstNameValue === '' || lastNameValue === '' || emailValue === '' || phoneNumberValue === '' || passwordValue === '' || confirmPasswordValue === '') {
        displayErrorMessage('* Please fill out all inputs');
    }
    else {
        clearErrorMessage();
    };

    // If empty, give error class to the input
    if (firstNameValue === '') {
        addErrorClass(firstName);
    } 
    else {
        removeErrorClass(firstName);
    };

    if (lastNameValue === '') {
        addErrorClass(lastName);
    } 
    else {
        removeErrorClass(lastName);
    };

    if (emailValue === '') {
        addErrorClass(email);
    } 
    else {
        removeErrorClass(email);
    };

    if (phoneNumberValue === '') {
        addErrorClass(phoneNumber);
    } 
    else {
        removeErrorClass(phoneNumber);
    };

    if (passwordValue === '') {
        addErrorClass(password);
    } 
    else {
        removeErrorClass(password);
    };
};


function checkPassword() {
    let passwordValue = password.value;
    let confirmPasswordValue = confirmPassword.value;

    if (passwordValue !== confirmPasswordValue) {
        displayErrorMessage('* Passwords do not match');

        addErrorClass(password);
        addErrorClass(confirmPassword);
    }
    else {
        clearErrorMessage(password);
        removeErrorClass(confirmPassword);
    };
};

function displayErrorMessage(message) {
    console.log(message)
    let errorMessage = document.createElement('p');

    errorMessage.textContent = message;

    errorMessage.classList.add('error-message');

    document.getElementById('error-container').appendChild(errorMessage);
};

function clearErrorMessage() {

    let errorContainer = document.getElementById('error-container');

    while (errorContainer.firstChild) {
        errorContainer.removeChild(errorContainer.firstChild);
    };
};

function removeErrorClass(element) {
    element.classList.remove('error');
};

function addErrorClass(element) {
    element.classList.add('error');
};