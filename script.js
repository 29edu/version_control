document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const responseMsg = document.getElementById("responseMsg");

  if (!name || !email || !message) {
    responseMsg.style.color = "red";
    responseMsg.textContent = "Please fill all the fields!";
    return;
  }

  responseMsg.style.color = "green";
  responseMsg.textContent = `Thank you, ${name}! Your message has been submitted successfully.`;

  // Optionally clear the form
  this.reset();
});
