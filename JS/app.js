// Creating variable to add event listners to each of them.
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

// Variable to be true while submission
let validUserName = false;
let validEmail = false;
let validPhoneNumber = false;

// => Function to validate any data: Takes two parameters --> Regular Expression and documentID variable.
const validate = function (docID, regex) {
    let string = docID.value;
    if (regex.test(string)) {
        docID.classList.remove('is-invalid');
        return true;
    }
    else {
        docID.classList.add('is-invalid');
        return false;
    }
}

// Adding event listners
username.addEventListener('blur', () => {
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,14}$/;
    validUserName = validate(username, regex); // Calling validate function for the username verification.

});

email.addEventListener('blur', () => {
    let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    validEmail = validate(email, regex);
});

phone.addEventListener('blur', () => {
    let regex = /^\d{10}$/;
    validPhoneNumber = validate(phone, regex);
});

//Handling submit button
let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    let alertBox = document.getElementById('alertBox');

    if (validEmail && validPhoneNumber && validUserName) {
        alertBox.innerHTML = `<div id="alert" class="alert alert-success alert-dismissible fade show" role="alert">
                                <strong>Congrats!!!</strong> Your form has been validated and submitted succesfully.
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>`;
    }
    else {
        alertBox.innerHTML = `<div id="alert2" class="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>Error!!!</strong> Please enter valid informations before submitting your form.
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>`;
    }
});

