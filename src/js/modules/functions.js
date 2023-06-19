const isWebp = () => {
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    testWebP(function (support) {
        let className = support ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
};

const openPhone = () => {
    const phone = document.querySelector('.phone__icon');
    const mainPhone = document.querySelector('.phone');

    phone.addEventListener('click', () => {
        mainPhone.classList.add('phone--active');
    });

    document.addEventListener('click', (evt) => {
        if (evt.target.closest('.phone__icon')) return;

        mainPhone.classList.remove('phone--active');
    })
};

const playVideo = () => {
    const buttons = document.querySelectorAll('.service__play');

    buttons.forEach(item => item.addEventListener('click', (evt) => {
        const target = item.closest('.service__video').querySelector('video');

        if (!target) return;

        target.play();
        item.classList.add('service__play--closed');

        target.addEventListener('click', () => {
            if (target.played) {
                target.pause();
                target.load();
                item.classList.remove('service__play--closed');
            }
        });
    }));
};

const popupClick = () => {
    const btn = document.querySelector('.discount-popup a');
    const popup = document.querySelector('.popup');
    const closeBtn = document.querySelector('.popup__close');

    btn.addEventListener('click', (evt) => {
        evt.preventDefault();

        popup.classList.remove('popup--closed');
    });

    closeBtn.addEventListener('click', (evt) => {
        popup.classList.add('popup--closed');
    })
}

isWebp();
openPhone();
playVideo();
popupClick();