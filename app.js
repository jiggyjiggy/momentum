// const loginForm = document.querySelector("#login-form")
// const loginInput = loginForm.querySelector("input")
// const loginButton = loginForm.querySelector("button")

// const loginInput = document.querySelector("#login-form input")
// const loginButton = document.querySelector("#login-form button")

// const onLoginBtnClick = () => {
//     const username = loginInput.value;
//     console.log(username)
// }

// loginButton.addEventListener("click", onLoginBtnClick)

const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"

const link = document.querySelector("a")

const onLoginSubmit = (event) => {
    event.preventDefault();
    console.log(event)
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(username);
    localStorage.setItem("username", username)
    // greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`;

    greeting.classList.remove(HIDDEN_CLASSNAME);

}

const handleLinkClick = (event) => {
    event.preventDefault()
    console.log(event)
    alert("click")
}

loginForm.addEventListener("submit", onLoginSubmit)
link.addEventListener("click", handleLinkClick);