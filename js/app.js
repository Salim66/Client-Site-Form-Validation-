//Selector
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Event Listener
form.addEventListener('submit', e => {
    e.preventDefault();
    //Get Form Value
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ''){
        //Show Error
        //Add Error Class
        setErrorFor(username, 'Username cannot be blank !');
    }else{
        setSuccessFor(username);
    }

    if(emailValue === ''){
        //Show Error
        //Add Error Message
        setErrorFor(email, 'Email cannot be blank !');
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is nat valid !');
    }else{
        setSuccessFor(email);
    }

    if(passwordValue === ''){
        //Show Error
        //Add Error Class
        setErrorFor(password, 'Password cannot be blank !')
    }else{
        //add success class
        setSuccessFor(password)
    }

    if(password2Value === ''){
        //Show Error
        //add error class
        setErrorFor(password2, 'Password2 cannot be blank !');
    }else if(passwordValue !== password2Value){
        //Show Error
        //add error class
        setErrorFor(password2, 'Password2 does not match !');
    }else{
        setSuccessFor(password2);
    }

    //Show success form

});

//Function
function setErrorFor(input, message){
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}


function setSuccessFor(input){
    const formControl = input.parentElement; // .form-control
    //add error class
    formControl.className = 'form-control success';
}

function isEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}