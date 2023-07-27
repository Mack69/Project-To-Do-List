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
  saveData();
}

list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", list.innerHTML);
}

function showTask() {
  list.innerHTML = localStorage.getItem("data");
}

showTask();
