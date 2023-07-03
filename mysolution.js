const emailField = document.getElementById('input_field');
const errorIcon = document.getElementById('icon-error');
const errorMessage = document.getElementById('error');
const button = document.getElementById('submit');
let mailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

button.addEventListener('click', validateMail)

function validateMail(){
    if(emailField.value.match(mailValid)){
        console.log('match')
        emailField.style.border = '1px solid var(---Dark-Grayish-Red)';
        errorIcon.style.visibility = 'hidden';
        errorMessage.style.visibility = 'hidden';
        return true
    }else if(emailField.value == ''){
        emailField.style.border = '2px solid hsl(0, 93%, 68%)';
        errorIcon.style.visibility = 'visible';
        errorMessage.style.visibility = 'visible';
        return false
    }else{
        emailField.style.border = '2px solid hsl(0, 93%, 68%)';
        errorIcon.style.visibility = 'visible';
        errorMessage.style.visibility = 'visible';
        return false
    }
}

