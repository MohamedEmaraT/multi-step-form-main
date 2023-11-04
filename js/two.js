btn2.addEventListener("click", (e) => {
  if (
    smalbox1[0].classList.contains("active") === false &&
    smalbox1[1].classList.contains("active") === false &&
    smalbox1[2].classList.contains("active") === false
  ) {
    e.preventDefault();
  } else {
    location.pathname = "ADD-ONS.html";
  }
});

function moveBack() {
  location.pathname = "SELECT PLAN.html";
}
