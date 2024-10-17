//valida se tem dois nomes presentes
function validateName(name) {

 let fullName = name.trim();

  if (fullName === "") { // método trim() remove espaços em branco do início e do final da string alem de verificar se o campo esta vazio ou apenas tem espacos
    return "Nome não pode ficar em branco";
  } 
  
  if (!(fullName.includes(" "))){
    return "Deve ter nome e sobrenome";
  }

  return "";
}

function validateEmail (email) {
  if (email.trim() === "") {
    return "Email não pode ficar em branco";
  }
  
  if (!(email.includes("@"))){
    return "Email invalido";
  }

  return "";
}

function validatePassword(password, checkpassword) {
  if ((password.trim() === "") || (checkpassword.trim() === "")) {
    return "Senhas não pode ficar em branco";
  }

  if (password.length < 6 ) {
    return "Senhas deve ser maior que 6 dígitos";
  }
  
  if (!(password === checkpassword )){
    return "Senhas não são iguais";
  }

  return ""
}

function validateForm() {
  let errorMessages = [];

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let password_check = document.getElementById("password_check").value;


  let nameError = validateName(name);
  if (nameError) errorMessages.push(nameError);

  let emailError = validateEmail(email);
  if (emailError) errorMessages.push(emailError);

  let passwordError = validatePassword(password, password_check);
  if (passwordError) errorMessages.push(passwordError);

  if (errorMessages.length > 0) {
    alert(errorMessages.join("\n"));
    return false;
  }

  return true
}

document.getElementById("signup").addEventListener("click", function() {
  if (validateForm()) {
    window.location.href = "desafio2/home.html";
  }

  document.getElementById("name").value = '';
  document.getElementById("email").value = '';
  document.getElementById("password").value = '';
  document.getElementById("password_check").value = '';
});