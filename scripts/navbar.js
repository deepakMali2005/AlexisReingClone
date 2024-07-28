let navbar = document.querySelector(".navbar");
let navbarRes = document.querySelector(".navbar-res")
let navbarResBtn = document.querySelector(".navbar-res button");

// navbar.style.backgroundColor = "transparent";
// navbar.style.color = "white";



document.addEventListener("scroll", () => {

    if (window.scrollY > 0) {
        navbar.style.backgroundColor = "aliceblue";
        navbar.style.color = "black";
        navbar.style.boxShadow = "0px 1px 5px";

    } else {
        navbar.style.backgroundColor = "transparent";
        navbar.style.color = "aliceblue";
        navbar.style.boxShadow = "0 0 0";
    }
})

document.addEventListener("scroll", () => {

    if (window.scrollY > 0) {
        navbarRes.style.backgroundColor = "aliceblue";
        navbarRes.style.color = "black";
        navbarResBtn.style.color = "black";
        navbarRes.style.boxShadow = "0px 1px 5px";

    } else {
        navbarRes.style.backgroundColor = "transparent";
        navbarRes.style.color = "aliceblue";
        navbarResBtn.style.color = "aliceblue";
        navbarRes.style.boxShadow = "0 0 0";
    }
})

let extMenu = document.querySelector(".extended-menu");
let hamburger = document.querySelector(".hamburger-icon");

hamburger.addEventListener("click", (event) => {
    event.stopPropagation()
    extMenu.style.display = "block";
})

let closeIcon = document.querySelector(".close-icon");

closeIcon.addEventListener("click", (event) => {
    event.stopPropagation()
    extMenu.style.display = "none";
})