document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});
$(document).ready(function() {
    if (!sessionStorage.getItem('loadingShown')) {
        $('body').load('/Header-Footer/load.html', function() {
            setTimeout(function() {
                sessionStorage.setItem('loadingShown', 'true');
                location.reload();
            }, 1000);
        });
    } else {
        sessionStorage.removeItem('loadingShown');
    }
});
document.getElementById("order-button").addEventListener("click", function() {
    window.location.href = "/Order Folder/order.html";
});