let task = document.querySelector('.taskInput');
let button = document.querySelector('.taskSubmit');
let container = document.querySelector('.tasks');
let taskContainer = document.querySelector('.task-container')



button.addEventListener("click", function() {
    let taskValue = task.value;

    //The input is empty

    if (taskValue === "") {
        alert("Do you have to do nothing?");
        return;
    };

    //Make the next task as a Div element and connect for the DIV the Buttons and the task to do!

    let taskElement = document.createElement("div");
    let textElement = document.createElement("div");
    let buttonElement = document.createElement("div");
    taskElement.appendChild(textElement);
    taskElement.appendChild(buttonElement);


    taskElement.setAttribute("class", "mainContainer");
    taskElement.style.display = "flex";

    textElement.setAttribute("class", "textContainer");
    textElement.style.width = "78%";

    buttonElement.setAttribute("class", "buttonContainer");
    buttonElement.style.width = "20%";
    buttonElement.style.display = "flex";


    textElement.innerHTML = "- " + taskValue.charAt(0).toUpperCase() + taskValue.slice(1);

    //Delete button and the function for it

    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute('class', 'deleteBtn');
    deleteBtn.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';
    deleteBtn.style.fontSize = 40;
    buttonElement.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function(e) {
        taskElement.remove();
    });

    //Change button and the function for it

    let changeBtn;
    changeBtn = document.createElement("button");
    changeBtn.setAttribute('class', 'changeBtn');
    changeBtn.innerHTML = '<ion-icon name="pencil-outline"></ion-icon>';
    changeBtn.style.fontSize = 40;
    buttonElement.appendChild(changeBtn);

    changeBtn.addEventListener("click", function(e) {
        let changedTaskValue = prompt("Enter new task:", taskValue);
        textElement.innerHTML = "- " + changedTaskValue.charAt(0).toUpperCase() + changedTaskValue.slice(1);
        buttonElement.appendChild(deleteBtn);
        buttonElement.appendChild(changeBtn);
        buttonElement.appendChild(doneBtn);
    });
    

    //Done button and the function for it

    let doneBtn;
    doneBtn = document.createElement("button");
    doneBtn.setAttribute('class', 'doneBtn');
    doneBtn.innerHTML = '<ion-icon name="checkmark-outline"></ion-icon>';
    buttonElement.appendChild(doneBtn);

    doneBtn.addEventListener("click", function(e) {
        if (textElement.style.color === "black"){
        textElement.innerHTML = "✓ " + taskValue.charAt(0).toUpperCase() + taskValue.slice(1);
        textElement.style.color = "green";
        buttonElement.appendChild(deleteBtn);
        buttonElement.appendChild(changeBtn);
        buttonElement.appendChild(doneBtn);
        } else {
            textElement.innerHTML = "- " + taskValue.charAt(0).toUpperCase() + taskValue.slice(1);
            textElement.style.color="black"
            buttonElement.appendChild(deleteBtn);
            buttonElement.appendChild(changeBtn);
            buttonElement.appendChild(doneBtn);
        }
    });

    //Append to the main container

    container.appendChild(taskElement);
});
