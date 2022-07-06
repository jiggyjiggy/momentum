const h1 = document.querySelector(".hello h1");

const handleTitleClick = () => {
    const currentColor = h1.style.color
    let newColor = h1.style.color

    if (currentColor === 'blue') {
        newColor = 'tomato';
    } else {
        newColor = 'blue';
    }
    h1.style.color = newColor;
 }

h1.addEventListener("click", handleTitleClick);
