function saveUserInfo(){
    var userName = document.getElementById("usr").value;
    var passW = document.getElementById("pwd").value;
    var emailA = document.getElementById("email").value;

    console.log(userName + passW + emailA);

    if(userName == "lol" && passW == "lol"){
        alert("Sign up successfull")
    }

}