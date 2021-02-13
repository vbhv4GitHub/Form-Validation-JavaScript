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
    }
});

//Handling submit button
let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();

    if (validEmail && validPhoneNumber && validUserName) {
        let alert = document.getElementById('alert');
        alert.classList.add("show");
    }
    else {
        let alert2 = document.getElementById('alert2');
        alert2.classList.add("show");
    }
});

