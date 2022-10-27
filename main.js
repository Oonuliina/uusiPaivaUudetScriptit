let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

var listOfDos = document.createElement('ul');
    toDoContainer.appendChild(listOfDos); 
   
/* var tehty = []; */

addToDoButton.addEventListener('click', function() {
    var paragraph = document.createElement('li');
    paragraph.innerText = inputField.value;
    var pituus = paragraph.innerText.length;

    if (pituus < 2) {
        window.alert("Use more than one letter to express yourself <3");
        inputField.style.borderColor = "red";
    } else {
        listOfDos.appendChild(paragraph);
        inputField.value = "";
        inputField.style.borderColor = ""; 
    }
    
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
    })

    paragraph.addEventListener('dblclick', function() {
        listOfDos.removeChild(paragraph);
    }); 

/* 
    var tekstitys = JSON.stringify(listOfDos);
    var varasto = localStorage.setItem(bucket, tekstitys);   */
    
/*     tehty.appendChild(paragraph);
    localStorage.setItem("tehty", JSON.stringify(tehty)); */

});

