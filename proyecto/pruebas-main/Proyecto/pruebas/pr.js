document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navList = document.getElementById("navList");

    hamburgerMenu.addEventListener("click", function () {
        navList.classList.toggle("show");
    });
});