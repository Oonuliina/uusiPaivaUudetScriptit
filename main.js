let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
inputField.maxLength = "40";
let filterTasks = document.getElementById('filterToDos');


/* let indeksi = 0;
let kerta = 0;
let tehty = [];
 */
var listOfDos = document.createElement('ul');
    listOfDos.classList.add("tasklist");
    toDoContainer.appendChild(listOfDos);

addToDoButton.addEventListener('click', function() {


    var paragraph = document.createElement('li');
    paragraph.classList.add("task");

    /* paragraph.setAttribute('id', "task"+kerta); */

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

        localSave(inputField.value);
        
        /* let näyte = document.getElementById('task'+kerta).innerText;

        let arvo = JSON.stringify(näyte);
        
        kerta = kerta+1

        var varasto = localStorage.setItem(indeksi, arvo);

        tehty.push(arvo);

        console.log(indeksi);

        indeksi = indeksi+1; */

        inputField.style = "#inputField";
        inputField.value = "";
        
    }
    
    doneTask.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
        paragraph.style.opacity = "0.5";
        paragraph.classList.add("done"); 
    })

    deleteTask.addEventListener('click', function() {

        /* localStorage.setItem("bucket", paragraph.innerText);

        localStorage.setItem("trashCan", paragraph.innerText);
        */
        listOfDos.removeChild(paragraph);

        /*päivitys()
        function päivitys() {
        
        laskuri = 0
            
        let varmistus = localStorage.getItem("bucket");
         */
        /* varmistus = varmistus.substring(1, varmistus.length-1) */
        /* varmistus = '"'+varmistus+'"'
 

        for (let i = 0; i < indeksi; i++) {
               
            console.log(i)
            let tarkistus = localStorage.getItem(i);

            if (varmistus != tarkistus) {              
                console.log(varmistus)
                console.log(tarkistus)
                localStorage.setItem(i, tarkistus)    
            } else {
                console.log(varmistus)
                console.log(tarkistus)
                localStorage.removeItem(i);
            }  
        } */
    
        /* localStorage.removeItem('trashCan');
        localStorage.removeItem('bucket');
        kerta = 0
        
        console.log('Nyt uusinta')
        uusinta()        

        function uusinta() {

            let täyttö = [];
            lista = document.getElementById('toDoContainer');
        
            while (lista.firstChild) {
                lista.removeChild(lista.firstChild);
                console.log(lista.firstChild);
        
                }
        
            var listOfDos = document.createElement('ul');
            toDoContainer.appendChild(listOfDos); 


            for (let i = 0; i < indeksi; i++) {
        
                let nappaus = localStorage.getItem(i);
                    
        
                if (nappaus == null) {
                        console.log('Tyhjä')             
                } else {
                    täyttö.push(nappaus)
 
                    var paragraph = document.createElement('li');
                    paragraph.setAttribute('id', "task"+kerta);

                    nappaus = nappaus.substring(1, nappaus.length-1)
                    paragraph.innerText = nappaus;

                    paragraph.appendChild(deleteTask);
                    listOfDos.appendChild(paragraph);
                    kerta = kerta+1
                }
            }
        }*/        
    }) 

    filterTasks.addEventListener('click', function(taskFilter){
        const todos = listOfDos.childNodes;
    
        todos.forEach(function(todo){
            switch(taskFilter.target.value) {
           
                case "all":
                    todo.style.display = 'flex';
                    break;
           
                case "done":
                    if(todo.classList.contains('done')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = 'none';
                    }
                    break;
            
                case "uncompleted":
                    if(!todo.classList.contains('done')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = 'none';
                    }
                    break;                  
            }
                
        })
    
    })
    
    function localSave(localTask) {
        let localTasks;
        if (localStorage.getItem("localTasks") === null) {
            localTasks = [];
        } else {
            localTasks = JSON.parse(localStorage.getItem("localTasks"));
        }

        localTasks.push(localTask);
        localStorage.setItem("localTasks", JSON.stringify(localTasks));
    }

   

});

document.addEventListener('DOMContentLoaded', function() {
    let localTasks;
    if (localStorage.getItem("localTasks") === null) {
        localTasks = [];
    } else {
        localTasks = JSON.parse(localStorage.getItem("localTasks"));
    }

        var listOfDos = document.createElement('ul');
        toDoContainer.appendChild(listOfDos);
        
        localTasks.forEach(function(todo){
        var paragraph = document.createElement('li');
        paragraph.classList.add("task");
        paragraph.innerText = todo;
    
        var buttons = document.createElement('div');
        buttons.classList.add("buttons")
    
        var doneTask = document.createElement('button');
        doneTask.classList.add('buttons');
        doneTask.innerHTML = '<img src="done.png"/>';
    
        var deleteTask = document.createElement('button');
        deleteTask.classList.add("buttons");
        deleteTask.innerHTML = '<img src="roskis.png"/>';

        listOfDos.appendChild(paragraph);
        paragraph.appendChild(buttons);
        buttons.appendChild(doneTask);
        buttons.appendChild(deleteTask);

        doneTask.addEventListener('click', function() {
            paragraph.style.textDecoration = "line-through";
            paragraph.style.opacity = "0.5";
            paragraph.classList.add("done"); 
        })
    
        deleteTask.addEventListener('click', function() {
            listOfDos.removeChild(paragraph);
        })
        
        filterTasks.addEventListener('click', function(taskFilter){
            const todos = listOfDos.childNodes;
        
            todos.forEach(function(todo){
                switch(taskFilter.target.value) {
               
                    case "all":
                        todo.style.display = 'flex';
                        break;
               
                    case "done":
                        if(todo.classList.contains('done')) {
                            todo.style.display = 'flex';
                        } else {
                            todo.style.display = 'none';
                        }
                        break;
                
                    case "uncompleted":
                        if(!todo.classList.contains('done')) {
                            todo.style.display = 'flex';
                        } else {
                            todo.style.display = 'none';
                        }
                        break;                  
                }
                    
            })
        
        })
    })
})


