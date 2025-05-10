//turn pages when click next or prev button
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');
let lastPageIndex = 0
pageTurnBtn.forEach((el, index) => {
    turnPage(el, index)
})

function turnPage(el, index) {
    el.onclick = () => {
        const coverLeft = document.querySelector('.cover.cover-left');
        const coverRight = document.querySelector('.cover.cover-right');
        const textBook = document.querySelector('.textBook');
        const imageBook = document.querySelector('.imageBook');

        if (index == 0) {
            if (lastPageIndex == 3) {
                coverLeft.style.position = "absolute";
                coverLeft.style.transition = "transform 1s cubic-bezier(.645, .045, .355, 1)";
                coverLeft.style.transform = "rotateY(180deg)";
                coverLeft.style.zIndex = 1;
                textBook.style.transition = "opacity 4s ease";
                textBook.style.opacity = 1;
                imageBook.style.transition = "opacity 4s ease";
                imageBook.style.opacity = 1;
                lastPageIndex=0
            } else {
                coverLeft.style.position = "absolute";
                coverLeft.style.transition = "transform 1s cubic-bezier(.645, .045, .355, 1)";
                coverLeft.style.transform = "rotateY(0deg)";
                coverLeft.style.zIndex = 1;
                textBook.style.transition = "opacity .8s ease";
                textBook.style.opacity = 0;
                imageBook.style.transition = "opacity .8s ease";
                imageBook.style.opacity = 0;
                lastPageIndex =3
            }

        } else if (index == 6) {
            const pageTurnId = el.getAttribute('data-page');
            const pageTurn = document.getElementById(pageTurnId);
            lastPageIndex = 6
            if (pageTurn.classList.contains('turn')) {
                pageTurn.classList.remove('turn');
                setTimeout(() => {
                    pageTurn.style.zIndex = 20 - index;
                    coverRight.style.position = "absolute";
                    coverRight.style.zIndex = 1;
                }, 500)
            }
            else {
                pageTurn.classList.add('turn');
                setTimeout(() => {
                    pageTurn.style.zIndex = 20 + index;
                    coverRight.style.position = "absolute";
                    coverRight.style.zIndex = 1;
                }, 500)
            }
        } else if (index == 1 && lastPageIndex == 6) {
            lastPageIndex = 7
            coverRight.style.position = "absolute";
            coverRight.style.zIndex = 1;
            coverRight.style.transition = "transform 1s cubic-bezier(.645, .045, .355, 1)";
            coverRight.style.transform = "rotateY(0deg)";
        } else if (index == 1 && lastPageIndex == 7) {
            coverRight.style.position = "absolute";
            coverRight.style.zIndex = 1;
            coverRight.style.transition = "transform 1s cubic-bezier(.645, .045, .355, 1)";
            coverRight.style.transform = "rotateY(180deg)";
        } else if (index == 3) {
            lastPageIndex= 3;
            const pageTurnId = el.getAttribute('data-page');
            const pageTurn = document.getElementById(pageTurnId);

            if (pageTurn.classList.contains('turn')) {
                pageTurn.classList.remove('turn');
                setTimeout(() => {
                    pageTurn.style.zIndex = 20 - index;
                    coverLeft.style.position = "absolute";
                    coverLeft.style.zIndex = 1;
                }, 500)
            }
            else {
                pageTurn.classList.add('turn');
                setTimeout(() => {
                    pageTurn.style.zIndex = 20 + index;
                    coverLeft.style.position = "absolute";
                    coverLeft.style.zIndex = 1;
                }, 500)
            }
        } else {
            coverLeft.style.zIndex = 0;
            coverRight.style.zIndex = 0;
            const pageTurnId = el.getAttribute('data-page');
            const pageTurn = document.getElementById(pageTurnId);

            if (pageTurn.classList.contains('turn')) {
                pageTurn.classList.remove('turn');
                setTimeout(() => {
                    pageTurn.style.zIndex = 20 - index;

                }, 500)
            }
            else {
                pageTurn.classList.add('turn');
                setTimeout(() => {
                    pageTurn.style.zIndex = 20 + index;

                }, 500)
            }
        }

    }
}

//contact me button when click
const pages = document.querySelectorAll('.book-page.page-right');


//create reverse index function
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}


//opening animation
const coverRight = document.querySelector('.cover.cover-right');
const coverLeft = document.querySelector('.cover.cover-left');
const textBook = document.querySelector('.textBook');
const imageBook = document.querySelector('.imageBook');

//const pageLeft = document.querySelector('.book-page.page-left');

//opening animation (cover right animation)
setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100)

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800)


setTimeout(() => {
    coverLeft.style.zIndex = 1;
    coverLeft.style.position = "absolute";
    coverLeft.style.transition = "transform 1s cubic-bezier(.645, .045, .355, 1)";
    coverLeft.style.transform = "rotateY(180deg)";
    textBook.style.transition = "opacity 7s ease";
    textBook.style.opacity = 1;
    imageBook.style.transition = "opacity 7s ease";
    imageBook.style.opacity = 1;

}, 3300)

//opening animation (all page right animation)
pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500)

    }, (index + 1) * 200 + 2100)
})