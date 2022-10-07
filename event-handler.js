function checkUserName() {

var elMsg = document.getElementById('feedback');
if ( this.value.length < 5 ) {
    elMsg.textContent = 'Username must be 5 characters of more ';
} else {
    elMsg.textContent = '';
}

}