const inputbox = document.getElementById("inputbox");
const list = document.getElementById("list");

function addtask() {
  if (inputbox.value === " ") {
    alert("You must enter some task.");
  } else {
    let task = document.createElement("li");
    task.innerHTML = inputbox.value;
    list.appendChild(task);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    task.appendChild(span);
  }
  inputbox.value = "";
}
