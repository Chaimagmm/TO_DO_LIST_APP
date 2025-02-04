function addTask(){
    let newTask = document.createElement("li")
    let data = document.getElementById("display")
    let content = document.createTextNode(data.value)

    newTask.appendChild(content)

    let element = document.getElementById("ul");
    element.appendChild(newTask);
    data.value="";
}