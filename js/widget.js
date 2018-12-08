//step 1: create a XMLHttpRequest
var xhr = new XMLHttpRequest();
//step 2: create a callback function
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
       //convert json data into javascript array of objects using JSON.parse
       var employees = JSON.parse(xhr.responseText);
       var  statusHTML = '<ul class= "bulleted">';
       //loop through array
       for (var i=0; i<employees.length; i += 1) {
           if (employees[i].inoffice === true) {
               statusHTML += '<li class="in">';
           } else {
               statusHTML += '<li class="out">';
           }
          statusHTML += employees[i].name;
          statusHTML += '</li>'; 
       }
       statusHTML += '</ul>';
       document.getElementById('employeeList').innerHTML = statusHTML;
    }
};
//step 3: open a request
xhr.open('GET', 'data/employees.json');
//step 4: send the request
xhr.send();


//making a new widget to see if conference rooms are available, if they are available they will light green, if not they will light red
//step 1: create a XMLHttpRequest
var conference = new XMLHttpRequest();
//step 2: create a callback function
conference.onreadystatechange = function () {
    if (conference.readyState === 4) {
       //convert json data into javascript array of objects using JSON.parse
       var employeeRooms = JSON.parse(conference.responseText);
       var  statusRoom = '<ul class= "rooms">';
       //loop through array
       for (var i=0; i<employeeRooms.length; i += 1) {
           if (employeeRooms[i].available === true) {
            statusRoom += '<li class="empty">';
           } else {
            statusRoom += '<li class="full">';
           }
           statusRoom += employeeRooms[i].room;
           statusRoom += '</li>'; 
       }
       statusRoom += '</ul>';
       document.getElementById('roomList').innerHTML = statusRoom;
    }
};
//step 3: open a request
conference.open('GET', '../data/rooms.json');
//step 4: send the request
conference.send();