function addTask() {
  var input = document.getElementById("taskInput");
  
  if (input.value != "") {
    var todo = document.getElementById("todoList");
    var span = document.createElement("span");
    var listItem = document.createElement("li");
    var edit = document.createElement("button");
    var del = document.createElement("button");
    var checkbox = document.createElement("input");
    var textDiv = document.createElement("div");
    var btnDiv = document.createElement("div");

    listItem.setAttribute(
      "class",
      "list-group-item list-group-item-action d-flex align-items-center"
    );

    textDiv.setAttribute("class", "d-flex align-items-center");
    textDiv.style.width = "70%";

    btnDiv.setAttribute(
      "class",
      "d-flex justify-content-around align-items-center"
    );
    btnDiv.style.width = "30%";

    edit.setAttribute("class", "btn btn-outline-secondary me-1");
    edit.innerHTML = "Edit";

    del.setAttribute("class", "btn btn-outline-danger");
    del.innerHTML = "Delete";

    checkbox.setAttribute("class", "form-check-input me-1");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("value", "");

    span.textContent = input.value;
    span.setAttribute("class", span.getAttribute("class") + " ms-3");

    edit.addEventListener("click", function () {
      editTask(span);
    });
    del.addEventListener("click", function () {
      removeTask(listItem);
    });
    checkbox.addEventListener("change", function () {
      listItem.style.textDecoration = "line-through";
      listItem.setAttribute(
        "class",
        listItem.getAttribute("class") + " disabled"
      );
      listItem.setAttribute("aria-disabled", "true");
    });

    textDiv.appendChild(checkbox);
    textDiv.appendChild(span);

    btnDiv.appendChild(edit);
    btnDiv.appendChild(del);

    listItem.appendChild(btnDiv);
    listItem.appendChild(textDiv);

    todo.appendChild(listItem);

    input.value = "";
  } else {
    alert("Enter Valid Input");
  }
}

function editTask(span) {
  var newTask = prompt("Enter Your Task: " + span.textContent);
  if (newTask !== null && newTask.trim() !== null) {
    span.textContent = newTask.trim();
  }
}

function removeTask(li) {
  var todo = document.getElementById("todoList");
  todo.removeChild(li);
}

function deleteCompletedTasks() {
  var tasks = document.getElementsByClassName("disabled");
  var len = tasks.length;
  for (var i = 0; i < len; i++) {
    removeTask(tasks[0]);
  }
}
