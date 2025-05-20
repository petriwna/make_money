import Splide from '@splidejs/splide';

export class Main {
    constructor() {
        this.mobileMenu = document.querySelector('.mobile-menu');
        this.menuBtnOpen = document.querySelector('.menu-btn-open');
        this.menuBtnClose = document.querySelector('.menu-btn-close');
        this.splideContainer = document.querySelector('.career-section__splide');

        this.createSplide();
        this.addEventListeners();
    }

    addEventListeners() {
        this.menuBtnOpen.addEventListener('click', this.handleMenuButton.bind(this));
        this.menuBtnClose.addEventListener('click', this.handleMenuButton.bind(this));
    }


    handleMenuButton() {
        this.toggleMenu();
        this.disableScroll();
    }

    toggleMenu() {
        this.mobileMenu.classList.toggle('is-open');
    }

    disableScroll() {
        document.body.classList.toggle('is-scroll-disable');
    }

    handleFormSubmit(event) {
        event.preventDefault();

        window.location.href = 'thank-you.html';
    }

    createSplide(){
        const isMobile = window.innerWidth < 1280;
        if (isMobile) {
            this.splideContainer.classList.add('splide');

            this.initSplide();
        }
    }

    initSplide() {
        const splide = new Splide('.splide', {
            type: 'loop',
            gap: '10px',
            drag: 'free',
            pagination: true,
            arrows: false,
            perPage: 3,
            breakpoints: {
                768: {
                    perPage: 2,
                },
                600: {
                    perPage: 1,
                }
            },
        });

        splide.mount();
    }
}
