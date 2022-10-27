let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

var listOfDos = document.createElement('ul');
    toDoContainer.appendChild(listOfDos);
/* var tehty = []; */

addToDoButton.addEventListener('click', function(){

    var paragraph = document.createElement('li');
    paragraph.innerText = inputField.value;
    var pituus = paragraph.innerText.length;

    if (pituus.lenght<2) {
        alert("Use more letters to express yourself<3");
    }

    listOfDos.appendChild(paragraph);



    inputField.value = "";
    
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
    })

    paragraph.addEventListener('dblclick', function() {
        listOfDos.removeChild(paragraph);
    })

    
/*     tehty.appendChild(paragraph);
    localStorage.setItem("tehty", JSON.stringify(tehty)); */

});