const dropdownEl = document.querySelector("#dropdown");
const secondDropdownEl = document.querySelector("#second-dropdown");
const dropdownSideNavEl = document.querySelector("#dropdown-sidenav");
const secondDropdownSideNavEl = document.querySelector(
  "#second-dropdown-sidenav"
);
const menuIconEl = document.querySelector("#menu-icon");
const sideBarEl = document.querySelector("#side-bar");
const menuIconCloseEl = document.querySelector("#closeMnu-icon");

function showFeatures() {
  let rotatebackEl = document.getElementById("rotate1");
  if (dropdownEl.classList.contains("hidden")) {
    dropdownEl.classList.remove("hidden");
    dropdownEl.classList.add("block");
    rotatebackEl.style.transform = "rotate(180deg)";
    document.getElementById("dropdown").style.boxShadow =
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px";
  } else {
    dropdownEl.classList.remove("block");
    dropdownEl.classList.add("hidden");
    rotatebackEl.style.transform = "rotate(0deg)";
  }
}

function show() {
  let rotatebackEl = document.getElementById("rotate2");
  if (secondDropdownEl.classList.contains("hidden")) {
    secondDropdownEl.classList.remove("hidden");
    secondDropdownEl.classList.add("block");
    rotatebackEl.style.transform = "rotate(180deg)";
    document.getElementById("second-dropdown").style.boxShadow =
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px";
  } else {
    secondDropdownEl.classList.remove("block");
    secondDropdownEl.classList.add("hidden");
    rotatebackEl.style.transform = "rotate(0deg)";
  }
}

function showFeaturesSideNav() {
  let rotatebackEl = document.getElementById("rotate3");
  if (dropdownSideNavEl.classList.contains("hidden")) {
    dropdownSideNavEl.classList.remove("hidden");
    dropdownSideNavEl.classList.add("block");
    rotatebackEl.style.transform = "rotate(180deg)";
  } else {
    dropdownSideNavEl.classList.remove("block");
    dropdownSideNavEl.classList.add("hidden");
    rotatebackEl.style.transform = "rotate(0deg)";
  }
}

function showSideNav() {
  let rotatebackEl = document.getElementById("rotate4");
  if (secondDropdownSideNavEl.classList.contains("hidden")) {
    secondDropdownSideNavEl.classList.remove("hidden");
    secondDropdownSideNavEl.classList.add("block");
    rotatebackEl.style.transform = "rotate(180deg)";
  } else {
    secondDropdownSideNavEl.classList.remove("block");
    secondDropdownSideNavEl.classList.add("hidden");
    rotatebackEl.style.transform = "rotate(0deg)";
  }
}

function openMenu() {
  if (sideBarEl.classList.contains("hidden")) {
    sideBarEl.classList.remove("hidden");
    menuIconCloseEl.classList.remove("hidden");
    sideBarEl.classList.add("block");
    menuIconCloseEl.classList.add("block");
    document.getElementById("side-bar").style.paddingBottom = "380px";
  }
}

function closeMenu() {
  if (sideBarEl.classList.contains("block")) {
    sideBarEl.classList.remove("block");
    menuIconCloseEl.classList.remove("block");
    sideBarEl.classList.add("hidden");
    menuIconCloseEl.classList.add("hidden");
  }
}
