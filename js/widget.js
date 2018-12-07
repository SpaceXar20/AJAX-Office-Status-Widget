//step 1: create a XMLHttpRequest
var xhr = new XMLHttpRequest();
//step 2: create a callback function
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
       //convert json data into javascript array of objects using JSON.parse
       var employees = JSON.parse(xhr.responseText);
       var  statusHTML = 'ul class= "bulleted">';
       //loop through array
       for (var i=0; i<employees.length; i =+ 1) {
           
       }
    }
};
//step 3: open a request
xhr.open('GET', 'data/employees.json');
//step 4: send the request
xhr.send();