const mdp = document.getElementById("mdp");
const email = document.getElementById("email");
const submit = document.getElementById("sub");
const nom = document.getElementById("nom");

submit.addEventListener("click", function () {
  window.localStorage.setItem("mdp", mdp.value);
window.localStorage.setItem("email",email.value);
window.localStorage.setItem("nom",nom.value);

});


