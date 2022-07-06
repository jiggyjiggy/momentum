const h1 = document.querySelector(".hello h1");

h1.innerText = "aaa"

console.dir(h1)

// function handleh1Click() {
//     h1.style.color ="red";
// }

// const handleh1Click = () => {console.log("h1 was clicked")}
const handleh1Click = () => {
    h1.style.color ="red"
    console.log("abc")
}

const handleMouseEnter = () => {
    h1.innerText = "mouse is here"
}

const handleMouseLeave = () => {
    h1.innerText = "gone"
}

// h1.addEventListener("click", handleh1Click)
// h1.addEventListener("mouseenter", handleMouseEnter)
// h1.addEventListener("mouseleave", handleMouseLeave)

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadingElement

// h1.onclick = handleh1Click;
// h1.onmouseenter = handleMouseEnter;
// h1.onmouseleave = handleMouseLeave;

const handleWindowResize = () => {
    document.body.style.backgroundColor = "tomato"
}

const handleWindowCopy = () => {
    alert("copier");
}

const handleWindowOffline = () => {
    alert("SOS, No wifi");
}
const handleWindowOnline = () => {
    alert("good wifi");
}
h1.addEventListener("click", handleh1Click)
h1.addEventListener("mouseenter", handleMouseEnter)
h1.addEventListener("mouseleave", handleMouseLeave)

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
