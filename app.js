const h1 = document.querySelector(".hello h1");

const handleTitleClick = () => {
    const clickedClass = "active"
    h1.classList.toggle(clickedClass);
 }

h1.addEventListener("click", handleTitleClick);
