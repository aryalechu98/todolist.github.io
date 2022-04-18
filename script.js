let todoInput=document.getElementById("todo-input");
let addBtn=document.getElementById("add-btn");
let todoItemsList=document.getElementById("todo-items-list");


// STEP 2
// Add todo items
function addTodoItems(){
    let todoInputData=todoInput.value;
    console.log(todoInputData);
    // Create li Elements
    let li = document.createElement('li');

    li.innerHTML=todoInputData;
    // li.style.cssText='animation-name: slideIn;';
    todoItemsList.appendChild(li);
    
    todoInput.value='';
    todoInput.focus();
    console.log(li);

}


// // STEP 1
// // Add an event listener to the button

 addBtn.addEventListener('click',addTodoItems);