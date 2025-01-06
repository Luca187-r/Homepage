window.addEventListener('hashchange', function() {
    document.getElementById('nav-close').click();
});

document.getElementById('nav-open').addEventListener('click', () => {
    document.getElementsByClassName('nav-mobile-view')[0].classList.add('active');
    document.body.style='overflow-y: hidden;';
})

document.getElementById('nav-close').addEventListener('click', () => {
    document.getElementsByClassName('nav-mobile-view')[0].classList.remove('active');
    document.body.style='overflow-y: auto;';
})