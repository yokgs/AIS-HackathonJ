document.querySelector('button.menu').addEventListener('click', e => {
    e.preventDefault()
    document.querySelector('body>header>nav').setAttribute('class', 'active');
});
document.querySelector('body>header>nav>.close').addEventListener('click', e => {
    e.preventDefault()
    document.querySelector('body>header>nav.active').setAttribute('class', '');
});