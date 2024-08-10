const navLinks = document.querySelector('.nav-links')
        function onToggleMenu(e){
            e.name = e.name === 'menu' ? 'close' : 'menu'
            navLinks.classList.toggle('top-[9%]')
        }
        const checkbox = document.querySelector('#mode');
        const html = document.querySelector('html');

        checkbox.addEventListener('click', function () {
            checkbox.checked ? html.classList.add('dark') : html.classList.remove('dark');
        });