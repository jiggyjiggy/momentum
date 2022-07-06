const h1 = document.querySelector(".hello h1");

const handleTitleClick = () => {
    const clickedClass = "active"
    
    const currentClass = h1.className
    let newClass;
    if (currentClass === clickedClass) {
        newClass = ""
    } else {
        newClass = clickedClass
    }
    h1.className = newClass 
 }

h1.addEventListener("click", handleTitleClick);
