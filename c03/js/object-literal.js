var hotel = {
    name :'quay';
    room : 40;
    booked : 25;
    checkValidity : function () {
         return this.room - this.booked;
    }
};
var elName =document.getElementById('hotelName');
elName.textContent = hotel.name;
var elRooms = hotel.checkValidity('room');
elRooms.textContent = hotel.checkValidity();
