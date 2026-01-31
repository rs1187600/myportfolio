// Navbar shadow

window.addEventListener("scroll", () => {

    const nav = document.querySelector(".navbar");

    if (window.scrollY > 80) {
        nav.classList.add("shadow");
    } else {
        nav.classList.remove("shadow");
    }

});
