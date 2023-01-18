const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const elements = Object.create(null, {
    email: {value: e.currentTarget.email.value},
    password: {value: e.currentTarget.password.value},
  })

  if (e.currentTarget.email.value === "" || e.currentTarget.password.value === "") {
    return alert("Все поля должны быть заполнены!");
  }

  console.log(elements);
  e.currentTarget.reset();
}

