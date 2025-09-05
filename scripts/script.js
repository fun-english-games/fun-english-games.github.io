document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        this.textContent = '🌓 Switch to Light Theme';
    } else {
        this.textContent = '🌓 Switch to Dark Theme';
    }
});

document.getElementById('sidebar-toggle').addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    const main = document.querySelector('main');
    sidebar.classList.toggle('retracted');
    main.classList.toggle('full-width');

    if (sidebar.classList.contains('retracted')) {
        this.textContent = 'Expand Sidebar';
    } else {
        this.textContent = 'Retract Sidebar';
    }
});
