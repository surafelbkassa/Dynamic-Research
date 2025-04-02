document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const links = document.querySelectorAll('.sidebar nav ul li a');
    const themeToggle = document.getElementById('toggle-theme');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target.getAttribute('data-tab');
            tabs.forEach(tab => tab.classList.remove('active'));
            document.getElementById(target).classList.add('active');
        });
    });

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});
