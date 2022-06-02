let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');


addToDoButton.addEventListener('click', function () {
    let paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value; //to display below
    toDoContainer.appendChild(paragraph); //to create <p></p>
    inputField.value = "" // to be empty after clicking

    paragraph.addEventListener('click',function(){ //one click to line through
    paragraph.style.textDecoration = "line-through"
    })

    paragraph.addEventListener('dblclick',function(){ // double click to remove done item
        toDoContainer.removeChild(paragraph)
        })

})









