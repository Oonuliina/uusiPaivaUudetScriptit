// haeaan ID:n perusteella tiedot html tiedostosta 
let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let filterTasks = document.getElementById('filterToDos');

// Luodaan html lista ja lisätään se toDoContainerin lapsielementiksi
var listOfDos = document.createElement('ul');
toDoContainer.appendChild(listOfDos);
// maksimipituus syötettävälle tekstille
inputField.maxLength = '40';

// luodaan kuuntelija syöttönappulalle
addToDoButton.addEventListener('click', function() {

    //luodaan listaelementti ja annetaan sille luokka
    var paragraph = document.createElement('li');
    paragraph.classList.add('task');
    
    // tekstikentän teksti asetetaan listaelementtiin
    paragraph.innerText = inputField.value;
    
    // luodaan "valmis" ja "poista" napeille oma "säiliö" ja luokka
    var buttons = document.createElement('div');
    buttons.classList.add('buttons');
    
    // luodaan nappit ja niille luokat
    var doneTask = document.createElement('button');
    doneTask.classList.add('buttons');
    doneTask.innerHTML = '<img src="done.png"/>';

    var deleteTask = document.createElement('button');
    deleteTask.classList.add('buttons');
    deleteTask.innerHTML = '<img src="roskis.png"/>';

    // tarkistetaan syötetyn tekstin pituus
    var len = paragraph.innerText.length;
    // jos teksti on lyhyempi kuin 2 kirjainta, annetaan varoitus ja tekstikentän reuna muuttuu punaiseksi
    if (len < 2) {
        window.alert('Use more than one letter to express yourself <3');
        inputField.style.border = '1px solid red';
    } else {
        // jos teksti hyväksytään, luodaan lapsielementtejä joilla saadaan lisätyt tehtävät ja napit näkyville
        listOfDos.appendChild(paragraph);
        paragraph.appendChild(buttons);
        buttons.appendChild(doneTask);
        buttons.appendChild(deleteTask);

        // kutsutaan funktiota localSave joka tallentaa syötetyn tekstin localstorageen
        localSave(inputField.value);
        
        // tyhjennetään tekstikenttä ja palautetaan tyyli takaisin normaaliksi
        inputField.style = '#inputField';
        inputField.value = '';
        
    }
        // luodaan kuutelija ja tyyli "tehty"-napille, joka merkkaa tehtävän tehdyksi  
    doneTask.addEventListener('click', function() {
        paragraph.style.textDecoration = 'line-through';
        paragraph.style.opacity = '0.5';
        paragraph.classList.add('done'); 
    })
        // luodaan kuuntelija "poista"-napille, joka poistaa luodun tehtävän listasta
    deleteTask.addEventListener('click', function() {
        listOfDos.removeChild(paragraph);

    }) 
        // luodaan kuuntelija suodattimelle, josta voi valita minkä statuksen tehtäviä haluaa nähdä
    filterTasks.addEventListener('click', function(taskFilter){
        const todos = listOfDos.childNodes;
    
        todos.forEach(function(todo){
            switch(taskFilter.target.value) {
           
                case 'all':
                    todo.style.display = 'flex';
                    break;
           
                case 'done':
                    if(todo.classList.contains('done')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = 'none';
                    }
                    break;
            
                case 'uncompleted':
                    if(!todo.classList.contains('done')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = 'none';
                    }
                    break;                  
            }                
        })
    })
    // tallennetaan local Storageen
    function localSave(localTask) {
        let localTasks;
        //tarkistetaan, onko local storage tyhjä, jos on niin luodaan lista
        if (localStorage.getItem('localTasks') === null) {
            localTasks = [];
        // jos ei, miin haetaan siellä olevat tiedot    
        } else {
            localTasks = JSON.parse(localStorage.getItem("localTasks"));
        }

        localTasks.push(localTask);
        localStorage.setItem('localTasks', JSON.stringify(localTasks));
    }

   

});
// Otetaan tavarat localStragesta
document.addEventListener('DOMContentLoaded', function() {
    let localTasks;
    if (localStorage.getItem('localTasks') === null) {
        localTasks = [];
    } else {
        localTasks = JSON.parse(localStorage.getItem('localTasks'));
    }
        
        localTasks.forEach(function(todo){
        var paragraph = document.createElement('li');
        paragraph.classList.add('task');
        paragraph.innerText = todo;
    
        var buttons = document.createElement('div');
        buttons.classList.add('buttons');
    
        var doneTask = document.createElement('button');
        doneTask.classList.add('buttons');
        doneTask.innerHTML = '<img src="done.png"/>';
    
        var deleteTask = document.createElement('button');
        deleteTask.classList.add('buttons');
        deleteTask.innerHTML = '<img src="roskis.png"/>';

        listOfDos.appendChild(paragraph);
        paragraph.appendChild(buttons);
        buttons.appendChild(doneTask);
        buttons.appendChild(deleteTask);

        doneTask.addEventListener('click', function() {
            paragraph.style.textDecoration = 'line-through';
            paragraph.style.opacity = '0.5';
            paragraph.classList.add('done'); 
        })
    
        deleteTask.addEventListener('click', function() {
            listOfDos.removeChild(paragraph);
        })
        
        filterTasks.addEventListener('click', function(taskFilter){
            const todos = listOfDos.childNodes;
        
            todos.forEach(function(todo){
                switch(taskFilter.target.value) {
               
                    case 'all':
                        todo.style.display = 'flex';
                        break;
               
                    case 'done':
                        if(todo.classList.contains('done')) {
                            todo.style.display = 'flex';
                        } else {
                            todo.style.display = 'none';
                        }
                        break;
                
                    case 'uncompleted':
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

