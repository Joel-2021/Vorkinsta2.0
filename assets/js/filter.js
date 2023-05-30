const filter = document.getElementById("filter");
var modal = document.getElementById("myModal");
var close = document.getElementById("close");
filter.onclick = function () {
  modal.style.display = "block";
};
close.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const dropdown = document.getElementsByClassName("dropdown");
for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    var panel = this.nextElementSibling;
    if (panel.style.display === "flex") {
      panel.style.display = "none";
    } else {
      panel.style.display = "flex";
    }
  });
}