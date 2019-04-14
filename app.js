var form = document.querySelector(".needs-validation");

form.addEventListener("submit", function(event) {
  // checkValidity is a  builtin function for checking the validity
  if (form.checkValidity() === false) {
    // to prevent the default event
    event.preventDefault();

    // we are using stopPropagation to not sending the request to ajax .
    // It is a normal form submission but when it will be  valid
    // Stoping this normal form submission when it is invalid
    event.stopPropagation();
  }
  // this is the additional class needs to add
  form.classList.add("was-validated");
});