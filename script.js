const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        btns.forEach((btn) => btn.classList.remove('active'))

        btn.classList.add('active');
        document.querySelector(btn.dataset.targetTab).classList.add('active');
    });
});