// Creating variable to add event listners to each of them.
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

// Adding event listners
username.addEventListener('blur', () => {
    // console.log("Name is blurred.");
    //validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,14}$/;
    let str = username.value;
    console.log(regex, str);
    if(regex.test(str)) {
        // console.log("It matched.");
        username.classList.remove('is-invalid');
    }
    else{
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
    if(regex.test(str)) {
        email.classList.remove('is-invalid');
    }
    else{
        email.classList.add('is-invalid');
    }
});

phone.addEventListener('blur', () => {
    let regex = /^\d{10}$/;
    let str = phone.value;
    console.log(regex, str);
    if(regex.test(str)) {
        phone.classList.remove('is-invalid');
    }
    else{
        phone.classList.add('is-invalid');
    }
});

