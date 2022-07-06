const title = document.querySelector(".hello h1");

title.innerText = "aaa"

console.dir(title)

// function handleTitleClick() {
//     title.style.color ="red";
// }

// const handleTitleClick = () => {console.log("title was clicked")}
const handleTitleClick = () => {
    title.style.color ="red"
    console.log("abc")
}

const handleMouseEnter = () => {
    title.innerText = "mouse is here"
}

const handleMouseLeave = () => {
    title.innerText = "gone"
}

title.addEventListener("click", handleTitleClick)
title.addEventListener("mouseenter", handleMouseEnter)
title.addEventListener("mouseleave", handleMouseLeave)






// https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadingElement

