document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll('.lazy');

    if ('IntersectionObserver' in window) {
        let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                }
            })
        }
)}
})

const poop = document.querySelector("#poof")

function licke (){
    poop.classList.toggle("show")
}