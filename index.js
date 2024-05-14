

window.addEventListener('load', function () {
    
  

function checkInput() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username !== "" && password !== "") {
        window.location.href = 'home.html';
    } else {
        alert("Vul alstublieft zowel gebruikersnaam als wachtwoord in voordat u doorgaat.");
    }
}});