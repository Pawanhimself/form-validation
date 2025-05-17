var isError = false;

//function to check email is valid or not
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}  

//function to check password is strong or not
function isStrongPassword(password) {
    // At least one lowercase, one uppercase, one digit, one special char, 8+ characters
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
}

$('button').click(function(){

    let isValidEmail    = isEmail( $('#email').val());
    let phoneno         = $('#phoneno').val().length;
    let password        = $('#password').val();
    let confirmPassword = $('#confirm-password').val();

    if( !isValidEmail ){
        $('#emailError').html("Email address is invalid");
        isError = true;
    }
    
    if( phoneno != 10 ){
        $('#numberError').html("Enter a valid 10 digit mobile number");
        isError = true;
    }

    if( ! isStrongPassword( password )){
        $('#passwordError').html("Password must contain uppercase, lowercase, number, special character and be at least 8 characters.");
        isError = true;
    }
    else if( password != confirmPassword ){
        $('#passwordError').html("Passwords do not match.");
        isError = true;
    }

    if( !isError ){
        $('#successMessage').html("User registered successfully!");
    }
});

//hiding all error when user enter the value to input field
$('input').on('input', function() {
        $('span').html(' ');
        isError=false;
});

//this is used to hide and show the password entered by the user
$('#hideShowPassword').click(function(){
    if( $('#password').attr('type') == 'password' && $('#confirm-password').attr('type')  == 'password')
    {
        $('#password').attr('type','text');
        $('#confirm-password').attr('type','text');
    }else{
        $('#password').attr('type','password');
        $('#confirm-password').attr('type','password');
    }
});
