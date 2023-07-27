const inputbox = document.getElementById("inputbox");
const list = document.getElementById("list");

function addtask() {
  if (inputbox.value === " ") {
    alert("You must enter some task.");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    list.appendChild(li);
  }
}
