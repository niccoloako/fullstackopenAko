function saveNote(){

    let note = document.getElementById("inputNote").value;
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(note));
    ul.appendChild(li);

   
}
const notes = [
    {
      content: 'HTML is easy',
      date: new Date('2019-05-23T17:30:31.098Z'),
    },
    {
      content: 'Browser can execute only Javascript',
      date: new Date('2019-05-23T18:39:34.091Z'),
    },
    {
      content: 'Most important methods of HTTP-protocol are GET and POST',
      date: new Date('2019-05-23T19:20:14.298Z'),
    },
  ]
debugger;
  document.getElementById('formNotes').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var formData = new FormData(this); 

    var xhr = new XMLHttpRequest(); 
    xhr.open('POST', '/new_note', true); 


    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {

        let note = document.getElementById("inputNote").value;
        let ul = document.getElementById("list");
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(note));
        ul.appendChild(li);
      } else {

        console.error('Request failed with status ' + xhr.status);
      }
    };


    xhr.onerror = function() {
      console.error('Request failed');
    };


    xhr.send(formData);
  });