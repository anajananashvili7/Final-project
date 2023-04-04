const navBurger = document.querySelector(".burger");
const navLinks =document.querySelector(".nav-links");

function navActiveToggler () {
  navLinks.classList.toggle("nav-links__active")
}

navBurger.addEventListener("click", navActiveToggler);

document.querySelectorAll(".nav-links").forEach(n => n.addEventListener("click", () => {
    burger.classList.remove("active");
    nav-links.classList.remove("active");
  }))



  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function () {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }





