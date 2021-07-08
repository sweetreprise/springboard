const unfinished = document.querySelector('#unfinished');
const finished = document.querySelector('#finished');
const input = document.querySelector('#new-task');
const form = document.querySelector('#todo');
const checkBox = document.querySelectorAll('input[type=checkbox]');

//add values to unfinished list
form.addEventListener ('submit', function(e){
    e.preventDefault();
    const newDiv = document.createElement('div');
    const newTask = document.createElement('label');
    const newCheckbox = document.createElement('input');
    newCheckbox.setAttribute('type', 'checkbox');
    newTask.innerText= ' ' + input.value;
    input.value = '';
    newDiv.append(newCheckbox);
    newDiv.append(newTask);
    unfinished.append(newDiv);
    newDiv.classList.add('list');

    save();
});

unfinished.addEventListener ('click', function(e){
    // console.log(e.target.tagName);
    if(e.target.tagName === 'INPUT') {
        e.target.parentElement.style.textDecoration="line-through";
        finished.append(e.target.parentElement);
        e.target.remove();
    }

    save();
});

finished.addEventListener ('click', function(e){
    console.log(e.target.tagName);
    if(e.target.tagName === 'DIV' || 'LABEL') {
        e.target.remove();
    }
    save();
})


//save values to local storage
function save() {
    window.localStorage.unfinished = unfinished.innerHTML;
    window.localStorage.finished = finished.innerHTML;
}

//get items from local storage
function get() {
    let storedUnfinished = window.localStorage.unfinished;
    let storedFinished = window.localStorage.finished;
    if (!storedUnfinished) {
        unfinished.innerHTML = '<div class="list"><input type="checkbox"/><label for="checkbox"></label> create a task below to add to this list!</div>';
    }
    else {
        unfinished.innerHTML = storedUnfinished;
    }

    if(!storedFinished) {
        finished.innerHTML ='<p>click items in this box to delete</p>';
    }
    else {
        finished.innerHTML = storedFinished;
    }
}

get();



// const editMode = document.querySelector('#edit');
// const div = document.querySelectorAll('div[class=list]')

// editMode.addEventListener ('click', function(e){
//     const removeBtn = document.createElement('button');
//     removeBtn.innerText = 'remove';
//     editMode.classList.toggle('editmode');
    // div.append(removeBtn);
    // arrayDivs = Array.prototype.slice.call(div);
    // for(let divs of arrayDivs) {
    //     arrayDivs.append(removeBtn);
    // }
// })

//i was trying to made an 'edit-mode' where if you clicked on edit, remove buttons would be appended to divs with the class 'list' (on both finished and unfinished lists) and by clicking on the remove, the whole div would be removed. but it's a little over my head right now so i kept it simple.

