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