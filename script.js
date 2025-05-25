document.getElementById('contact-form').addEventListener('submit', function(t) {
  t.preventDefault();
  document.getElementById('form-message').textContent = "Thanks! I'll get back to you.";
  this.reset();
});