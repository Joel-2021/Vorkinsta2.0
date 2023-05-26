let publish = document.querySelector("#publish-job");
let cancel = document.querySelector("#cancel");
let modal = document.querySelector(".publish-right-container");
let search = document.querySelector(".search");
let header=document.querySelector('header')
let footer=document.querySelector('footer')

publish.addEventListener("click", (e) => {
  console.log(modal)
    e.preventDefault()
  modal.style.display = "block";
  search.classList.add('blur')
  header.classList.add('blur')
  footer.classList.add('blur')
});
cancel.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "none";
  search.style.height = "fit-content";
  search.scrollIntoView();
  search.classList.remove('blur')
  header.classList.remove('blur')
  footer.classList.remove('blur')
});