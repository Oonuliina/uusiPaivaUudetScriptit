let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
inputField.maxLength = "40";

var listOfDos = document.createElement('ul');
    toDoContainer.appendChild(listOfDos); 
   
var tehty = [];

addToDoButton.addEventListener('click', function() {

    var paragraph = document.createElement('li');
    paragraph.classList.add("task");
    var deleteTask = document.createElement('button');
    deleteTask.classList.add("delete");
    paragraph.innerText = inputField.value;
    deleteTask.innerHTML = '<img src="roskis.png"/>';
    
    var pituus = paragraph.innerText.length;
    if (pituus < 2) {
        window.alert("Use more than one letter to express yourself <3");
        inputField.style.border = "1px solid red";
    } else {
        listOfDos.appendChild(paragraph);
        paragraph.appendChild(deleteTask);

        var teksti = JSON.stringify(tehty);
        tehty.push(paragraph.innerText);
        var varasto = localStorage.setItem("bucket", tehty);//Tähän localStorage

        inputField.style = "#inputField";
        inputField.value = "";
        
    }
    
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
        paragraph.style.opacity = "0.5";
    })

    paragraph.addEventListener('dblclick', function() {
        listOfDos.removeChild(paragraph);
        var tekstitys = JSON.stringify(listOfDos);
        var varasto = localStorage.setItem("bucket", tekstitys);
    

    }); 

/* 
    
       */
    
/*     tehty.appendChild(paragraph);
    localStorage.setItem("tehty", JSON.stringify(tehty)); */

});

