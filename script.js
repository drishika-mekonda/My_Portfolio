const form = document.getElementById("contactForm");
const messageBox = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let formData = new FormData(form);

  fetch("contact.php", {
    method: "POST",
    body: formData
  })
    .then(response => response.text())
    .then(data => {
      if (data.includes("success")) {
        messageBox.style.color = "green";
        messageBox.textContent = "✅ Message sent successfully!";
        form.reset();
      } else {
        messageBox.style.color = "red";
        messageBox.textContent = "❌ Something went wrong. Try again!";
      }
    })
    .catch(error => {
      messageBox.style.color = "red";
      messageBox.textContent = "⚠️ Error: " + error;
    });
});
