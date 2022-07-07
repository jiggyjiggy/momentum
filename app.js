// const loginForm = document.querySelector("#login-form")
// const loginInput = loginForm.querySelector("input")
// const loginButton = loginForm.querySelector("button")

const loginInput = document.querySelector("#login-form input")
const loginButton = document.querySelector("#login-form button")

const onLoginBtnClick = () => {
    const username = loginInput.value;
    if (username === "") {
        alert("Please write yout name");
    } else if (username.length > 15) {
        alert("Your name is too long")
    }
}

loginButton.addEventListener("click", onLoginBtnClick)
