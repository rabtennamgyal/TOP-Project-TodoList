import { cleanInput } from "./domfuntions";

// Project list animation
const arrow = document.getElementById("arrow");

arrow.addEventListener("click", () => {
  const projectList = document.querySelector(".projectList");

  if (projectList.classList.contains("slideDown")) {
    projectList.classList.remove("slideDown");
    projectList.classList.add("slideUp");
    arrow.classList.remove("rotateDown");
  } else {
    projectList.classList.add("slideDown");
    projectList.classList.remove("slideUp");
    arrow.classList.add("rotateDown");
  }
});

// Side bar animation ( for desktop )
const navSpan = document.getElementById("spann");

navSpan.addEventListener("click", () => {
  const mainContent = document.getElementById("mainContent");
  const sideBarOne = document.querySelector(".sideBarOne");
  const sideBarTwo = document.querySelector(".sideBarTwo");

  if (mainContent.classList.contains("slideLeft")) {
    mainContent.classList.remove("slideLeft");
    sideBarOne.style.display = "flex";
    sideBarTwo.style.display = "flex";
  } else {
    mainContent.classList.add("slideLeft");
    sideBarOne.style.display = "none";
    sideBarTwo.style.display = "none";
  }
});

// Side bar animation ( for mobile )
const spanPhone = document.getElementById("spanPhone");

spanPhone.addEventListener("click", () => {
  const sideBar = document.querySelector(".sideBar");

  if (sideBar.classList.contains("slideLeftPhone")) {
    sideBar.classList.remove("slideLeftPhone");
  } else {
    sideBar.classList.add("slideLeftPhone");
  }
});

// Insert current date in the svg
const todaySvg = document.getElementById("todayDate");

const date = new Date();
todaySvg.textContent = date.getUTCDate();

// Open & Close Module
const module = document.querySelector(".module");
// Open Modal Buttons
const plusIcon = document.getElementById("plusIcon");

// Close Modal Buttons
const add = document.getElementById("addList");
const edit = document.getElementById("editList");
const cancel = document.getElementById("cancelList");

// plusIcon & newListBtn are two different btns but serves the same purpose.
plusIcon.addEventListener("click", () => {
  const sideBar = document.querySelector(".sideBar");

  if (sideBar.classList.contains("slideLeftPhone")) {
    sideBar.classList.remove("slideLeftPhone");
  } else {
    sideBar.classList.add("slideLeftPhone");
  }

  module.style.display = "grid";
  add.style.display = "block";
  edit.style.display = "none";
});

function setBtnOne() {
  if (document.getElementById("newListButton")) {
    const btn = document.getElementById("newListButton");
    btn.addEventListener("click", () => {
      module.style.display = "grid";
      add.style.display = "block";
      edit.style.display = "none";
    });
  }
}

setInterval(() => {
  setBtnOne();
});

add.addEventListener("click", () => {
  module.style.display = "none";
});

edit.addEventListener("click", () => {
  module.style.display = "none";
});

cancel.addEventListener("click", () => {
  const projectInput = document.querySelector(".inputFive");
  module.style.display = "none";
  projectInput.style.display = "grid";
  cleanInput();
});

// new project button
const module3 = document.querySelector(".sideBarModule");
const newProject = document.getElementById("addProject");

newProject.addEventListener("click", () => {
  module3.style.display = "none";
});

// For opening SideBar Project Module
const newProjectIcon = document.getElementById("newProjectIcon");
const cancelProject = document.getElementById("cancelProject");

newProjectIcon.addEventListener("click", () => {
  const projectModule = document.querySelector(".sideBarModule");
  const projectInput = document.getElementById("projectName");
  projectModule.style.display = "grid";
  projectInput.value = "";
});

cancelProject.addEventListener("click", () => {
  const projectModule = document.querySelector(".sideBarModule");
  const projectInput = document.getElementById("projectName");
  projectModule.style.display = "none";
  projectInput.value = "";
});
