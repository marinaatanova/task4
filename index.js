function createNewElement(task, finished) {
    var listItem = document.createElement('li');
    var checkbox = document.createElement('button');
    if(finished){
    }
    else {
       checkbox.className = "checkbox";
    }
    var label = document.createElement('label');
    label.innerText = task;
    var input = document.createElement('input');
    input.type = "text";
    var editButton = document.createElement('button');
    editButton.className = "edit";
    editButton.innerHTML = "<i class='ed'>добавить</i>";
    var deleteButton = document.createElement('button');
    deleteButton.className = "cons delete";
    deleteButton.innerHTML = "<i class='ed'>удалить</i>";
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(input);
    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);
    return listItem;
}
function addTask() {
    var inputTask = document.getElementById('task');
    if (inputTask.value) {
        var listItem = createNewElement(inputTask.value, false);
        document.getElementById('unfinishedTasks').appendChild(listItem);
        bindTaskEvents(listItem, finishTask)
        inputTask.value = "";
    }
    save();
}
    document.getElementById('add').onclick = addTask;
function deleteTask() {
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    ul.removeChild(listItem);
}
function editTask() {
    console.log(2);
    var editButton = this;
    var listItem = this.parentNode;
    var label = listItem.querySelector('label');
    var input = listItem.querySelector('input[type=text]');
    var containsClass = listItem.classList.contains('editMode');
    if (containsClass) {
        label.innerText = input.value;
        editButton.className = "edit";
        editButton.innerHTML = "<i class='ed'>добавить</i>";
        save();
    } else {
        input.value = label.innerText;
        editButton.innerHTML = "<i class='ed'>сохранить</i>";
    }
    listItem.classList.toggle('editMode');
}
function finishTask() {
    var listItem = this.parentNode;
    var checkbox = listItem.querySelector('button.checkbox');
    checkbox.className = "checkbox";
    bindTaskEvents(listItem, unfinishTask);
    save();
}
function bindTaskEvents(listItem, checkboxEvent) {
    var checkbox = listItem.querySelector('button.checkbox');
    var editButton = listItem.querySelector('button.edit');
    var deleteButton = listItem.querySelector('button.delete');
    checkbox.onclick = checkboxEvent;
    editButton.onclick = editTask;
    deleteButton.onclick = deleteTask;
}
