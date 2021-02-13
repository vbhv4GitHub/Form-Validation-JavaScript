// Creating variable to add event listners to each of them.
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

// Variable to be true while submission
let validUserName = false;
let validEmail = false;
let validPhoneNumber = false;

// Adding event listners
username.addEventListener('blur', () => {
    // console.log("Name is blurred.");
    //validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,14}$/;
    let str = username.value;
    console.log(regex, str);
    if (regex.test(str)) {
        // console.log("It matched.");
        username.classList.remove('is-invalid');
        validUserName = true;
    }
    else {
        // console.log("No match.");
        username.classList.add('is-invalid');
        validUserName = false;
    }
});

email.addEventListener('blur', () => {
    // console.log("Email is blurred.");
    //validate email here
    let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        email.classList.add('is-invalid');
        validEmail = false;

    }
});

phone.addEventListener('blur', () => {
    let regex = /^\d{10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        phone.classList.remove('is-invalid');
        validPhoneNumber = true;
    }
    else {
        phone.classList.add('is-invalid');
        validPhoneNumber = false;
    }
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

