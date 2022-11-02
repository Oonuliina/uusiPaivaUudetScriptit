let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
//let deletedContainer = document.getElementById('toDoDelContainer');
let inputField = document.getElementById('inputField');
inputField.maxLength = "40";

let indeksi = 0;
let kerta = 0;
let tehty = [];

// var deletedTasks = [];


var listOfDos = document.createElement('ul');
    toDoContainer.appendChild(listOfDos);
    
/* var listOfDosDeleted = document.createElement('ul');
    deletedContainer.appendChild(listOfDosDeleted);    
    */

addToDoButton.addEventListener('click', function() {

    var paragraph = document.createElement('li');
    paragraph.classList.add("task");
    paragraph.setAttribute('id', "task"+kerta);
    paragraph.innerText = inputField.value;

    var buttons = document.createElement('div');
    buttons.classList.add("buttons")

    var doneTask = document.createElement('button');
    doneTask.classList.add('buttons');
    doneTask.innerHTML = '<img src="done.png"/>';

    var deleteTask = document.createElement('button');
    deleteTask.classList.add("buttons");
    deleteTask.innerHTML = '<img src="roskis.png"/>';


    var pituus = paragraph.innerText.length;
    if (pituus < 2) {
        window.alert("Use more than one letter to express yourself <3");
        inputField.style.border = "1px solid red";
    } else {
        listOfDos.appendChild(paragraph);
        paragraph.appendChild(buttons);
        buttons.appendChild(doneTask);
        buttons.appendChild(deleteTask);

        let näyte = document.getElementById('task'+kerta).innerText;
        let arvo = JSON.stringify(näyte);
        tehty.push(arvo);
        kerta = kerta+1

        var varasto = localStorage.setItem(indeksi, arvo);

        console.log(indeksi);
        indeksi = indeksi+1;//Tähän localStorage

        inputField.style = "#inputField";
        inputField.value = "";   
    }
    
    doneTask.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
        paragraph.style.opacity = "0.5";
    })

    deleteTask.addEventListener('click', function() {
        var varasto = localStorage.setItem("bucket", paragraph.innerText);

        listOfDos.removeChild(paragraph);

        localStorage.setItem("trashCan", paragraph.innerText);

        päivitys()

        function päivitys() {
            laskuri = 0

        let varmistus = localStorage.getItem("bucket");
        /* varmistus = varmistus.substring(1, varmistus.length-1) */
        varmistus = '"'+varmistus+'"'

        for (let i = 0; i < indeksi; i++) {
            console.log(varmistus)
            let tarkistus = localStorage.getItem(i);

            if (varmistus != tarkistus) {
                console.log(tarkistus+i)
                localStorage.setItem(laskuri, tarkistus);
                laskuri = laskuri+1
            } else {
                localStorage.removeItem(laskuri, tarkistus)
                indeksi = tehty.length
                i = i+1
            }
        }    

        localStorage.removeItem('bucket');

      /*   deletedTasks.push(paragraph.innerText); */

        
        /*         
        var deletedParagraph = document.createElement('li');
        deletedParagraph.innerHTML = deletedTasks[0].value;
        deleteTask.classList.add('task');
        listOfDosDeleted.appendChild(deletedParagraph); */
        

    }}); 


});