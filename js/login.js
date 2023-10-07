
//////////////////Task


//user can enter username and password
//when login button pressed, if username and password matched with dbUserName and dbPassword alert login success !
//and end the application
//if username or password mismatched alert login failed, try again...
//clear text inputs (usename and password)
//a user can enter incorrect username and password for 5 time
//on 5th time alert account locked
//end the appication

var attempts = 0;
var dbUsername = "ranga";
var dbPassword = 12345;


function login() {
    var userName = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (userName == dbUsername && password == dbPassword) {
        alert("Login Sucses")
        window.location.replace("index.html");
    } else {
        attempts++
        if (attempts<5) {
            document.getElementById("username").value
            document.getElementById("password").value
            //alert("Login Fail")
           
            document.getElementById("loginError").innerHTML = "Username or Password is not Correct";
        }else{
            alert("You have reached 5 attempts and your account is blocked")
        }

    }
}


