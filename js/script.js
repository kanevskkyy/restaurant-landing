const burgerBtn = document.getElementById("burger");
const nav = document.querySelector('.header__nav');

if (burgerBtn && nav) {
    burgerBtn.addEventListener("click", () => {
        nav.classList.toggle("header__nav--open");
        burgerBtn.classList.toggle("header__burger--active");
    });

    document.addEventListener("click", (e) => {
        if (!burgerBtn.contains(e.target) && !nav.contains(e.target)) {
            nav.classList.remove("header__nav--open");
            burgerBtn.classList.remove("header__burger--active");
        }
    });

    nav.querySelectorAll('.header__nav-link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove("header__nav--open");
            burgerBtn.classList.remove("header__burger--active");
        });
    });
}