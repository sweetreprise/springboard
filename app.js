const unfinished = document.querySelector('#unfinished');
const finished = document.querySelector('#finished');
const input = document.querySelector('#new-task');
const form = document.querySelector('#todo');
const checkBox = document.querySelectorAll('input[type=checkbox]');


//saves unfinished tasks to local storage
function updateUnfinished() {
    const unfinishedTasks = document.querySelectorAll('#unfinished div[class="list"]');
    const unfinishedArray = [];

    for(let i = 0; i <unfinishedTasks.length; i++) {
        unfinishedArray.push(unfinishedTasks[i].innerText);
    }

    localStorage.setItem('unfinishedTasks', JSON.stringify(unfinishedArray));
    
}

//saves finished tasks to local storage
function updateFinished() {
    const finishedTasks = document.querySelectorAll('#finished div[class="list"]');
    const finishedArray = [];

    for(let i = 0; i < finishedTasks.length; i++) {
        finishedArray.push(finishedTasks[i].innerText);
    }

    localStorage.setItem('finishedTasks', JSON.stringify(finishedArray));
}

//get saved tasks from local storage
function populateUI() {
    const unfinishedTasks = JSON.parse(localStorage.getItem('unfinishedTasks'));

    console.log(unfinishedTasks);

    if(unfinishedTasks === null || unfinishedTasks.length <= 0) {
        unfinished.innerHTML = '<p>add tasks below!</p>';
    } else {
        for(i = 0; i < unfinishedTasks.length; i++) {
            const newDiv = document.createElement('div');
            const newTask = document.createElement('label');
            const newCheckbox = document.createElement('input');
            newCheckbox.setAttribute('type', 'checkbox');
            newTask.innerText= unfinishedTasks[i];
            newDiv.append(newCheckbox);
            newDiv.append(newTask);
            unfinished.append(newDiv);
            newDiv.classList.add('list');
        }
    }

    const finishedTasks = JSON.parse(localStorage.getItem('finishedTasks'));

    if(finishedTasks === null || finishedTasks.length <=0) {
        finished.innerHTML = '<p>finished tasks! click to delete</p>';
    } else {
        for (i = 0; i < finishedTasks.length; i++) {
        const newDiv = document.createElement('div');
        const newTask = document.createElement('label');
        newDiv.setAttribute('class', 'list');
        newDiv.setAttribute('style', 'text-decoration: line-through;');
        newDiv.append(newTask);
        finished.append(newDiv);
        newTask.innerText = finishedTasks[i];
        }
    }
}


//add values to unfinished list
form.addEventListener ('submit', function(e){
    e.preventDefault();

    if(input.value.trim() === '') {
        alert('must be a valid text input!');
    } else {
    const newDiv = document.createElement('div');
    const newTask = document.createElement('label');
    const newCheckbox = document.createElement('input');
    newCheckbox.setAttribute('type', 'checkbox');
    newTask.innerText= ' ' + input.value.trim();
    newDiv.append(newCheckbox);
    newDiv.append(newTask);
    unfinished.append(newDiv);
    newDiv.classList.add('list');

    }

    form.reset();
    updateUnfinished();
});

//move task to finished list
unfinished.addEventListener ('click', function(e){
    if(e.target.tagName === 'INPUT') {
        e.target.parentElement.style.textDecoration="line-through";
        finished.append(e.target.parentElement);
        e.target.remove();
    }

    updateUnfinished();
    updateFinished();
});

//remove finished task
finished.addEventListener ('click', function(e){
    if(e.target.tagName === 'LABEL') {
        e.target.parentElement.remove();
    }
    
    updateFinished();
})

populateUI()

