function toggleMenu() {
    const burger = document.querySelector('.burger-menu');
    const nav = document.getElementById('sidebar');

    if (!burger || !nav) {
        return;
    }

    burger.classList.toggle('active');
    nav.classList.toggle('active');

    const isExpanded = burger.classList.contains('active');
    burger.setAttribute('aria-expanded', isExpanded);
}

document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const burger = document.querySelector('.burger-menu');

    if (!sidebar || !burger) {
        return;
    }

    sidebar.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            if (burger.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
});

function showMessage() {
    alert("Selamat Datang ke laman web Damia!");
}