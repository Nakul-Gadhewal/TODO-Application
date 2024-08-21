const readline = require('readline').createInterface({
    input : process.stdin,
    output: process.stdout
})

let todos = [];
function  displayTodos(){
    console.log("\nYour To-Do List:");
    if (todos.length === 0){
        console.log("No task yet! Add sometime")
    }
    else
        todos.forEach((todos , index) => {

              console.log(`${index + 1}.${todos}`)
         });
         
}

function addTodo(){
    readline.question("Enter your task here:" ,(task) => {
       todos.push(task);
       console.log("task added!");
       displayTodos();
       askForFunction();
    });
}

    function removeFunction(){
        displayTodos();
        readline.question("enter the number of the task to be removed: ",(index) => {
          const taskIndex = parseInt(index) - 1;
          if(taskIndex >= 0 && taskIndex  < todos.length)
          {
            todos.splice(taskIndex, 1);
            console.log("task removed!");
          }
          else{
            console.log("invelid task number!")
          }
          displayTodos();
          askForFunction();
        });
    }
 function askForFunction(){
    readline.question("\n what do you want to do? (add, remove, list, quit): ", (action) => {
     switch (action.toLowerCase()){
        
        case "add":
        addTodo();
        break;

        case"remove":
        removeFunction();
        break;

        case "list":
            displayTodos();
            askForFunction();
            break;

            case " quit":
                console.log("thankyou!")
                readline.close();
                break;

                default:
                    console.log("invalid action please try again...")
                    askForFunction();
     }
    });
 }

 console.log("welcome to To-Do application")
 askForFunction();
