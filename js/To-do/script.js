const inp = document.querySelector('.input');

document.querySelector('.btn').addEventListener("click",()=>{
    addTask(inp.value);
});

const li = document.createElement('div')
const task_to_do = document.createTextNode("Tasks To Do 📚 : ")
li.appendChild(task_to_do)
li.className="Heading_tasks_to_do";
document.body.appendChild(li)

function addTask(inp){
    if(!inp){
        alert("Please enter a task.");
    }
    const li = document.createElement('li');
    const task_added_in_list = document.createTextNode(`${inp}`)
    li.appendChild(task_added_in_list)
    li.className="Added_list";
    document.body.appendChild(li);

    inp.value="";
}