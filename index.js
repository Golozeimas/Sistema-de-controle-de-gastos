function ValidateFields(){
    const emailValid = IsEmailValid();
    document.getElementById("recovery-password").disabled = !emailValid;

    const passwordValid = IsPasswordValid();
    document.getElementById("login-button").disabled = !emailValid || !passwordValid;
}
function IsEmailValid(){
    const email = document.getElementById("email").value;
    if (!email){
        return false;
    }
    return ValidateEmail(email);
}
function IsPasswordValid(){
    const password = document.getElementById("password").value;
    if (!password){
        return false;
    }
    return true;
}
function ValidateEmail (email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}