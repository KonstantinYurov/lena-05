// Реалзация работы кнопки "наверх" START

document.addEventListener('DOMContentLoaded', () => {
    const popupWrapper = document.querySelector('.popup-notification__wrapper');

    if (popupWrapper) {
        popupWrapper.addEventListener('click', () => {
            scrollToTop();
        });

        function scrollToTop() {
            const scrollDuration = 500;
            const scrollStep = -window.scrollY / (scrollDuration / 15);

            const scrollInterval = setInterval(() => {
                if (window.scrollY !== 0) {
                    window.scrollBy(0, scrollStep);
                } else {
                    clearInterval(scrollInterval);
                }
            }, 15);
        }
    }
});

// Реалзация работы кнопки "наверх" END

