const loginForm = document.getElementById("loginForm");
const userTokenKey = "user_token";
const userToken = localStorage.getItem(userTokenKey);
if (userToken) {
  location.replace("app.html");
}

const onSubmit = async (event) => {
  event.preventDefault();
  const inputEmail = document.getElementById("inputEmail");
  const inputPassword = document.getElementById("inputPassword");
  const rememberMe = document.getElementById("rememberme");

  const errors = [];

  if (inputEmail.value === "") {
    errors.push("email is missing");
  }
  if (inputPassword.value === "") {
    errors.push("password is missing");
  }

  if (errors.length) {
    console.error(errors);
    return;
  }

  const result = await window.API.login(inputEmail.value, inputPassword.value);
  if (result && result.token) {
    localStorage.setItem(userToken, result.token);
    location.replace("app.html");
  }
};

loginForm.addEventListener("submit", onSubmit);
