var hotel = new Object();

hotel.name = 'Park';
hotel.rooms = 120;
hotel.bookes = 77;
hotel.checkAvailability = function () {
    return this.rooms -this.booked;
};

var elName =document.getElementById('hotelName');
elName.textContent =hotel.name;

var elRoom =document.getElementById('rooms');
elRoom.textContent = hotel.checkAvailability();