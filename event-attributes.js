function checkUsername() {
    var elMsg = document.getElementById('feedback');
    var elUserName = document.getElementById('username');
    if ( elUserName.value.length <5) {
        elMsg.textContent = 'Username must be 5 characters of more ';
    } else {
        elMsg.textContent = '';
    }
}