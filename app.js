
document.getElementById("display").addEventListener("keydown", function(){
    if(event.key === "Enter")
        addTask()
})


function addTask(){
    let newTask = document.createElement("li")
    let data = document.getElementById("display")
    let content = document.createTextNode(data.value)
    //creating a button to delete the task
    let deletebtn = document.createElement("button")
    deletebtn.classList.add("delete-btn")
    //deletebtn.appendChild(document.createTextNode("Delete"))
    let icon = document.createElement("img")
    icon.src="./trash.png"
    icon.alt="Delete"
    deletebtn.appendChild(icon)
    deletebtn.addEventListener("click", function(){
        this.parentElement.remove();
    })
   
    //creating an underline
    let line = document.createElement("hr")

    newTask.appendChild(content)
    newTask.appendChild(deletebtn)
    newTask.appendChild(line)

    let element = document.getElementById("ul");
    element.appendChild(newTask);
    data.value="";
}