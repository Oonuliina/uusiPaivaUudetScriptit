// haeaan ID:n perusteella tiedot html tiedostosta 
let addToDoButton = document.getElementById('addToDo');
let inputField = document.getElementById('inputField');
let filterTasks = document.getElementById('filterToDos');

// lisätään kuuntelijat
filterTasks.addEventListener('click', taskFilter);
addToDoButton.addEventListener('click', addTask);
document.addEventListener('DOMContentLoaded', getLocalTasks);

// maksimipituus syötettävälle tekstille
inputField.maxLength = '40';

// funktiö tehtävän lisäämiselle, tarkistamiselle, poistamiselle ja muokkaukselle 
function addTask() {
    // luodaat html-elementit listalle ja napeille
    var listItem = document.createElement('li');
    listItem.classList.add('task');
    listItem.innerText = inputField.value;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');
    
    var doneTask = document.createElement('button');
    doneTask.classList.add('buttons');
    doneTask.innerHTML = '<img src="done.png"/>';

    var deleteTask = document.createElement('button');
    deleteTask.classList.add('buttons');
    deleteTask.innerHTML = '<img src="roskis.png"/>';
    
    // jos teksti on lyhyempi kuin 2 kirjainta, annetaan varoitus ja tekstikentän reuna muuttuu punaiseksi
    var len = listItem.innerText.length;
    if (len < 2) {
        window.alert('Use more than one letter to express yourself <3');
        inputField.style.border = '1px solid red';
    } else {
        // jos teksti hyväksytään, luodaan lapsielementtejä joilla saadaan lisätyt tehtävät ja napit näkyville
        listOfDos.appendChild(listItem);
        listItem.appendChild(buttons);
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
        listItem.style.textDecoration = 'line-through';
        listItem.style.opacity = '0.5';
        listItem.classList.add('done'); 
    })
        // luodaan kuuntelija "poista"-napille, joka poistaa luodun tehtävän listasta
    deleteTask.addEventListener('click', function() {
        listOfDos.removeChild(listItem);
    })   
};

// funkto suodattimelle, josta voi valita minkä statuksen tehtäviä haluaa nähdä  
function taskFilter(filter) {
    const todos = listOfDos.childNodes;
// käydään todo-listaa läpi foreach-loopilla ja lokeroidaan "casen" mukaaan
    todos.forEach(function(todo){
        switch(filter.target.value) {
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
}

// tarkistetaan onko localStoragessa jo tavaraa
function localCheck(){
    let localTasks;
    if (localStorage.getItem('localTasks') === null) {
        localTasks = [];
    } else {
        localTasks = JSON.parse(localStorage.getItem('localTasks'));
    }
    return localTasks;
}
// Tallennetaan localStorageen
function localSave(localTask) {
    let localTasks = localCheck();
    localTasks.push(localTask);
    localStorage.setItem('localTasks', JSON.stringify(localTasks));
}

// Otetaan tavarat localStragesta
function getLocalTasks() {
        let localTasks = localCheck();
        localTasks.forEach(function(todo){
        var listItem = document.createElement('li');
        listItem.classList.add('task');
        listItem.innerText = todo;
    
        var buttons = document.createElement('div');
        buttons.classList.add('buttons');
    
        var doneTask = document.createElement('button');
        doneTask.classList.add('buttons');
        doneTask.innerHTML = '<img src="done.png"/>';
    
        var deleteTask = document.createElement('button');
        deleteTask.classList.add('buttons');
        deleteTask.innerHTML = '<img src="roskis.png"/>';

        listOfDos.appendChild(listItem);
        listItem.appendChild(buttons);
        buttons.appendChild(doneTask);
        buttons.appendChild(deleteTask);

        doneTask.addEventListener('click', function() {
            listItem.style.textDecoration = 'line-through';
            listItem.style.opacity = '0.5';
            listItem.classList.add('done'); 
        })
    
        deleteTask.addEventListener('click', function() {
            listOfDos.removeChild(listItem);
        })
        
    })
}

