function toggleMobileMenu(){
    document.getElementById("menu").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
    const toTop = document.querySelector(".to-top");

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
            toTop.classList.add("active");
        } else {
            toTop.classList.remove("active");
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const productContainers = [...document.querySelectorAll('.product-container')];
    const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
    const preBtn = [...document.querySelectorAll('.pre-btn')];

    productContainers.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;

        nxtBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        });

        preBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        });
    });
});



