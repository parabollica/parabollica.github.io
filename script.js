
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleAboutParagraphScroll() {
    var aboutParagraph = document.querySelector('#about .about-paragraph');

    if (isElementInViewport(aboutParagraph) && !aboutParagraph.classList.contains('show')) {
        aboutParagraph.classList.add('show');
    }
}

function handleServiceItemScroll() {
    var serviceItems = document.querySelectorAll('.service-item');

    serviceItems.forEach(function (item) {
        if (isElementInViewport(item) && !item.classList.contains('show')) {
            item.classList.add('show');
        }
    });
}

// Trigger animations on initial page load
document.addEventListener('DOMContentLoaded', function () {
    handleAboutParagraphScroll();
    handleServiceItemScroll();
});

// Trigger animations on scroll
document.addEventListener('scroll', function () {
    handleAboutParagraphScroll();
    handleServiceItemScroll();
});
