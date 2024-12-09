document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill in all the fields.",
      confirmButtonColor: "#006199",
    });
  } else {
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Thank you for reaching out! Your message has been successfully sent, and we will get back to you as soon as possible.",
      confirmButtonColor: "#006199",
    });
    console.log({ name, email, message });
  }
});
