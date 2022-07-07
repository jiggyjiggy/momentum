// const loginForm = document.querySelector("#login-form")
// const loginInput = loginForm.querySelector("input")
// const loginButton = loginForm.querySelector("button")

const loginInput = document.querySelector("#login-form input")
const loginButton = document.querySelector("#login-form button")

const onLoginBtnClick = () => {
    const username = loginInput.value;
    console.log(username)
}

loginButton.addEventListener("click", onLoginBtnClick)
