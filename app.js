/* Fill your code*/
function formValidate() {
    var name = document.getElementById("name").value;
    var password = document.getElementById("pwd").value;
    var email = document.getElementById("email").value;
    if (name == null) {
        alert("enter your name.");
        return false;
    }
    if (email == null || email == "") {
        alert("Please, enter your email.");
        return true;
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    } else if (name.length < 7 || name.length > 16) {
        alert("username cannot be less than 8 characters and greater than 15 characters");
    } else if (hasWhiteSpace(name) == true) {
        alert("username cannot contain white spaces");
    }
    ValidateEmail(email);
    ValidatePswd(password);
}

function hasWhiteSpace(s) {
    return /\s/g.test(s);
}
// Progression 1 
// Check username
// create a function called as checkUserName()
// username should not be empty
// username should be a minimum of 8 characters and above 
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails
var name="";
var password = document.getElementById("pwd").value;
var email = document.getElementById("email").value;
function checkUserName(){
    name = document.getElementById("name").value;
    if(username==''|| username==null){
        username.innerHTML ="username should not be empty";
        return false;
    }
    if ((username.length < 5) || (username.length > 15)){
        username.innerHTML ="length of username must be 8 to 15 Characters";
        return false;
    }
    if(!isNaN(username)){
        username.innerHTML ="username should contain Only Characters";
        return false;
    }
    var space= /\s/;
    if (space.test(username)) {
        username.innerHTML ='username cannot contain whitespace';
        return false;
    }
    var specialchar= /[$&+,:;=?@#|'<>.-^*()%!]/;
    if(username.test(specialchar)){
    username.innerHTML ='username cannot contain whitespace';
    return false;
    }
    return true;
}
// Progression 2
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise
function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    alert("Invalid Email!")
    return (false)
}
// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false
function ValidatePswd(password) {
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (password.match(passw))
        alert("Password is validated");
    else
        alert("password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]")
}



