
function addNewTask()
{

}


function savetolocalStorage(taskToadd)
{
    // const oldTask = localStorage.getItem(toDoTask);

    const oldTaskArray = JSON.parse(localStorage.getItem(toDoTask)) || [];

    oldTaskArray.push(taskToAdd);

    console.log(oldTaskArray);

    const newTaskArray = JSON.stringify(oldTaskArray);;

    localStorage.setItem(newTaskArray);


    
}

function getTaskFromLocalStorage()
{
    const oldTaskArray = JSON.parse(localStorage.getItem(toDoTask)) || [];

}