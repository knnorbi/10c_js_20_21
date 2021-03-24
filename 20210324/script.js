var tasks = [
    {task: "This program", done: false},
    {task: "Homework", done: false},
    {task: "Wake up", done: true}
];
showTasks();

function showTasks() {
    var tmp = "";
    for (var i = 0; i < tasks.length; i++) {
        tmp += "<div>";
        
        if(tasks[i].done) {
            tmp += "<del>" + tasks[i].task + "</del>";
            tmp += '<button class="btn btn-danger" onclick="delTask(' + i + ')">Del</button>';
        }
        else {
            tmp += tasks[i].task;
            tmp += '<button class="btn btn-success" onclick="doneTask(' + i + ')">Done</button>';
        }
        
        tmp += "</div>";
    }
    document.getElementById("tasks").innerHTML = tmp;
}

function saveTask() {
    var taskString = document.getElementById("task").value;
    var task = {task: taskString, done: false};
    tasks.push(task);
    showTasks();
    
    document.getElementById("task").value = "";
    document.getElementById("task").focus();
}

function doneTask(idx) {
    tasks[idx].done = true;
    showTasks();
}

function delTask(idx) {
    tasks.splice(idx, 1);
    showTasks();
}