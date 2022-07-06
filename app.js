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

title.addEventListener("click", handleTitleClick)






// https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadingElement

