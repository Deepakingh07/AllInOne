let openFeatures = () => {
  let allElem = document.querySelectorAll(".elems");
  let FullElem = document.querySelectorAll(".fullElem");
  let FullElemBackBtn = document.querySelectorAll(".back");
  allElem.forEach(function (elem, index) {
    elem.addEventListener("click", () => {
      FullElem[index].style.display = "block";
    });
  });

  FullElemBackBtn.forEach(function (back, index) {
    back.addEventListener("click", () => {
      FullElem[index].style.display = "none";
    });
  });
};
// openFeatures();

let from = document.querySelector(".addTask form");
let taskInput = document.querySelector(".addTask form input");
let taskDetailsInput = document.querySelector(".addTask form textarea");
let check = document.querySelector(".addTask form #check");

let currentTask = [
  { task: "Recording karo", details: "Recording details", imp: true },
  { task: "Editing karo", details: "Editing details", imp: false },
  { task: "Upload karo", details: "Upload details", imp: true },
];

from.addEventListener("submit", (e) => {
  e.preventDefault();
  currentTask.push({
    task: taskInput.value,
    details: taskDetailsInput.value,
    imp: check.checked,
  });
  // console.log(currentTask);

  taskInput.value = "";
  taskDetailsInput.value = "";
  check.checked = false;
  renderTask();
});
function renderTask() {
  let allTasks = document.querySelector(".allTask");

  let sum = "";
  currentTask.forEach(function (elem) {
    sum =
      sum +
      `<div class="task">
    <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
    <button>mark as</button>
  </div>`;
  });
  allTasks.innerHTML = sum;
}
renderTask();
