let burgerLine = document.querySelector('.burger');

let nav = document.querySelector('.nav')

let count = 0

burgerLine.addEventListener('click', e => {
    count += 1;
    if (count % 2 == 0) {
        nav.style.transform = 'scale(1,0)'
    } else {
        nav.style.transform = 'scale(1,1)'
    }
})