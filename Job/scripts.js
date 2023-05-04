const show = document.getElementById("select-open");
const btn = document.getElementById("select-menu");
const li = document.querySelectorAll(".select-li");
const displayElement = document.getElementById("select-para");
show.addEventListener("click", function () {
  if ((btn.style.display = "none")) {
    btn.style.display = "block";
  }
});
li.forEach(function (slect) {
  slect.addEventListener("click", function () {
    const textContent = this.textContent;
    displayElement.value = textContent;
    btn.style.display = "none";
  });
});
const show1 = document.getElementById("select-open-1");
const btn1 = document.getElementById("select-menu-1");
const li1 = document.querySelectorAll(".select-li-1");
const arrow = document.querySelector("#select-close-1");
const displayElement1 = document.getElementById("select-para-1");
show1.addEventListener("click", function () {
  if ((btn1.style.display = "none")) {
    btn1.style.display = "block";
    show1.style.display = "none";
    arrow.style.display = "block";
  }
});
arrow.addEventListener("click", () => {
  btn1.style.display = "none";
  show1.style.display = "block";
  arrow.style.display = "none";
});

li1.forEach(function (slect) {
  slect.addEventListener("click", function () {
    const textContent = this.textContent;
    displayElement1.value = textContent;
    btn1.style.display = "none";
  });
});
const show2 = document.getElementById("select-open-2");
const btn2 = document.getElementById("select-menu-2");
const li2 = document.querySelectorAll(".select-li-2");
const displayElement2 = document.getElementById("select-para-2");
show2.addEventListener("click", function () {
  if ((btn2.style.display = "none")) {
    btn2.style.display = "block";
  }
});
li2.forEach(function (slect) {
  slect.addEventListener("click", function () {
    const textContent = this.textContent;
    displayElement2.value = textContent;
    btn2.style.display = "none";
  });
});

let publish = document.querySelector("#publish-job");
let cancel = document.querySelector("#cancel");
let modal = document.querySelector(".publish-right-container");
let search = document.querySelector(".search");
console.log(publish, modal);
publish.addEventListener("click", (e) => {
    e.preventDefault()
  modal.style.display = "block";
  search.style.height = "1400px";
  search.classList.add('blur')
});
cancel.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "none";
  search.style.height = "fit-content";
  search.scrollIntoView();
  search.classList.remove('blur')
});