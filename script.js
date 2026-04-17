function openMenu() {
    document.body.classList.add("menu--open");
}

function closeMenu() {
    document.body.classList.remove("menu--open");
}

// Enhance closing behavior so it works on all screen sizes:
// - close when a modal link is clicked
// - close when clicking outside the modal
// - close on Escape key
// - close when resizing to desktop width (>= 1024px)
(function () {
    document.addEventListener('DOMContentLoaded', function () {
        var modal = document.querySelector('.modal');
        var modalLinks = document.querySelectorAll('.modal__link');

        if (modalLinks && modalLinks.length) {
            modalLinks.forEach(function (link) {
                link.addEventListener('click', function () {
                    closeMenu();
                });
            });
        }

        // Click outside modal closes the menu (but ignore clicks on the menu button)
        document.addEventListener('click', function (e) {
            if (!modal) return;
            var isOpen = document.body.classList.contains('menu--open');
            var clickedInside = modal.contains(e.target);
            var clickedMenuBtn = !!e.target.closest('.btn__menu');
            if (isOpen && !clickedInside && !clickedMenuBtn) {
                closeMenu();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeMenu();
        });

        // Ensure menu is closed when resizing to wide screens (desktop)
        function handleResize() {
            if (window.innerWidth >= 1024) {
                closeMenu();
            }
        }

        window.addEventListener('resize', handleResize);

        // Initial check
        handleResize();
    });
})();