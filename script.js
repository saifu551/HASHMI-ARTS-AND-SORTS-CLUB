// Simple alert on form submission
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent! We will get back to you soon.");
  });
});
