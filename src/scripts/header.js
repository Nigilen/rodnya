const toggleNavBtn = document.querySelector("#toggle-nav-btn");
const toggleNavList = document.querySelector("#toggle-nav-list");
const openMenuClass = "open";

toggleNavBtn.addEventListener('click', () => {
    if (toggleNavBtn && toggleNavList) {
        if (toggleNavBtn.classList.contains(openMenuClass)) {
            toggleNavBtn.classList.remove(openMenuClass);
            toggleNavList.classList.remove(openMenuClass);
        } else {
            toggleNavBtn.classList.add(openMenuClass);
            toggleNavList.style.transition = `transform 250ms ease-in-out`;
            toggleNavList.classList.add(openMenuClass);
        }
    }
});