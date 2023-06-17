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
}

isWebp();
openPhone();