function getEmail() {
    var x = document.getElementById("myEmail").value;
    document.getElementById("email").innerHTML = x;
}

console.log(getEmail())