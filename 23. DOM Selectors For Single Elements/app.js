// document.getElementById()

console.log(document.getElementById("task-title"));

// Get things from the element
console.log(document.getElementById("task-title").id);
console.log(document.getElementById("task-title").className);

// Change styling
document.getElementById("task-title").style.background = "green";
document.getElementById("task-title").style.color = "red";

// Change content
document.getElementById("task-title").textContent = "task list";
document.getElementById("task-title").innerText = "My tasksa";
document.getElementById("task-title").innerHTML =
  '<span style="color:blue">Task list</span>';

// document.querySelector()
console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-title"));
