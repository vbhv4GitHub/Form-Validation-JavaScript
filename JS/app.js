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
    console.log("Email is blurred.");
    //validate name here
});

phone.addEventListener('blur', () => {
    console.log("Phone number is blurred.");
    //validate name here
});

