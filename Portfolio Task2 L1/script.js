
    function toggleMenu() {
        const nav = document.querySelector('nav ul');
        nav.classList.toggle('show');
    }

    const menuButton = document.querySelector('.left');
    menuButton.addEventListener('click', toggleMenu);

    function highlightCurrentPage() {
        const currentPage = window.location.pathname;
        const links = document.querySelectorAll('nav ul li');

        links.forEach(link => {
            const linkHref = link.textContent.toLowerCase();
            if (currentPage.includes(linkHref)) {
                link.classList.add('active');
            }
        });
    }
    window.addEventListener('load', highlightCurrentPage);

